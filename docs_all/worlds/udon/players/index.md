---
title: "Player API"
excerpt: "Use Udon to retrieve information about players in your world"
sidebar_position: 1
---
VRCPlayerApiを通じてワールド内のプレイヤーを操作することができます。各プレイヤーはVRCPlayerApiオブジェクトを持っており、プレイヤーが参加/退出する際にそれをリッスンするUdonBehaviorsがOnPlayerJoined / OnPlayerLeftイベントを発火させます。

このページには、いくつかの一般的なノードに関する情報も含まれています。VRCPlayerApiオブジェクトはできることが非常に多いため、いくつかのノードに関する情報を以下のページに分類しました。

* [プレイヤーの取得](/worlds/udon/playerapi/getting-players)
* [プレイヤーの位置](/worlds/udon/playerapi/player-positions)
* [Player Forces](/worlds/udon/playerapi/player-forces)
* [Player Collisions](/worlds/udon/playerapi/player-collisions)
* [Player Audio](/worlds/udon/playerapi/player-audio)
* [Player Avatar Scaling](/worlds/udon/playerapi/player-avatar-scaling)
* [Player Events](/worlds/udon/graph/event-nodes#player-events)

## 役立つ一般的なノード

### IsValid
*VRCPlayerApi, Boolean*
プレイヤーの情報をget/setする前に、IsValidがtrueを返すかを確認しましょう。例えば、あるプレイヤーへの参照を取得後、そのプレイヤーが退出した場合、IsValidはFalseを返します。graph内で使用する際には、どのオブジェクトでも機能する汎用の"IsValid"メソッドを使用すると便利です。このメソッドは、TrueとFalseでフローを分離することができます。
![index-59fc2c8-player-isvalid.png](/img/worlds/index-59fc2c8-player-isvalid.png)

### EnablePickups
*VRCPlayerApi, Boolean*
プレイヤーの、VRCPickupオブジェクトを持つ/使用する能力をオフにします。このプロパティはデフォルトで*on*になっているため、offにしたい場合にのみこのメソッドを使用する必要があります。

### get displayName
*VRCPlayerApi*
プレイヤーの表示名を取得する(VRChatのログイン時に使用する非公開のUsernameとは異なる場合があります)

### Get isLocal
in: *VRCPlayerApi*  
out: *Boolean*
与えられたPlayerがローカルであるかを返します

### Get isMaster
in: *VRCPlayerApi*  
out: *Boolean*
与えられたPlayerが*Master*であるかを返します。Masterとは、インスタンスを建てたプレイヤーか、そのプレイヤーが退出したために権限が継承されたプレイヤーのことです。

### GetPickupInHand
in: *VRCPlayerApi, Hand (none, left, right)*  
out: *VRCPickup*
プレイヤーが指定された手に持っているオブジェクトを返します。ローカルプレイヤーに対してのみ機能します。VRCPickupが見つからなかった場合はnullが返されます。

### IsOwner
in: *VRCPlayerApi, GameObject*  
out: *Boolean*
プレイヤーが指定されたGameObjectのOwnerであるかを返します。同期の際に重要です。

### IsUserInVR
in: *VRCPlayerApi*  
out: *Boolean*
プレイヤーがVRヘッドセットを使用しているかを返します。

### PlayHapticEventInHand
*VRCPlayerApi, Hand, float, float, float*
プレイヤーが振動可能なコントローラーを持っていた場合、振動させます。float入力は0~1の範囲内である必要があります。*duration(持続時間)*は振動する時間、*amplitude(振幅)*は振動の強さ、*frequensy(周波数)*は振動の速さです。コントローラーによって振動時の感覚は異なる可能性があります。

### UseAttachedStation
*VRCPlayerApi*
プレイヤーを、このUdonBehaiviourが付いたGameobjectのStationに座らせます。

### SimulationTime
*float*
プレイヤーの[シミュレーション時間](/worlds/udon/networking/network-components)

### UseLegacyLocomotion
*VRCPlayerApi*
**非推奨** - プレイヤーのレガシーロコモーションをオンにします。

## 戦闘システム
以下のノードはテスト中です - 動作しないため、使用は推奨しません。私たちは現在これらの有用性を評価しているため、今は無視してください。
* CombatGetCurrentHitpoints
* CombatGetDestructible
* CombatSetCurrentHitpoints
* CombatSetDamageGraphic
* CombatSetMaxHitpoints
* CombatSetRespawn
* CombatSetup

## 言語
:::note

VRChatクライアントでは他言語サポートがまだ行われていないため、これらのメソッドはサンプルデータを返します。ClientSimでテストする際にも例外がスローされます。

:::

### GetCurrentLanguage
*string*  
ローカルユーザーの設定している言語を取得する

### GetAvailableLanguages
*string[]*  
プレイヤーが選択できる全ての利用可能言語を取得する。
