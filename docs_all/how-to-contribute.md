---
title: "翻訳の貢献"
sidebar_position: 99
---

このサイトは、まだまだ翻訳途中のページがたくさんあります。  
現在、管理者が忙しいため新規翻訳やドキュメントの更新はストップしています。  
また、翻訳の貢献も受け付けておりません。
<!-- ## 要約
下記のリポジトリにPull Requestをお願いします。  
https://github.com/Horo5502/creator-docs_ja  

また、誤字脱字を見つけられた際には、Issueを立てていただけるとありがたいです。

:::note
翻訳を開始する前に、[翻訳フォーマット](/style-guide)を一読ください。
:::

## はじめに
このサイトへの貢献にご興味をお持ちいただき、ありがとうございます。  
このサイトは、まだまだ翻訳途中のページがたくさんあります。現在、貢献は新規翻訳のみを受け付けております。

## 前提: 現在のCreatorDocsを取り巻く状況
2024年8月現在、VRChatの公式Creator Docsは、サイトが4つに分かれており、それに伴ってリポジトリも4つに分かれています。
#### CreatorDocs(メイン)
ウェブサイト: https://creators.vrchat.com/  
リポジトリ: https://github.com/vrchat-community/creator-docs

#### Usharp Docs
ウェブサイト: https://udonsharp.docs.vrchat.com/  
リポジトリ: https://github.com/vrchat-community/UdonSharp

#### Creator Companion(VCC) Docs
ウェブサイト: https://vcc.docs.vrchat.com/  
リポジトリ: https://github.com/vrchat-community/creator-companion

#### ClientSim Docs
ウェブサイト: https://clientsim.docs.vrchat.com/  
リポジトリ: https://github.com/vrchat-community/ClientSim

(UsharpとClientSimの公式リポジトリには、ドキュメントファイルだけでなくソフトウェア自体のファイルも入っています。ドキュメントのファイル群は、`Tools/Docusaurus`内に格納されているようです。)

このサイトでは、上記4つのDocsの内容を一つにまとめています。  
このうち、Usharp Docsサイトはほとんどの原文ファイルが一年以上更新されていません。  
反対に、メインのサイトにUsharpのドキュメントが掲載され始めていることから、今後Usharp関連の情報はメインのサイトに掲載されることが予想されます。

## 貢献方法
現在、貢献は新規翻訳のみを受け付けております。
- 新規翻訳
    - 新しくファイルを作成して、翻訳する
    - 翻訳途中のファイルの翻訳を進める

このウェブサイトのリポジトリをクローンして、Markdownファイル(翻訳文)を追加してから、Pull Requestを飛ばしてください。  

:::info
公式ドキュメントの更新をうまく取り込むために、リポジトリには4つの公式リポジトリ内に含まれる全てのファイルが統合され、`docs__all`フォルダに格納されています。  
ローカルサーバーでのテストやデプロイ時には、`pwsh\deploy-target.json`に書かれたファイルのみが処理されるようになっています。  
これらの手続きは、`pwsh\`内のPowerShellスクリプトにて行われています。VRChatはWindowsでのみ動作するので、PowerShell環境は前提としています。
:::

### 手順
1. [このウェブサイトのリポジトリ](https://github.com/Horo5502/creator-docs_ja)をフォークしてクローン
2. コンソールから、`npm install`を実行して必要な依存パッケージをダウンロード
3. `npm start`でローカルサーバーを開始
4. `docs_all`フォルダ内の翻訳したいMarkdownファイルを見つけ、**そのまま**翻訳文で書き換える。(英文のコメントアウト等はせず、消去してください。)
5. **新しくMarkdownファイルを作成した場合は、`pwsh\deploy-target.json`内に、そのファイルのパスを追記する。**(追記すると、ローカルサーバーのページに追加されます。)
6. 翻訳が終わったら、Pull Requestを送信
:::note
翻訳を開始する前に、[翻訳フォーマット](/style-guide)を一読ください。
:::
:::info
Markdownファイルを更新した後に、ローカルサーバーのページに反映されるまで、5~10秒程度の遅延が起こることがあります。  
これは、翻訳済ファイルのみが掲載されるような仕組みが裏で動いているからです。
:::

---
貢献方法は現在まだ模索中であり、変更される可能性があります。このページに順次説明を加えていく予定です。 -->