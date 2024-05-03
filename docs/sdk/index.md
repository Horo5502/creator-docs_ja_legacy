---
title: "はじめに"
excerpt: "Learn how to create a Unity project for VRChat worlds or avatars"
sidebar_position: -1
---
## 必要なもの
様々な方法でVRChat SDKをダウンロードすることができます。
- [ここ](https://vrchat.com/download/vcc)をクリックして、[VRChat Creator Companion](/vcc)をダウンロードする。これが最も簡単な方法です。Creator companionは、Unityエディター、ワールドSDK、アバターSDKを自動でインストールしてくれます。
- あるいは、[Githubのテンプレートプロジェクト](/vcc/guides/using-project-template-repos)を使うこともできます。Creator Companionを使っていない場合、[VRChat互換のバージョンのUnity](/sdk/upgrade/current-unity-version)をダウンロードする必要があるでしょう。UnityのダウンロードにはUnity Hubを使用することを強く推奨します。[こちら](/sdk/upgrade/current-unity-version)から入手することができます。


## ステップ0 - Unityのインストール
もし、すでにUnityを起動して実行したことがある場合は、[ステップ1](#section-step-1-creating-a-project)に進んでもらって構いません。

[Creator Companion](/vcc)は、Unityを自動でインストールしてくれます。

Unityを自分でインストールしたい場合は、[VRChat互換のバージョンのUnity](/sdk/upgrade/current-unity-version)を確認して、今現在VRChatがサポートしているバージョンのUnityをインストールしてください。 ―Unity Hubを使うことをおすすめします。


## ステップ1 - プロジェクトの作成 {#section-step-1-creating-a-project}
あなたの最初のプロジェクトでは、Windows PC用のコンテンツを作るものと仮定します。Quest用のコンテンツを作成したい場合は、[Questコンテンツを作成するためのUnityセットアップ](/platforms/android/setting-up-unity-for-creating-quest-content)をご覧ください。

最も簡単なプロジェクトの作り方は、[VRChat Creator Companion](/vcc/guides/getting-started)を使うことです! VCCを使用することを**強く推奨**します。そうしなければ、後に多くの余計なステップが発生し、これはエラーのもととなります。

ちょっとしたヒント:

* プロジェクトは、十分な空き容量を持つ大容量ストレージに保存することをおすすめします―Unityプロジェクトは、特にバージョン管理ソフトを使用している場合、大きなサイズになるかもしれません。
* 多数の異なるアバターやワールドを、一つのプロジェクトにまとめないでください。プロジェクトの移行の際に、とても面倒なことになります。
* [Git](https://git-scm.com/)や[Plastic SCM](https://www.plasticscm.com/)などのバージョン管理ソフトの使い方をご存知の方は、ぜひご活用ください! プロジェクトが壊れた際に、ロールバックするのが非常に簡単になります。
* もしこれらの使い方が分からない場合は、調べてみることをおすすめします! バージョン管理ソフトは良いものです。残念ながら、Gitのチュートリアルはこのドキュメントの解説範囲をはるかに超えていますが...😰

プロジェクトを手動で作成することもできますが、どっちみち[Creator Companion](https://vcc.docs.vrchat.com/)をSDKのインストールのために使う必要があります。([テンプレートリポジトリ](/vcc/guides/using-project-template-repos)を使用してプロジェクトを作成した場合を除く)

UnityHubを使用する場合:
* Unity Hubを開く(こだわりのある方は、エディターからでも構いません)
* プロジェクトを新しく作成し、**"3D"を選択して保存**
* HDRPやURPを使用しないでください。VRChatはそれらに対応していません。

## ステップ2 - プロジェクトを開く
どの手順でプロジェクトを作成したとしても、この段階でプロジェクトを開けるはずです。  
VCC内に作成したプロジェクトが表示されていない場合は、プロジェクト一覧画面で'Add'をクリックしてプロジェクトを選択しましょう(訳注: 右上の'Create New Project'の隣の▽を押して、'Add Existing Project'をクリックしましょう)。  
Unity Hubをお使いの場合は、右上の'Open'(日本語化している場合は、「追加」)をクリックして、プロジェクトのフォルダを選択しましょう。

プロジェクトを開いたら、タイトルバーが`PC, Mac & Linux Standalone <DX11>`で終わっていることを確認してください。もし異なる場合は、`File > Build Settings...`へ行き、`PC, Mac & Linux Standalone`を選択し、左下にある`Switch Platform`をクリックしてください。

Meta QuestやAndroidスマートフォン向けのコンテンツを作成する場合は、Android用のビルドも行う必要があります。詳細は[Androidドキュメント](/platforms/android)をご確認ください。

## [任意]ステップ3 - SDKをインストールする
プロジェクト作成時にVCCを使用しなかった場合は、SDKをインストールする必要があります。[VRChat Creator Companion](vcc/guides/getting-started)からインストールしてください。

何かエラーが発生した場合は、それが新しい空のプロジェクトであったとしても、[サポートチームにご連絡ください](https://vrch.at/support)。

## ステップ4 - ログイン
SDKを使用するには、ログインが必要です。`VRChat SDK > Show Control Panel > Authentication`に移動し、あなたのVRChatアカウントにログインしてください。

コンテンツをアップロードするには、[トラストランク](https://docs.vrchat.com/docs/vrchat-safety-and-trust-system)が"New User"以上である必要があることに注意してください。Steam, Oculus, Viveportアカウントを使用してコンテンツをアップロードすることはできません。

### お次は?
プロジェクトの準備が完了しましたね! [World作成](/worlds)か[Avatar作成](/avatars)に進むことができます。