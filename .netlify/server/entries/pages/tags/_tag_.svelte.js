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
  default: () => U5Btagu5D,
  load: () => load
});
var import_index_7340f048 = __toModule(require("../../../chunks/index-7340f048.js"));
const allPosts = { "../blog/01-post.md": () => Promise.resolve().then(() => __toModule(require("../blog/01-post.md.js"))), "../blog/02-post.md": () => Promise.resolve().then(() => __toModule(require("../blog/02-post.md.js"))), "../blog/03-post.md": () => Promise.resolve().then(() => __toModule(require("../blog/03-post.md.js"))), "../blog/04-Post.md": () => Promise.resolve().then(() => __toModule(require("../blog/04-Post.md.js"))) };
let body = [];
for (let path in allPosts) {
  body.push(allPosts[path]().then(({ metadata }) => {
    return { path, metadata };
  }));
}
const load = async ({ url, params }) => {
  const posts = await Promise.all(body);
  const tag = params.tag;
  console.log(params.tag);
  const filteredPosts = posts.filter((post) => {
    return post.metadata.tags.includes(tag);
  });
  return { props: { filteredPosts, tag } };
};
const U5Btagu5D = (0, import_index_7340f048.c)(($$result, $$props, $$bindings, slots) => {
  let { filteredPosts } = $$props;
  let { tag } = $$props;
  if ($$props.filteredPosts === void 0 && $$bindings.filteredPosts && filteredPosts !== void 0)
    $$bindings.filteredPosts(filteredPosts);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  return `<h1>${(0, import_index_7340f048.e)(tag)}</h1>

<ul>${(0, import_index_7340f048.a)(filteredPosts, ({ path, metadata: { title } }) => {
    return `<li><a${(0, import_index_7340f048.b)("href", `/blog/${path.replace(".md", "").replace(".svx", "")}`, 0)}>${(0, import_index_7340f048.e)(title)}</a>
        </li>`;
  })}</ul>`;
});
