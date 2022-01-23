const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-a9da20dc.js","js":["start-a9da20dc.js","chunks/vendor-531a9f1f.js","chunks/preload-helper-ec9aa979.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/10.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/blog\/?$/,
				params: null,
				path: "/blog",
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/blog\/01-post\/?$/,
				params: null,
				path: "/blog/01-post",
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/blog\/02-post\/?$/,
				params: null,
				path: "/blog/02-post",
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/blog\/03-post\/?$/,
				params: null,
				path: "/blog/03-post",
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/blog\/04-Post\/?$/,
				params: null,
				path: "/blog/04-Post",
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/tags\/([^/]+?)\/?$/,
				params: (m) => ({ tag: m[1]}),
				path: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Box\/?$/,
				params: null,
				path: "/Box",
				a: [0,10],
				b: [1]
			}
		]
	}
});
