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
  default: () => Blog,
  load: () => load
});
var import_index_7340f048 = __toModule(require("../../../chunks/index-7340f048.js"));
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-iq2qxj{margin:0;font-size:0.8rem}li.svelte-iq2qxj{margin-bottom:20px}.tag.svelte-iq2qxj{text-decoration:none;margin-right:10px;color:#555}.tag.svelte-iq2qxj:hover{color:rgb(255, 81, 0)\r\n    }.date.svelte-iq2qxj{font-size:0.7rem;color:grey\r\n\r\n    }",
  map: null
};
const allPosts = { "./01-post.md": () => Promise.resolve().then(() => __toModule(require("./01-post.md.js"))), "./02-post.md": () => Promise.resolve().then(() => __toModule(require("./02-post.md.js"))), "./03-post.md": () => Promise.resolve().then(() => __toModule(require("./03-post.md.js"))), "./04-Post.md": () => Promise.resolve().then(() => __toModule(require("./04-Post.md.js"))) };
let body = [];
for (let path in allPosts) {
  body.push(allPosts[path]().then(({ metadata }) => {
    return { path, metadata };
  }));
}
const load = async () => {
  const posts = await Promise.all(body);
  return { props: { posts } };
};
const Blog = (0, import_index_7340f048.c)(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  const dateSortedPosts = posts.slice().sort((post1, post2) => {
    return new Date(post2.metadata.date) - new Date(post1.metadata.date);
  });
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  return `<h1>Blog</h1>
    
    
    
    <ul>${(0, import_index_7340f048.a)(dateSortedPosts, ({ path, metadata: { title, tags, date } }) => {
    return `<li class="${"svelte-iq2qxj"}"><a${(0, import_index_7340f048.b)("href", `/blog/${path.replace(".md", "").replace(".svx", "")}`, 0)}>${(0, import_index_7340f048.e)(title)}</a>
                <p class="${"date svelte-iq2qxj"}">${(0, import_index_7340f048.e)(new Date(date).toDateString())}</p>
                <p class="${"svelte-iq2qxj"}">${(0, import_index_7340f048.a)(tags, (tag) => {
      return `<a class="${"tag svelte-iq2qxj"}"${(0, import_index_7340f048.b)("href", `/tags/${tag}`, 0)}>#${(0, import_index_7340f048.e)(tag)} </a>`;
    })}</p>
            </li>`;
  })}
    </ul>`;
});
