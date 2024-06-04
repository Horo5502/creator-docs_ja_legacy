---
title: "ようこそ!"
slug: "getting-started"
sidebar_position: -1
---
VRChatクリエイターとしての旅はここからはじまります!

あなたが経験豊富な開発者であっても、好奇心旺盛な愛好家であっても、VRChat SDK はあなたの創造性を解き放ち、想像を現実にするためのツールとリソースを提供します。

## クイックスタート

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/0u1g0TYoJsU" title="VRChat Creator Companion" frameborder="0" allow="encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
</div>

1. [Creator Companion](https://vrchat.com/download/vcc) をダウンロード & インストール。
2. もしUnityをお持ちでないなら、Creator CompanionからUnity Hubのダウンロードを行い、Unity 2019.4.31f1をインストールし、[Unityアカウントを作成](https://id.unity.com/account/new)してください。
3. Creator Companionを使ってワールド/アバターの新規プロジェクトを作成し、Unityで開いてください。
4. Unity内でワールド/アバターをつくり、SDKコントロールパネルを用いてVRChat内でテストしてみましょう。
5. 準備ができたら、コントロールパネルからワールド/アバターをVRChatに公開しましょう!

## ワールド作成

VRChatのワールドは、一般的な3Dモデルやマテリアル、ライティングなどをUnityのScene内に配置してつくります。ギミックは、[Udon](/worlds/udon)という、VRChat独自のスクリプトを用いてつくることができます。Udonは、ビジュアルプログラムである[Udon Graph](/worlds/udon)を使用するか、C#ライクに書ける[UdonSharp](/worlds/udonsharp)を用いて書くことができます。プレイヤー間のギミックやオブジェクトの同期には、VRChatの[ネットワーク](/worlds/udon/networking)システムを使います。

## アバター作成

VRChatのアバターを作るには、最初に3Dキャラクターをつくるか、どこかから拾ってくる必要があります。VRChat内でアバターを正常に動作させるためには、アバターに[リグ](/avatars/creating-your-first-avatar#rigging-your-avatar)が入っている必要があります。その後、[モデルをUnityにインポート](/avatars/creating-your-first-avatar#importing-your-avatar)し、[ExpressionsとControls](/avatars/expression-menu-and-controls)や[Avatar Dynamics](/avatars/avatar-dynamics)などを追加して、アップロードします。