---
sidebar_position: 1
hidden: false
createdAt: "2023-10-29T17:20:46"
---
# Udon

Udonを使用すると、プレイヤーがあなたのワールドと面白い方法でインタラクトできるようになります!他のクリエイターが書いたスクリプトを使ったり、自分でゲームやプレハブ、その他の体験を作成したりできます。

## Udonとは何か
Udonは、VRChatワールド用のプログラミング言語[^1]です。スクリプトはシーンオブジェクト、[プレイヤー](./players)、[同期されたネットワーク変数](./networking) などとやり取りできます。Udonを使うと、あなたのワールドが生き生きとしてきます！

UdonはVRChatおよびUnityエディタの *両方* で動作します。スクリプトをテストしてデバッグする際に、ワールドをビルドしてアップロードする必要はありません。また、[Udonのデバッグ機能](debugging-udon-projects)も利用できます。

[VRChatワールドを作成したのち](/sdk/)、Udonスクリプトを作成する主な方法は2つあります:
- [Udon Node Graph](./graph)は、ノードとワイヤーを使ってフロー、入力、出力を接続するビジュアルプログラミングインターフェースです。
	- GraphはUnityのアニメーター、Blenderのシェーダー、ジオメトリノード、Unrealのブループリントに似ています。
	- GraphはVRChat SDKに固有で、サードパーティツールを必要としません。
	- プログラミングに非常に不慣れであるか、非常にシンプルなスクリプトだけを作成したい場合は、Graphを使用してください。
- [UdonSharp](./udonsharp)を使うと、C#を使ってスクリプトを作成できます。
	- UdonSharpはUnityの組み込みC#スクリプティングシステムに似ています。
	- ほとんどのUdonSharpユーザーは、[Visual Studio](https://visualstudio.microsoft.com/vs/unity-tools/)や[Rider](https://www.jetbrains.com/rider/)のような[IDE](https://ja.wikipedia.org/wiki/Integrated_development_environment)を使用します。
	- すでにプログラミングに慣れているか、強力なスクリプトを作成したい場合は、UdonSharpを使用してください。

そして、もしあなたが熟練のユーザーなら:

- 自作のコンパイラを書いて、Udon Assemblyコードを生成することができます。
	- VRChat Udonは技術的には、Udon Assemblyからコンパイルされたバイトコードを実行する[仮想マシン](https://ja.wikipedia.org/wiki/Virtual_machine)です。
	- 手動でUdon Assemblyコードを書くことも*可能*ですが、これは非常に稀です。

## バグ報告と機能リクエスト
バグ報告や機能リクエストを提出するには、VRChatの[Cannyフィードバックボード](https://vrchat.canny.io/udon)を使用してください。

[^1]: 技術的な詳細を知りたい方へ：**VRChat Udon**は、**Udon Assembly**からコンパイルされたバイトコードを実行する仮想マシンです。**Udon Assembly**は、組み込みの**VRChat Udon Node Graph** UIを使用して生成することも、自分で**Udon Assembly**を書くことも、さらには独自のコンパイラを書いて**Udon Assembly**やバイトコードプログラムを直接生成することもできます。

