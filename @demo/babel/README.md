cd src/babel

# es6 2 es2015[--presets es2015]
babel es6.js --presets es2015

# es6 2 es2015[.babelrc>presets]
babel es6.js

# es6 2 file 
babel es6.js -o es5.js
babel es6.js --out-file es5.js

# 实时监控 es6.js 一有变化就重新编译
babel es6.js -w --out-file es5.js
babel es6.js --watch --out-file es5.js

# 编译整个 src 文件夹并输出到 lib 文件夹中
babel src -d lib
babel src --out-dir lib

# 编译整个 src 文件夹并输出到一个文件中
babel src --out-file es5.lib.js

# 直接输入 babel-node 命令，可以在命令行中直接运行ES6代码
babel-node

---
`ES6学习之Babel的正确安装姿势 - 推酷`
http://www.tuicool.com/articles/i636J3A