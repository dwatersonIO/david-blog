var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  manifest: () => manifest
});
const manifest = {
  appDir: "_app",
  assets: new Set(["favicon.png"]),
  _: {
    mime: { ".png": "image/png" },
    entry: { "file": "start-a9da20dc.js", "js": ["start-a9da20dc.js", "chunks/vendor-531a9f1f.js", "chunks/preload-helper-ec9aa979.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toModule(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/10.js")))
    ],
    routes: [
      {
        type: "page",
        pattern: /^\/$/,
        params: null,
        path: "/",
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/about\/?$/,
        params: null,
        path: "/about",
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/blog\/?$/,
        params: null,
        path: "/blog",
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/blog\/01-post\/?$/,
        params: null,
        path: "/blog/01-post",
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/blog\/02-post\/?$/,
        params: null,
        path: "/blog/02-post",
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/blog\/03-post\/?$/,
        params: null,
        path: "/blog/03-post",
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/blog\/04-Post\/?$/,
        params: null,
        path: "/blog/04-Post",
        a: [0, 8],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/tags\/([^/]+?)\/?$/,
        params: (m) => ({ tag: m[1] }),
        path: null,
        a: [0, 9],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/Box\/?$/,
        params: null,
        path: "/Box",
        a: [0, 10],
        b: [1]
      }
    ]
  }
};
