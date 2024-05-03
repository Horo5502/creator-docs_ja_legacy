---
title: "Udon"
sidebar_position: 1
hidden: false
createdAt: "2023-10-29T17:20:46"
---
## Udonとは何か
**VRChat Udon**とは、VRChat Development Team完全オリジナルのプログラミング言語です。Udonは、安全で、高い性能を持ち、**VRChat Udon Node Graph**を用いて簡単に使用できるように設計されています。Udon Node Graphとは、ビルトインのビジュアルプログラミングインターフェースで、ノードとワイヤー(私たちはこれらを"noodles"と呼んでいます)を用いてフローや入出力を繋げることができます。Udonを使えば、複雑なギミックをつくることができます。扱いづらいTriggerやActionのチェーンよりもはるかに簡単で理解しやすいです。(訳注: SDK2時代のことを言及していると思われる)

Udonは、TriggersやActionsと同じことができるだけでなく、独自のギミックを作成したり、他のプレイヤーと同期する変数を作ったり、Sceneを操作したり、プレイヤーを操作したりすることもできます。

さらに、UdonはVRChatクライアントとUnityEditorの*両方*で動作するため、作ったものを簡単にテスト/デバッグすることができます。

もっと技術的なことを知りたい方のために:  
**VRChat Udon**は**Udon Assembly**からコンパイルされたバイトコードを実行するVMです。**Udon Assembly**は、組み込みの**VRChat Udon Node Graph**UIを使用して生成したり、独自の**Udon Assembly**を作成したり、もしくは**Udon Assembly**やバイトコードを直接生成する独自のコンパイラーを作って生成することもできます。

## 現在のUdonの立ち位置
**Udonは現在、ワールド作成における標準システムです!**

[Udon Node Graph](/worlds/udon/graph)を使用してUdonプログラムをGUI上で作成することができます。Udon Node Graphを用いれば、UnityのアニメーターやBlenderのシェーダーやジオメトリノード、Unrealのブループリントなどと同じようにプログラムを作成することができます。プログラミングの出発点としては最適でしょう! (コーディングよりもノードを繋ぐほうが好きな方もおられますが)

もちろん、Udonをコードで書きたい場合は、[UdonSharp](/worlds/udonsharp)を用いていつでもUdonを作成することができます! UdonSharpを使えば、C#に非常によく似た方法でUdonを記述することができます。すでにプログラミングに慣れている場合は、U#があなたにとって最もよい選択かもしれません!

## Udonの使い方
[はじめてのUdon](getting-started-with-udon)をご覧ください!

動画形式で学びたい方は、Youtube上のプレイリスト[Learning Udon](https://www.youtube.com/playlist?list=PLe9XHNvXcouQjg5GULWGLj1tMzeythnQi)をご覧ください。ここには、Udon習得のための全てのステップが網羅されています。
<div class="video-container">
    <iframe src="https://www.youtube-nocookie.com/embed/8gXzBTqlP6I?si=szRiEh57ZmN51oDK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" width="853" height="480" allowfullscreen></iframe>
</div>

文章形式で学びたい方は、[はじめてのUdon](/worlds/udon/getting-started-with-udon)をご覧ください。

## バグ報告と機能リクエスト
Cannyを使ってバグ報告や機能リクエストを行うことができます。Udonに関するCannyへのリンクはこちらです。
* [バグ報告](https://feedback.vrchat.com/vrchat-udon-closed-alpha-bugs)
* [機能リクエスト](https://feedback.vrchat.com/vrchat-udon-closed-alpha-feedback)
