# BootstrapVueのTooltipを複数要素に対して表示させるサンプルリポジトリ

## 実行

```bash
yarn serve
```

## plugin

### pug

```bash
yarn add pug pug-plain-loader
```

```js
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module // add
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-plain-loader")
      .loader("pug-plain-loader")
      .end();
  }
}
```
