---
title: "ClientSim"
sidebar_position: 3
---

# ClientSim

![ClientSim in Unity Editor](/img_clientsim/editor-screenshot.png)

VRChat Client Simulator、略してClientSimは、Unity内で直接VRChat SDK3ワールドをテストできるツールです！すべてのオブジェクトの状態を確認して、直接動作を検証することができます。

## 特徴

- Unity内で全てをデバッグ。
- プレイモードでのUdon変数の確認。
- デスクトッププレイヤー風の操作方法。
- Pickupオブジェクト、インタラクト、UI、ステーションの使用。
- プレイ時にEditorOnlyオブジェクトを削除。

## セットアップ

### 必要条件

- Unity 2019.4.29-31(訳注: この情報は古いです。現在はUnity 2022.3.6f1を用意してください。)
- [VRChat Base](https://github.com/vrchat/packages/tree/main/packages/com.vrchat.base) と [Worlds](https://github.com/vrchat/packages/tree/main/packages/com.vrchat.worlds) SDKのパッケージバージョン(訳注:テンプレートからWorld Projectを選べば自動でインポートされます。)

### インストール方法(訳注: 現在では行う必要がありません。)

> 注意: VRChat Creator Companionのオープンベータリリースが間もなく始まるため、もうすぐずっと簡単になります。(訳注: もう公開されました。)
>
- プロジェクトでUnityパッケージマネージャーを開き、+ボタンをクリックして「Add package from git URL...」を選択します。
    - `https://github.com/vrchat/packages.git?path=/packages/com.vrchat.base#vcc`を入力し、パッケージがインポートされるのを待つか、自動更新がオフの場合はCtrl+Rを押して更新します。
    - +ボタンをもう一度クリックし、このgit URLを追加：`https://github.com/vrchat/packages.git?path=/packages/com.vrchat.worlds#vcc`
    - +ボタンを最後にもう一度押し、このURLを追加：`https://github.com/vrchat-community/ClientSim.git?path=/ClientSim_UnityProject/Packages/com.vrchat.ClientSim#issue-12-make-docs`

### 使い始める

- VRChatのワールドシーンを開く
- UnityでPlayを押す
- ワールドをテストする


## [システム](systems)セクションでシステムの動作についてもっと学びましょう

### CyanEmuと比較してClientSimの新機能
- I、J、K、L、U、O、マウススクロール、ゲームパッドを通じたピックアップ操作。
- 特定のキーではなくキーボードレイアウトに基づいた入力。
- ローカルおよびリモートプレイヤーにはヒューマノイドアバターがあり、アバターボーンがサポートされています（ただし、完全なアバターシステムではありません）。
- プレイヤーデータを直接表示および設定が可能 - 移動量、声とアバターオーディオ設定、combat health。
- Tabを長押ししてマウスを解除 - この方法で画面中心から外れたオブジェクトを選択できます。
- UI要素が操作可能であることを示すポインターが表示されます。
- 新しいランタイムオプション：非マスターとして開始、マウスの反転、ツールチップの表示、プレイヤースケールの変更、ターゲットフレームレートの設定、ローディングのシミュレーションのための遅延スタート。
- 更新されたスタイル、プレイヤー情報、設定ボタンを備えた新しいプレイモードメニュー。
- 設定ウィンドウ内の新しいボタンでプロジェクト設定を更新。もうユーザーの同意なしに行われることはありません。
- Androidに合わせたメッシュのハイライト。
- クライアントに合わせたツールチップの位置。
- より良いゲームパッドサポート。
- 遅延なしでプレイモードに入るためのDisabled Domain Reloadのサポート - 注意：Unityのバグが原因で、UIが"Editor and Runtime"に設定されていない場合、UIイベントが失敗することがあります。
- 自動テスト - プロジェクトに影響を与えないように、これを具体的に有効にする必要があります。ドキュメントは近日公開予定です。

### 既知の問題点

- Unityプロジェクトの設定を手動で変更して新しい入力システムを有効にすると、適切に入力ができないことがあります。ユーザーはClientSim設定ウィンドウのボタンを使用するべきです。
- Physics.RaycastNonAllocは、移動していてrigitbodyを持たないコライダーを、時々返さないことがあります。
- プレイモードを終了する際に、オブジェクトが破壊される順番によっては、時々Exceptionが発生することがあります。
- ハイライトシェーダーはMac（Metal）では機能しません。

## 著作権

著作権 (c) 2021 VRChat
使用に関する完全な情報はLicense.mdを参照してください

## クレジット

[CyanLaser](https://github.com/CyanLaser)による[CyanEmu](https://github.com/CyanLaser/CyanEmu)を基にしています。このバージョンもCyanLaserが作成しました。
