// Typings reference file, see links for more information
// https://github.com/typings/typings
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

// / <reference path="../typings/browser.d.ts" />
declare var module: { id: string };

declare module 'socket.io-client' {
  var socket: any;
  export = socket;
}
