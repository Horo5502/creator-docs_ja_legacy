---
title: "Udon"
sidebar_position: 1
hidden: false
createdAt: "2023-10-29T17:20:46"
---
## Udonとは何か
<!-- **VRChat Udon** is a programming language built completely in-house by the VRChat Development Team. It is designed to be secure, performant, and easy to use via the **VRChat Udon Node Graph**, a built-in visual programming interface that uses nodes and wires (we call them “noodles”) to connect flow, inputs, and outputs. You can build complex behaviors with Udon-- far more complex and easier to understand than unwieldy chains of Triggers and Actions. -->
**VRChat Udon**とは、VRChat Development Team完全オリジナルのプログラミング言語です。Udonは、安全で、高い性能を持ち、**VRChat Udon Node Graph**を用いて簡単に使用できるように設計されています。Udon Node Graphとは、ビルトインのビジュアルプログラミングインターフェースで、ノードとワイヤー(私たちはこれらを"noodles"と呼んでいます)を用いてフローや入出力を繋げることができます。Udonを使えば、複雑なギミックをつくることができます。扱いづらいTriggerやActionのチェーンよりもはるかに簡単で理解しやすいです。(訳注: SDK2時代のことを言及していると思われる)

<!-- Not only can you replicate the full behavior of Triggers and Actions with VRChat Udon, but you can create your own behaviors, sync variables with others, interact with scenes, interact with players, and more. -->
Udonは、TriggersやActionsと同じことができるだけでなく、独自のギミックを作成したり、他のプレイヤーと同期する変数を作ったり、Sceneを操作したり、プレイヤーを操作したりすることもできます。

<!-- In addition, Udon runs in both the VRChat client *and* the Unity Editor, allowing you to test and debug your creations with ease. -->
さらに、UdonはVRChatクライアントとUnityEditorの*両方*で動作するため、作ったものを簡単にテスト/デバッグすることができます。

<!-- For the more technically inclined: **VRChat Udon** is a VM running bytecode compiled from **Udon Assembly**. You can generate **Udon Assembly** using the built-in **VRChat Udon Node Graph** UI, writing your own **Udon Assembly**, or even by writing your own compiler to generate **Udon Assembly** or bytecode programs directly. -->
もっと技術的なことを知りたい方のために:  
**VRChat Udon**は**Udon Assembly**からコンパイルされたパイトコードを実行するVMです。**Udon Assembly**は、組み込みの**VRChat Udon Node Graph**UIを使用して生成したり、独自の**Udon Assembly**を作成したり、もしくは**Udon Assembly**やバイトコードを直接生成する独自のコンパイラーを作って生成することもできます。

<!-- ## Current Udon Status -->
## 現在のUdonの立ち位置
<!-- **Udon is our current main-line standard system for World Creation!** -->
**Udonは現在、ワールド作成における標準システムです!**

<!-- You can use the [Udon Node Graph](/worlds/udon/graph) to create Udon programs with a graphical interface. This is a lot like Unity animators, Blender shaders or geometry nodes, Unreal blueprints, and many other similar methods. It's a great starting point-- but also, some people just prefer nodes over code! -->
[Udon Node Graph](/worlds/udon/graph)を使用してUdonプログラムをGUI上で作成することができます。Udon Node Graphを用いれば、UnityのアニメーターやBlenderのシェーダーやジオメトリノード、Unrealのブループリントなどと同じようにプログラムを作成することができます。プログラミングの出発点としては最適でしょう! (コーディングよりもノードを繋ぐほうが好きな方もおられますが)

<!-- Of course, if you do prefer code, you can always write Udon using [UdonSharp](https://udonsharp.docs.vrchat.com/)! UdonSharp is a way to write Udon in a way very similar to C#. If you're already familiar with programming, U# might be the easiest way forward for you! -->
もちろん、Udonをコードで書きたい場合は、[UdonSharp](https://udonsharp.docs.vrchat.com/)を用いていつでもUdonを作成することができます! UdonSharpを使えば、C#に非常によく似た方法でUdonを記述することができます。すでにプログラミングに慣れている場合は、U#があなたにとって最もよい選択かもしれません!

<!-- ## How to use Udon -->
## Udonの使い方
<!-- Check out [Getting Started with Udon](/worlds/udon/getting-started-with-udon) ! -->
[はじめてのUdon](/worlds/udon/getting-started-with-udon)をご覧ください!

<!-- If you like Tutorial Videos, you can check out our [Learning Udon](https://www.youtube.com/playlist?list=PLe9XHNvXcouQjg5GULWGLj1tMzeythnQi) Playlist on YouTube, which goes over all the steps to get you up and running. -->
動画形式で学びたい方は、Youtube上のプレイリスト[Learning Udon](https://www.youtube.com/playlist?list=PLe9XHNvXcouQjg5GULWGLj1tMzeythnQi)をご覧ください。ここには、Udon習得のための全てのステップが網羅されています。
<iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2Fvideoseries%3Flist%3DPLe9XHNvXcouQjg5GULWGLj1tMzeythnQi&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPLe9XHNvXcouQjg5GULWGLj1tMzeythnQi&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8gXzBTqlP6I%2Fhqdefault.jpg%3Fsqp%3D-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ%3D%3D%26rs%3DAOn4CLDEoE6be2bvFU9le9GXGstXJO0nfg&key=f2aa6fc3595946d0afc3d76cbbd25dc3&type=text%2Fhtml&schema=youtube" width="853" height="480" scrolling="no" title="YouTube embed" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true"></iframe>

<!-- If you'd rather read the steps directly, then read our [Getting Started with Udon](/worlds/udon/getting-started-with-udon) page. -->
文章形式で学びたい方は、[はじめてのUdon](/worlds/udon/getting-started-with-udon)をご覧ください。

<!-- ## Bug Reports and Feature Requests -->
## バグ報告と機能リクエスト
<!-- We use Canny across all of VRChat to receive reports of bugs and feature requests. For Udon specifically, use these links: -->
Cannyを使ってバグ報告や機能リクエストを行うことができます。UdonのCannyリンクはこちらです。
* [バグ報告](https://feedback.vrchat.com/vrchat-udon-closed-alpha-bugs)
* [機能リクエスト](https://feedback.vrchat.com/vrchat-udon-closed-alpha-feedback)
