---
title: "はじめに"
excerpt: "Learn how to create a Unity project for VRChat worlds or avatars"
sidebar_position: -1
---
<!-- ## Requirements & Downloads -->
## 必要なもの
<!-- There are multiple ways of downloading the VRChat SDK. -->
<!-- - Click [here](https://vrchat.com/download/vcc) to download the [VRChat Creator Companion](https://vcc.docs.vrchat.com/). This is the easiest way of getting started. The Creator companion can automatically install the Unity Editor, the Worlds SDK, and the Avatars SDK for you. -->
<!-- - Alternatively, you can use one of our [template projects on GitHub](https://vcc.docs.vrchat.com/guides/using-project-template-repos). If you're not using the Creator Companion, you'll also need to download the [current Version of Unity](/sdk/current-unity-version). We strongly recommend using Unity Hub for downloading Unity, available [here](/sdk/current-unity-version). -->
様々な方法でVRChat SDKをダウンロードすることができます。
- [ここ](https://vrchat.com/download/vcc)をクリックして、[VRChat Creator Companion](/vcc)をダウンロードする。これが最も簡単な方法です。Creator companionは、Unityエディター、ワールドSDK、アバターSDKを自動でインストールしてくれます。
- あるいは、[Githubのテンプレートプロジェクト](/vcc/guides/using-project-template-repos)を使うこともできます。Creator Companionを使っていない場合、[VRChat互換のバージョンのUnity](/sdk/upgrade/current-unity-version)をダウンロードする必要があるでしょう。UnityのダウンロードにはUnity Hubを使用することを強く推奨します。[こちら](/sdk/upgrade/current-unity-version)から入手することができます。


<!-- ## Step 0 - Installing Unity -->
## ステップ0 - Unityのインストール
<!-- If you already have Unity up and running, you can skip to [Step 1](#section-step-1-creating-a-project). The [Creator Companion](https://vcc.docs.vrchat.com/) automatically installs Unity for you. -->
もし、すでにUnityを起動して実行したことがある場合は、[ステップ1](#section-step-1-creating-a-project)に進んでもらって構いません。

[Creator Companion](/vcc)は、Unityを自動でインストールしてくれます。

<!-- If you'd like to install Unity yourself, check the [Current Supported Unity Version](/sdk/current-unity-version) page, and install the version of Unity that VRChat currently supports-- ideally using Unity Hub. -->
Unityを自分でインストールしたい場合は、[VRChat互換のバージョンのUnity](/sdk/upgrade/current-unity-version)を確認して、今現在VRChatがサポートしているバージョンのUnityをインストールしてください。 ―Unity Hubを使うことをおすすめします。


<!-- ## Step 1 - Creating a project {#section-step-1-creating-a-project} -->
## ステップ1 - プロジェクトの作成 {#section-step-1-creating-a-project}
<!-- For our first project, we'll assume you're building content for Windows PC. If you're looking for the process to build content for VRChat on Quest, check out [Setting up Unity for Creating Quest Content](/platforms/android/setting-up-unity-for-creating-quest-content). -->
あなたの最初のプロジェクトでは、Windows PC用のコンテンツを作るものと仮定します。Quest用のコンテンツを作成したい場合は、[Questコンテンツを作成するためのUnityセットアップ](/platforms/android/setting-up-unity-for-creating-quest-content)をご覧ください。

<!-- The easiest way to create a pre-set project is to use the [VRChat Creator Companion!](https://vcc.docs.vrchat.com/guides/getting-started) We **strongly recommend** using the VRChat Creator Companion for this. If you don't, you'll have to do a bunch of extra steps later that could be prone to error. -->
最も簡単なプロジェクトの作り方は、[VRChat Creator Companion](/vcc/guides/getting-started)を使うことです! VCCを使用することを**強く推奨**します。そうしなければ、後に多くの余計なステップが発生し、これはエラーのもととなります。

<!-- Some quick tips: -->
ちょっとしたヒント:

<!-- * Save your projects in a mass-storage drive with a lot of space-- Unity projects can get quite large, especially if you use versioning software -->
<!-- * Do not use a single project for tons of different avatars or worlds. This is a quick way to make future migrations a huge pain in the butt! -->
<!-- * If you know how to use version control software like [Git](https://git-scm.com/) or [Plastic SCM](https://www.plasticscm.com/), use it! It makes it very easy to roll back changes that break your project. -->
<!-- * If you don't know how to use those, you should learn how! They're great. Sadly, a Git tutorial is way beyond the scope of our documentation 😰 -->
* プロジェクトは、十分な空き容量を持つ大容量ストレージに保存することをおすすめします―Unityプロジェクトは、特にバージョン管理ソフトを使用している場合、大きなサイズになるかもしれません。
* 多数の異なるアバターやワールドを、一つのプロジェクトにまとめないでください。プロジェクトの移行の際に、とても面倒なことになります。
* [Git](https://git-scm.com/)や[Plastic SCM](https://www.plasticscm.com/)などのバージョン管理ソフトの使い方をご存知の方は、ぜひご活用ください! プロジェクトが壊れた際に、ロールバックするのが非常に簡単になります。
* もしこれらの使い方が分からない場合は、調べてみることをおすすめします! バージョン管理ソフトは良いものです。残念ながら、Gitのチュートリアルはこのドキュメントの解説範囲をはるかに超えていますが...😰

<!-- You can create a project manually if you'd like, but you'll need to use the [Creator Companion](https://vcc.docs.vrchat.com/) anyway later on to install the SDK (unless you started with one of our [template repos](https://vcc.docs.vrchat.com/guides/using-project-template-repos)). -->
プロジェクトを手動で作成することもできますが、どっちみち[Creator Companion](https://vcc.docs.vrchat.com/)をSDKのインストールのために使う必要があります。([テンプレートリポジトリ](/vcc/guides/using-project-template-repos)を使用してプロジェクトを作成した場合を除く)

<!-- If you're using Unity Hub: -->
<!-- * Open Unity Hub (or just the editor if you chose to go that route). -->
<!-- * Create a new project, **set it to 3D, and save it**. -->
<!-- * Don't use HDRP or URP. We don't use it. -->
UnityHubを使用する場合:
* Unity Hubを開く(こだわりのある方は、エディターからでも構いません)
* プロジェクトを新しく作成し、**"3D"を選択して保存**
* HDRPやURPを使用しないでください。VRChatはそれらに対応していません。

<!-- ## Step 2 - Open Your Project -->
## ステップ2 - プロジェクトを開く
<!-- However you create it, you can now open your project. If your project isn't listed, click 'Add' in the project screen and select it. If you're using Unity Hub, click 'Open' in the top right, then select the directory where your project lives. -->
どの手順でプロジェクトを作成したとしても、この段階でプロジェクトを開けるはずです。  
VCC内に作成したプロジェクトが表示されていない場合は、プロジェクト一覧画面で'Add'をクリックしてプロジェクトを選択しましょう(訳注: 右上の'Create New Project'の隣の▽を押して、'Add Existing Project'をクリックしましょう)。  
Unity Hubをお使いの場合は、右上の'Open'(日本語化している場合は、「追加」)をクリックして、プロジェクトのフォルダを選択しましょう。

<!-- After the project is open, check the title bar to ensure it ends with `PC, Mac & Linux Standalone <DX11>`. If it does not, then go to `File > Build Settings...`, select `PC, Mac & Linux Standalone`, then click `Switch Platform` in the bottom left. -->
プロジェクトを開いたら、タイトルバーが`PC, Mac & Linux Standalone <DX11>`で終わっていることを確認してください。もし異なる場合は、`File > Build Settings...`へ行き、`PC, Mac & Linux Standalone`を選択し、左下にある`Switch Platform`をクリックしてください。

<!-- If you're building content for VRChat for Meta Quest or Android phones, you should also be building for Android. Check our [Android documentation](/platforms/android) for more details. -->
Meta QuestやAndroidスマートフォン向けのコンテンツを作成する場合は、Android用のビルドも行う必要があります。詳細は[Androidドキュメント](/platforms/android)をご確認ください。

<!-- ## OPTIONAL Step 3 - Installing the SDK -->
## [任意]ステップ3 - SDKをインストールする
<!-- If you didn't use the VCC to set up your project, you'll need to install the SDK. Do so via the [VRChat Creator Companion](https://vcc.docs.vrchat.com/guides/getting-started). -->
プロジェクト作成時にVCCを使用しなかった場合は、SDKをインストールする必要があります。[VRChat Creator Companion](vcc/guides/getting-started)からインストールしてください。

<!-- If there are any errors, even with a brand new empty project, [please contact our Support team](https://vrch.at/support). -->
何かエラーが発生した場合は、それが新しい空のプロジェクトであったとしても、[サポートチームにご連絡ください](https://vrch.at/support)。

<!-- ## Step 4 - Logging in -->
## ステップ4 - ログイン
<!-- To use the SDK, you will need to log in. To do so, navigate to `VRChat SDK > Show Control Panel > Authentication`. You can sign into your VRChat account there. -->
SDKを使用するには、ログインが必要です。`VRChat SDK > Show Control Panel > Authentication`に移動し、あなたのVRChatアカウントにログインしてください。

<!-- Keep in mind that you must have a VRChat account of at least "New User" [Trust Rank](https://docs.vrchat.com/docs/vrchat-safety-and-trust-system) to upload content. You cannot use a Steam, Oculus, or Viveport account to upload content. -->
コンテンツをアップロードするには、[トラストランク](https://docs.vrchat.com/docs/vrchat-safety-and-trust-system)が"New User"以上である必要があることに注意してください。Steam, Oculus, Viveportアカウントを使用してコンテンツをアップロードすることはできません。

<!-- ### What's Next? -->
### お次は?
<!-- Your project is ready! You can move on to [World Creation](/worlds) or [Avatar Creation](/avatars). -->
プロジェクトの準備が完了しましたね! [World作成](/worlds)か[Avatar作成](/avatars)に進むことができます。