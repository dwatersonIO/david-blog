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
  default: () => _layout
});
var import_index_7340f048 = __toModule(require("../../chunks/index-7340f048.js"));
var Nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "ul.svelte-vy4ony{display:flex;margin:0;padding:0;list-style:none}li.svelte-vy4ony{margin-right:10px}",
  map: null
};
const Nav = (0, import_index_7340f048.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav><ul class="${"svelte-vy4ony"}"><li class="${"svelte-vy4ony"}"><a href="${"/"}">Home</a></li>
        <li class="${"svelte-vy4ony"}"><a href="${"/blog"}">Blog</a></li></ul>
</nav>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1jaxk4w{max-width:600px;margin:50px auto\r\n    }",
  map: null
};
const _layout = (0, import_index_7340f048.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-1jaxk4w"}">${slots.default ? slots.default({}) : ``}
    ${(0, import_index_7340f048.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
</div>`;
});
