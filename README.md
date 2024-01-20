Github Pages: https://horo5502.github.io/creator-docs_ja/

# What is this?
[VRChat公式クリエイタードキュメント](https://creators.vrchat.com/)を**非公式に**翻訳したものです。
翻訳途中なので、まだ翻訳されていないページもあります。未翻訳のページは表示されないはずです。

[公式ドキュメントのGithub](https://github.com/vrchat-community/creator-docs)

---
以下DocusaurusのREADME
# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
