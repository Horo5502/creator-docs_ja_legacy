---
title: "はじめに"
excerpt: "Learn how to create a Unity project for VRChat worlds or avatars"
sidebar_position: -1


---

**[VRChat Creator Companion](https://vcc.docs.vrchat.com/)** は、VRChatのアバターやワールドを作成するための最も簡単で迅速な方法です。

コンテンツを作成し始める前に、ソフトウェア開発キット、つまり **SDK** を準備する必要があります。SDKは、特定のプラットフォームでビルドするために必要なプログラムのツールキットのようなものです。

**VRChat Creator Companion** は、アバターとワールドの両方のSDKをダウンロードしてインストールし、さらに **Unity** もインストールして管理します！UnityはVRChatが開発されているエンジンであり、すべてのコンテンツを作成するために必要なエンジンです。

これが最も簡単な始め方であり、強くお勧めします！これを使わない場合、後でより多くのステップを踏む必要があり、プロジェクトがエラーを起こしやすくなります。

## 最初のプロジェクト
最初のプロジェクトでは、Windows PC向けのコンテンツを作成することを前提とします。

:::note
Quest向けのVRChatコンテンツを作成する手順を探している場合は、[Quest向けコンテンツの制作のためのUnityセットアップ](/platforms/android/setting-up-unity-for-creating-quest-content)をチェックしてください。
:::

1. [ここをクリックしてVRChat Creator Companionをダウンロード](https://vrchat.com/download/vcc)してください。
    - Creator Companionのドキュメントは[こちら](/vcc)で確認できます。

2. インストールウィンドウで続行します。インストール場所はデフォルトで `C:\Users\UserName\AppData\Local\Programs` になりますが、好きなように変更できます。

3. インストール後、VCCは自動的に開くはずです。開かない場合は、Windowsの検索で **Creator Companion** を検索すると見つかるはずです。

4. **Create New Project** をクリックします。

5. アバタープロジェクトかワールドプロジェクトかを決めます。

6. 名前を付けます！

7. 保存場所が正しいことを確認します。

8. **Create Project!** をクリックします。

## プロジェクトを開く

新しいプロジェクトを開くことができます！新しいプロジェクトを作成した後、Creator Companionの次のページに **Open Project** ボタンが表示されます。また、左側のサイドバーの **Projects** タブからもアクセスできます。

もしあなたのプロジェクトがリストに表示されていない場合は、**Create New Project**の隣にあるドロップダウンメニューをクリックし、プロジェクト画面から**Add Existing Project**を選択して追加してください。プロジェクトが開いたら次の手順に従ってください：

1. タイトルバーが`PC, Mac & Linux Standalone <DX11>`で終わっていることを確認します。
    - そうでない場合は、`File > Build Settings...`に移動し、`PC, Mac & Linux Standalone`を選択して、左下の`Switch Platform`をクリックします。

2. `VRChat SDK > Show Control Panel > Authentication`に移動します。

3. VRChatアカウントにサインインします。作成したコンテンツをアップロードするにはこれが必要です。
    - コンテンツをアップロードするには、少なくとも「New User」の[トラストランク](https://docs.vrchat.com/docs/vrchat-safety-and-trust-system)を持つVRChatアカウントが必要です。Steam、Meta、またはViveportアカウントではコンテンツをアップロードできません。

## Unity Hubを使用する場合
これは推奨しませんが、VCCを使用せずに自分でUnityをインストールしたい場合は、[現在サポートされているUnityのバージョン](/sdk/upgrade/current-unity-version)ページを確認し、Unity Hubを使用してVRChatが現在サポートしているバージョンのUnityをインストールしてください。

VCCを使用してプロジェクトを設定しなかった場合は、SDKもインストールする必要があります。[VRChat Creator Companion](https://vcc.docs.vrchat.com/guides/getting-started)を通じて行ってください。

Unity Hubだけを使用してプロジェクトを作成するには：
* Unity Hub（またはエディタのみをインストールした場合はエディタ）を開きます。
* 新しいプロジェクトを作成し、**3Dに設定して保存**します。
* HDRPやURPは使用しないでください。VRChatはそれを使用しません。

Unity Hubだけを使用してプロジェクトを開くには：
* 右上の**Open**をクリックし、プロジェクトが存在するディレクトリを選択します。

## ヒント

* Meta Quest用にVRChatのコンテンツを作成する場合は、Android用にもビルドする必要があります。詳細は[Androidドキュメント](/platforms/android/index.md)を確認してください。
* プロジェクトは大量のストレージスペースがあるドライブに保存してください。Unityプロジェクトは非常に大きくなることがあります。特にバージョン管理ソフトウェアを使用する場合はなおさらです。
* 多数の異なるアバターやワールドを単一のプロジェクトで作成しないでください。これは将来の更新による移行を非常に面倒にするでしょう!
* [Git](https://git-scm.com/)や[Unity Version Control](https://unity.com/solutions/version-control)のようなバージョン管理ソフトウェアの使い方を知っている場合は、それを使ってください! プロジェクトの破壊的な変更を簡単に元に戻すことができます。

### お次は?
プロジェクトの準備ができました! [ワールド作成](/worlds)や[アバター作成](/avatars)に進むことができます。

新しい空のプロジェクトであってもエラーが発生した場合は、[サポートチームにご連絡ください](https://vrch.at/support)。