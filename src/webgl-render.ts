import { CommandInterface } from "emulators";

const vsSource = `
attribute vec4 aVertexPosition;
attribute vec2 aTextureCoord;

varying highp vec2 vTextureCoord;

void main(void) {
  gl_Position = aVertexPosition;
  vTextureCoord = aTextureCoord;
}
`;

const fsSource = `
varying highp vec2 vTextureCoord;
uniform sampler2D uSampler;


void main(void) {
  highp vec4 color = texture2D(uSampler, vTextureCoord);
  gl_FragColor = vec4(color.r, color.g, color.b, 1.0);
}
`;

export function bindCanvasToCi(canvas: HTMLCanvasElement, ci: CommandInterface) {
    const gl = canvas.getContext("webgl");
    if (gl === null) {
        throw new Error("Unable to create webgl context on given canvas");
    }

    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
    const vertexPosition = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
    const textureCoord = gl.getAttribLocation(shaderProgram, 'aTextureCoord');
    //const projectionMatrix = gl.getUniformLocation(shaderProgram, 'uProjectionMatrix');
    //const modelViewMatrix = gl.getUniformLocation(shaderProgram, 'uModelViewMatrix');
    const uSampler = gl.getUniformLocation(shaderProgram, 'uSampler');

    initBuffers(gl, vertexPosition, textureCoord);

    let width = 320;
    let height = 200;

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    const pixel = new Uint8Array([0, 0, 0, 255]);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,
                  1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
                  pixel);

    gl.useProgram(shaderProgram);
    gl.activeTexture(gl.TEXTURE0);
    gl.uniform1i(uSampler, 0);

    ci.events().onFrameSize((w, h) => {
        width = w;
        height = h;
    });

    ci.events().onFrame((rgba) => {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,
                      width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE,
                      rgba);
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
    });
}

function initShaderProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  const shaderProgram = gl.createProgram() as WebGLShader;
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    throw new Error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
  }

  return shaderProgram;
}

function loadShader(gl: WebGLRenderingContext, shaderType: GLenum, source: string) {
  const shader = gl.createShader(shaderType) as WebGLShader;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const info = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      throw new Error('An error occurred compiling the shaders: ' + info);
  }

  return shader;
}

function initBuffers(gl: WebGLRenderingContext, vertexPosition: number, textureCoord: number) {
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  const positions = [
    -1.0, -1.0,  1.0,
     1.0, -1.0,  1.0,
     1.0,  1.0,  1.0,
    -1.0,  1.0,  1.0,
  ];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  gl.vertexAttribPointer(vertexPosition, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(vertexPosition);

  const textureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);
  const textureCoordinates = [
    0.0,  1.0,
    1.0,  1.0,
    1.0,  0.0,
    0.0,  0.0,
  ];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),
                gl.STATIC_DRAW);

  gl.vertexAttribPointer(textureCoord, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(textureCoord);

  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  const indices = [
    0,  1,  2,      0,  2,  3,
  ];
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(indices), gl.STATIC_DRAW);
}