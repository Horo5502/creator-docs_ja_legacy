---
title: "Player API"
excerpt: "Use Udon to retrieve information about players in your world"
sidebar_position: 1
---
<!-- You can interact with Players in your world through the VRCPlayerApi. Each Player has a VRCPlayerApi Object, and your world fires the OnPlayerJoined / OnPlayerLeft events on any UdonBehaviours that listen for them when a player joins or leaves. -->
VRCPlayerApiを通じてワールド内のプレイヤーを操作することができます。各プレイヤーはVRCPlayerApiオブジェクトを持っており、プレイヤーが参加/退出する際にそれをリッスンするUdonBehaviorsがOnPlayerJoined / OnPlayerLeftイベントを発火させます。

<!-- This page includes info on using some general nodes. Since there are so many things you can do with the VRCPlayerApi object, we've grouped some node info together on the following pages: -->
このページには、いくつかの一般的なノードに関する情報も含まれています。VRCPlayerApiオブジェクトはできることが非常に多いため、いくつかのノードに関する情報を以下のページに分類しました。

<!-- * [Getting Players](/worlds/udon/playerapi/getting-players) -->
* [プレイヤーの取得](/worlds/udon/playerapi/getting-players)
* [プレイヤーの位置](/worlds/udon/playerapi/player-positions)
* [Player Forces](/worlds/udon/playerapi/player-forces)
* [Player Collisions](/worlds/udon/playerapi/player-collisions)
* [Player Audio](/worlds/udon/playerapi/player-audio)
* [Player Avatar Scaling](/worlds/udon/playerapi/player-avatar-scaling)
* [Player Events](/worlds/udon/graph/event-nodes#player-events)

<!-- ## Generally Useful Nodes -->
## 役立つ一般的なノード

### IsValid
*VRCPlayerApi, Boolean*
<!-- Before you try to get or set anything on a Player, check whether IsValid returns true. If a player has left since you saved a reference to them, this will return False. For easier use on the graph, search for the generic "IsValid" method which works for any Object, since it gives you separate flows for True and False. -->
プレイヤーの情報をget/setする前に、IsValidがtrueを返すかを確認しましょう。例えば、あるプレイヤーへの参照を取得後、そのプレイヤーが退出した場合、IsValidはFalseを返します。graph内で使用する際には、どのオブジェクトでも機能する汎用の"IsValid"メソッドを使用すると便利です。このメソッドは、TrueとFalseでフローを分離することができます。
![index-59fc2c8-player-isvalid.png](/img/worlds/index-59fc2c8-player-isvalid.png)

### EnablePickups
*VRCPlayerApi, Boolean*
<!-- Turn off the Player's ability to pickup and use VRCPickup objects in the world. This property is *on* by default, so you only need to use the method if you want to turn it off. -->
プレイヤーの、VRCPickupオブジェクトを持つ/使用する能力をオフにします。このプロパティはデフォルトで*on*になっているため、offにしたい場合にのみこのメソッドを使用する必要があります。

### get displayName
*VRCPlayerApi*
<!-- Get the name displayed for the Player (can be different than Username, which is used to log into VRChat and not exposed publicly) -->
プレイヤーの表示名を取得する(VRChatのログイン時に使用する非公開のUsernameとは異なる場合があります)

### Get isLocal
in: *VRCPlayerApi*  
out: *Boolean*
<!-- Tells you whether the given Player is the local one. -->
与えられたPlayerがローカルであるかを返します

### Get isMaster
in: *VRCPlayerApi*  
out: *Boolean*
<!-- Tells you whether the given Player is the *Master* player. This is the player who either created the instance, or the one who inherited Master status when the last Master left. -->
与えられたPlayerが*Master*であるかを返します。Masterとは、インスタンスを建てたプレイヤーか、そのプレイヤーが退出したために権限が継承されたプレイヤーのことです。

### GetPickupInHand
in: *VRCPlayerApi, Hand (none, left, right)*  
out: *VRCPickup*
<!-- Gets the pickup a Player is holding in the specified hand. Only works for the Local Player. Returns null if no VRCPickup is found. -->
プレイヤーが指定された手に持っているオブジェクトを返します。ローカルプレイヤーに対してのみ機能します。VRCPickupが見つからなかった場合はnullが返されます。

### IsOwner
in: *VRCPlayerApi, GameObject*  
out: *Boolean*
<!-- Tells you whether a Player is the Owner of a given GameObject, important for Sync. -->
プレイヤーが指定されたGameObjectのOwnerであるかを返します。同期の際に重要です。

### IsUserInVR
in: *VRCPlayerApi*  
out: *Boolean*
<!-- Tells you whether a Player is using a VR headset. -->
プレイヤーがVRヘッドセットを使用しているかを返します。

### PlayHapticEventInHand
*VRCPlayerApi, Hand, float, float, float*
<!-- Vibrate the Player's Haptic controllers if they have them. The float inputs should be in the range 0-1. *duration* is the amount of time that they vibrate, *amplitude* is the strength with which they vibrate, and *frequency* is the speed at which they vibrate. The feeling can vary quite a bit between controllers. -->
プレイヤーが振動可能なコントローラーを持っていた場合、振動させます。float入力は0~1の範囲内である必要があります。*duration(持続時間)*は振動する時間、*amplitude(振幅)*は振動の強さ、*frequensy(周波数)*は振動の速さです。コントローラーによって振動時の感覚は異なる可能性があります。

### UseAttachedStation
*VRCPlayerApi*
<!-- Makes the player get into the Station which is on the same GameObject as this UdonBehaviour. -->
プレイヤーを、このUdonBehaiviourが付いたGameobjectのStationに座らせます。

### SimulationTime
*float*
<!-- The [simulation time](/worlds/udon/networking/network-components) of a player. -->
プレイヤーの[シミュレーション時間](/worlds/udon/networking/network-components)

### UseLegacyLocomotion
*VRCPlayerApi*
<!-- **NOT RECOMMENDED** - turns on legacy locomotion for this player. -->
**非推奨** - プレイヤーのレガシーロコモーションをオンにします。

<!-- ## Combat System -->
## 戦闘システム
<!-- The following nodes are Under Review - not working, not recommended for use. We're evaluating their usefulness and they should be ignored for now: -->
以下のノードはテスト中です - 動作しないため、使用は推奨しません。私たちは現在これらの有用性を評価しているため、今は無視してください。
* CombatGetCurrentHitpoints
* CombatGetDestructible
* CombatSetCurrentHitpoints
* CombatSetDamageGraphic
* CombatSetMaxHitpoints
* CombatSetRespawn
* CombatSetup

<!-- ## Language -->
## 言語
:::note

<!-- Switching Languages is not yet ready in the VRChat client, these methods will return example data until the full feature is launched. They will currently throw an exception when testing in ClientSim, as well. -->
VRChatクライアントでは他言語サポートがまだ行われていないため、これらのメソッドはサンプルデータを返します。ClientSimでテストする際にも例外がスローされます。

:::

### GetCurrentLanguage
*string*  
<!-- Gets the selected language of the local user. -->
ローカルユーザーの設定している言語を取得する

### GetAvailableLanguages
*string[]*  
<!-- Gets all available languages a player can select. -->
プレイヤーが選択できる全ての利用可能言語を取得する。
