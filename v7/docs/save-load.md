---
id: save-load
title: Save/Load
---

js-dos supports saving and restoring game progress. You can play in game from time to time
without losing progress. It's working automically while you dont't change bundle url,
or version of js-dos.

This feature works by dumping whole file system in updated `js-dos bundle` and using it instead of
loading bundle from url. This feature is backed by [CommandInterface](command-interface.md) `persist` function.

You can implement your own save/load feature like this:

```ts
const ci = await Dos(<element>).run(<bundle url>);

// saving
const updatedBundle = await ci.persist();

// <new session>

// loading
const ci = await Dos(<element>)
                   .run(URL.createObjectURL(new Blob([updatedBundle.buffer]));

```

## Where progress is stored

While you using default Save/Load feature of js-dos all updates are stored in indexed db.
This indexed db is used for caching js-dos wasm binaries. The updated bundle is stored
like key value record, where key is a `bundle url` and value is `Uint8Array` from `ci.persist()` call.

All progress will be lost if you update js-dos version or change bundle url.


Default implementation:
```typescript title="https://raw.githubusercontent.com/caiiiycuk/js-dos/emulators-ui/src/persist/save-load.ts"
{}
```