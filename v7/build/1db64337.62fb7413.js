(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(2),o=a(11),s=(a(0),a(156)),r={id:"overview",title:"Overview",sidebar_label:"Overview"},i={id:"overview",isDocsHomePage:!0,title:"Overview",description:"js-dos v7 is still in under development and some features are not ready.",source:"@site/docs/overview.md",permalink:"/v7/build/docs/",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/overview.md",sidebar_label:"Overview",sidebar:"someSidebar",next:{title:"Releases",permalink:"/v7/build/docs/releases"}},l=[{value:"js-dos bundle",id:"js-dos-bundle",children:[]},{value:"Run jsdos file",id:"run-jsdos-file",children:[{value:"1. Use player hosted on dos.zone",id:"1-use-player-hosted-on-doszone",children:[]},{value:"2. Use js-dos api",id:"2-use-js-dos-api",children:[]},{value:"3. Using emulators",id:"3-using-emulators",children:[]}]}],b={rightToc:l};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"js-dos v7 is still in under development and some features are not ready.\nFor example you can't use mouse yet. Please use ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://js-dos.com"}),"js-dos 6.22")," for production\nprojects."))),Object(s.b)("p",null,"New version of js-dos is more modular, you can use it partially. It consists of:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"js-dos bundle - universal package that js-dos understands"),Object(s.b)("li",{parentName:"ul"},"emulators - ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/emulators"}),"npm package"),", that provide just DOS emulator that can be runned in different environments"),Object(s.b)("li",{parentName:"ul"},"emulators-ui - ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/emulators-ui"}),"npm package"),", a set of ui/sound components to render emulator output in browser"),Object(s.b)("li",{parentName:"ul"},"js-dos - ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/js-dos/v/beta"}),"npm package")," that combine everything to run DOS program in browser")),Object(s.b)("h2",{id:"js-dos-bundle"},"js-dos bundle"),Object(s.b)("p",null,"js-dos 6.22 have very easy API to run DOS program in browser, but to start it you need configure program:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"download game archive (usually zip)"),Object(s.b)("li",{parentName:"ul"},"extract it"),Object(s.b)("li",{parentName:"ul"},"configure dos file system"),Object(s.b)("li",{parentName:"ul"},"configure dosbox options (cycles, renderer type, etc.)"),Object(s.b)("li",{parentName:"ul"},"configre controllers (mouse, keyboard type, etc.)")),Object(s.b)("p",null,"Often quality of game also depends on good configuration."),Object(s.b)("p",null,"Starting from js-dos 7, api expects ",Object(s.b)("inlineCode",{parentName:"p"},"js-dos bundle")," that already contains all configuration needed to start program.\n",Object(s.b)("inlineCode",{parentName:"p"},"js-dos bundle")," it's a just ",Object(s.b)("strong",{parentName:"p"},"ZIP")," archive that contains game it self and js-dos config file (same as dosbox.conf file).\nFor example, ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://talks.dos.zone/t/digger-may-06-1999/1922"}),"digger.jsdos"),": "),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),".jsdos\\dosbox.conf - dosbox configuration file\nDIGGER.COM         - game file\n")),Object(s.b)("p",null,"You can generate ",Object(s.b)("inlineCode",{parentName:"p"},"js-dos bundle")," programmatically. But, we recommend to use our ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://dos.zone/en/studio"}),"bundle generator"),"\nMoreover you can search on ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://talks.dos.zone/search?expanded=true&q=%23en%20tags%3Ajsdos"}),"our database")," if someone already uploaded ",Object(s.b)("inlineCode",{parentName:"p"},"js-dos bundle")," for program."),Object(s.b)("p",null,"Read ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://dos.zone/en/guide/studio"}),"guide")," about creating ",Object(s.b)("inlineCode",{parentName:"p"},"js-dos bundle"),"."),Object(s.b)("h2",{id:"run-jsdos-file"},"Run jsdos file"),Object(s.b)("p",null,"Once you have ",Object(s.b)("inlineCode",{parentName:"p"},"jsdos bundle")," you can easily run it in browser. There are several options:"),Object(s.b)("h3",{id:"1-use-player-hosted-on-doszone"},"1. Use player hosted on dos.zone"),Object(s.b)("p",null,"Fastest way to embed jsdos on your page. You just need url of ",Object(s.b)("inlineCode",{parentName:"p"},"jsdos bundle")," (you can get it from game database)."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<iframe\n  id="jsdos"\n  src="https://dos.zone/en/player/https%3A%2F%2Fdoszone-uploads.s3.dualstack.eu-central-1.amazonaws.com%2Foriginal%2F2X%2F9%2F9ed7eb9c2c441f56656692ed4dc7ab28f58503ce.jsdos"\n/>\n')),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"src")," can be composed like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const src = "https://dos.zone/en/player/" + encodeURIComponent(bundleUrl);\n')),Object(s.b)("p",null,"To recieve input you should focus the iframe:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'document.getElementById("jsdos").focus();\n')),Object(s.b)("p",null,"Complete example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html",metastring:'title="examples/iframe.html"',title:'"examples/iframe.html"'}),"{}\n")),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("ol",{parentName:"div"},Object(s.b)("li",{parentName:"ol"},"Drag with mouse to play without keyboard!"),Object(s.b)("li",{parentName:"ol"},"Open top menu to type records name on mobile.")))),Object(s.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Iframe integration didn't support for fullscreen button yet, if you need it look forward."))),Object(s.b)("h3",{id:"2-use-js-dos-api"},"2. Use js-dos api"),Object(s.b)("p",null,"js-dos v7 is even simple then 6.22, to run ",Object(s.b)("inlineCode",{parentName:"p"},"bundle")," you just need a one line of code:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'Dos(document.getElementById("jsdos")).run("some.jsdos");\n')),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Dos")," recieve HTMLDivElement and use it to create player ui. To run ",Object(s.b)("inlineCode",{parentName:"p"},"jsdos bundle"),"\njust use method ",Object(s.b)("inlineCode",{parentName:"p"},"run")," with url pointed to ",Object(s.b)("inlineCode",{parentName:"p"},"jsdos bundle"),"."),Object(s.b)("p",null,"To use js-dos you need to add ",Object(s.b)("inlineCode",{parentName:"p"},"js-dos.js")," script, and ",Object(s.b)("inlineCode",{parentName:"p"},"js-dos.css")," style.\nAlso you need to specify path prefix os js-dos installation:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<script src="/v7/build/releases/latest/js-dos/js-dos.js"><\/script>\n<link href="/v7/build/releases/latest/js-dos/js-dos.css" rel="stylesheet">\n// ...\n<script>\n  emulators.pathPrefix = "/v7/build/releases/latest/js-dos/";\n  Dos(/*element*/).run(/*bundleUrl*/);\n')),Object(s.b)("p",null,"Complete example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html",metastring:'title="examples/dos.html"',title:'"examples/dos.html"'}),"{}\n")),Object(s.b)("h3",{id:"3-using-emulators"},"3. Using emulators"),Object(s.b)("p",null,"Most flexible way. Emulators package conains core that can run DOS program in wasm environment. Now it supports two execution modes:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"direct - run DOS emulation inside main browser thread."),Object(s.b)("li",{parentName:"ul"},"worker - run DOS emulation inside worker thread.")),Object(s.b)("p",null,"Read ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"estimating-performance"}),"guide")," how we use emulators to estimate js-dos performance."))}d.isMDXComponent=!0}}]);