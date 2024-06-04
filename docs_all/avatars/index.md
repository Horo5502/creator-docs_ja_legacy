---
title: "Avatars"
excerpt: "Learn about VRChat's Avatars 3.0 SDK"
sidebar_position: 0
---
# Avatars

VRChatではオリジナルのアバターを作ってアップロードすることができます!

# アバター作成

最初に、[はじめてのアバター作成](/avatars/creating-your-first-avatar)をご覧ください。
サイドバーに「Avatars」カテゴリーがありますので、そちらもご覧ください。 下に、特に重要なページをいくつか紹介します:

- [リグの要件](/avatars/rig-requirements)では、3Dモデルのヒエラルキーのセットアップ方法が解説されています。
- [アバターパフォーマンスランク](/avatars/avatar-performance-ranking-system)では、どのようにしてアバターが'Excellent'ランクになるか、または'Very Poor'ランクになるかが解説されています。
- [アバターの最適化](/avatars/avatar-optimizing-tips) - _理由_を知ったなら、次はそれを実行に移しましょう。
- Avatar3.0 SDKの重要な概念について詳しく知りたい方は、このページを読み進めてください。

## Avatar3.0とは?

**Avatar3.0**はVRChatのアバターで利用可能なすべての機能の名前です。AV3の機能は、VRChatにおけるアバターの表現力、パフォーマンス、能力の向上に重点が置かれています。

Avatar3.0は、つけているアバターを制御および操作するための[アクションメニュー](https://docs.vrchat.com/docs/action-menu)と高度に統合されています。AV3アバターをつくってみる前に、アクションメニューに触れてみるとよいかもしれません。

## 前提条件

- [VRChat Avatars SDKをインストール&セットアップ](/sdk)
- [はじめてのアバター作成](/avatars/creating-your-first-avatar)

## 概念

Avatar3.0を理解し使うためには、いくつかの概念を知る必要があります。これらの概念は、アバターの構造や最適な組み立て方法、様々な機能の用途について理解する助けとなるでしょう。

### Unityシステム

このドキュメントは[Unityアニメーター](https://docs.unity3d.com/2019.4/Documentation/Manual/class-AnimatorController.html)についてある程度の知識があることを前提に書かれています。特に、次の基本的な知識について知っているとよいでしょう。

- アニメーターとアニメーション
- アニメーションレイヤー、レイヤーのweight、ブレンド
- ステートとアニメーション遷移
- アニメーションパラメーター
- State Behavior
- アバターマスク

It can also help to know about things like:

- State exit time
- Loop Time for animations
- (Advanced) Time Sync between layers
- (Advanced) Blend trees

### Basics

With Avatars 3.0, you can create a basic avatar with simulated eye movement and visemes very quickly. 

1. Import your avatar, rig as humanoid. Set up your materials, etc.
2. Add the Avatar Descriptor component.
3. Define the eye bones, if you want simulated eye movement.
4. Define the viseme type, if you want visemes. Assign the jaw-flap bone in the Rigging Configuration Screen, or define your visemes by blendshapes. Same as Avatar 2.0.
5. Set your viewpoint.
6. Build and upload!

If you are making a non-humanoid avatar please read the Generic Avatars section below.

You're done! This will create a basic avatar with default gestures and actions. There's some built-in things you can take advantage of, so even if someone slaps in an avatar with blendshapes/bones named a certain way, you'll get some basic Avatar 3.0 features.

However, even with these basic upgraded systems, there are some new features.

### Local Avatar Testing

Ever wanted to iterate and test an avatar without uploading it? Well, with Avatars 3.0, now you can!

In the "Builder" tab of VRChat SDK control panel, you can now select "Build & Test" at "Offline Testing" section. When you click this, your avatar will be built, and then copied into a folder.

When you launch VRChat, you'll be able to access this avatar locally by looking in the "Other" section of the Avatar menu! Only you will be able to see it, but you can make changes to your avatar, click "Build & Test" again, and after a short build, your avatar will be updated. Simply re-select the avatar in your menu and click "Change" again, and you'll swap into the new testing avatar.

This avatar is _only_ visible to you! To everyone else, you'll look like you're wearing the last avatar you were wearing before swapping into the local test avatar. For our AV3 testers, this made iteration a TON faster. We hope you like it!

To delete the copied local test avatar, go to "Content Manager" tab of the VRChat SDK control panel. You will see your avatar in "Test Avatars" section at the bottom. Click "Delete" and it will disappear from "Other" section of the Avatar menu when you reopen it.

### Simulated Eye Movement

Simulated eye movement is where your eyes will move around, looking at things around you. This isn't _eye tracking_-- as in, we don't have a way for you to input data from eye tracking devices-- but it is a pretty good way of making your avatar look more "alive".

You can preview your setup in the editor and adjust how your avatar's eyes look in a combination of states, which are used to determine how your eye bones are set up.

Blinking can be handled via blendshapes or bones. Blendshapes are the usual method, but we included bones as well to allow for more setups.

Blinking blendshapes are defined by three blendshapes, described below:

- Blink - Both eyes blinking
- LookUp - Blendshape used when looking up-- use this to tweak eye/iris/lid/eyebrow positioning
- LookDown - Blendshape used when looking down, use this similarly to LookUp

You can set LookUp and LookDown to `-none-` if you don't want to use them.

In addition, you'll notice two sliders-- one goes from Calm to Excited, and the other goes from Shy to Confident. Calm / Excited affects how often you blink. Shy / Confident affects how often you look at other players, and how long your gaze remains on other player's faces until you look away.

You'll learn more about this when we talk about state behaviors, but you can set states in your animator to **disable eye animations** when you reach that state. You can set it up such that you don't have to worry about your blendshapes being overdriven because your "happy" mood closes your eyes, and your blinking is still firing off. 

### Blendshape / Bone-based Visemes

If you just want to stick with the standard jaw-flap bone or blendshape-based visemes, we've got you covered. Both are still present and work just fine.

In addition, you can now configure the angle of the jaw-flap bone viseme for some additional customization!

However, in Avatars 3.0, you can also access an Animator Parameter which indicates which viseme should be currently playing! This means if you can animate it, **you can use it in a viseme.** No more trickery for 2D mouths, robots, whatever-- you can just animate whatever you like for your visemes.

The `Viseme` animator parameter is updated in all viseme modes.

### Proxy Animations

You'll probably notice that the SDK includes a bunch of animations named `proxy_animationName`. These animations are "placeholders" for a variety of default VRChat animations. If you use an animation that starts with `proxy_`, VRChat will attempt to replace it with a built-in animation. This can be done in any playable layer.

Although we will not replace an animation with a `proxy_` prefix if the suffix does not match one of our built-in animations, it is probably best practice to avoid naming any of your animations with the prefix `proxy_`.

### Use Auto Footstep

This is an option in the AV3 Avatar Descriptor. It is on by default.

**"Use Auto Footstep"** only applies to 3-point or 4-point tracking. Turning it off means you're disabling the procedural lower body animation for room-scale movement. This procedural animation is what plays when you move around in room-space while in 3 or 4-point tracking.

Leaving Auto Footsteps on (which is the default state) will still allow you to enable/disable tracking via the Tracking Control state behavior.

If Auto Footsteps is off, enabling/disabling tracking on your legs and hips won't do anything, and you're relying on your animations to drive your lower body at all times.

### Force Locomotion Animations

This is an option in the AV3 Avatar Descriptor. It is on by default.

**"Force Locomotion Animations"** is on by default. It only applies to 6-point tracking (Full-Body Tracking). When "Locomotion Animations" is on, locomoting in FBT (as in, moving your joysticks) will play a walking/running animation as determined by your Base playable layer.

When "Locomotion Animations" is off, locomoting in FBT will NOT play the walking/running animation. This is useful if you wish to "mime" your walking with your full-body tracking movement. **If you are turning off "Locomotion Animations", do not use the default Base and Additive layers.** You're expected to make your own!

### Write Defaults on States

[Write Defaults](https://docs.unity3d.com/2019.4/Documentation/Manual/class-State.html) is an option available on states in Animators in Unity. 

Write Defaults "on" will write back the default values of **all animated properties** (_on a Controller-wide basis!_) that are not animated in that particular state. This can cause some very strange interactions if you don't plan for it.

This feature was added by Unity during the migration to version 5.0. This was done so pre-existing assets and project that relied on this write-all-default-properties behavior didn't break. 

Normally, when you're working with other game developers on a project, you agree on a standard. In VRChat, we're _all_ game developers, so we must set the standard here. 

VRChat does not use "Write Defaults" in our built-in and example animators. This means that only the actual properties that are in animations get played by any one animation node. We recommend that creators also follow this workflow, as it is easier to keep track of what properties will be animated through any specific layer, and it also lines up with the intended use of Unity as a whole.

The Write Defaults value defaults to **on** when you create a new node, so creators must be aware they will have to uncheck this value. If you want to use Write Defaults, you will have to keep track of all the possible properties that may be written by a node with this enabled.

**We recommend keeping Write Defaults off and explicitly animating any parameter that needs to be set by the animation.** Note that this may require adding "reset" animations or adding properties to the animation to "initialize" transforms in a specific orientation.

All that being said, if you get into more advanced use cases and setups, it may be advantageous to use Write Defaults On.

### Generic Avatars

Avatar 3.0 also supports non-humanoid generic avatars. If you want access to similar features that AV3 Humanoids have access to, you'll need to follow a few guidelines:

- Import your generic model as an FBX and assign it the 'Generic' rig type, so that an "avatar" object is created
- Make sure this avatar object is referenced in the avatar field of the Animator component at the root of your avatar (the same Game Object as the avatar descriptor).
- Leave the animator controller blank (it will be stripped at runtime) and use the Playable Layers to define your custom animation controllers. Generic avatars have 3 Playable layers: Base, Action, and FX, as the other layers are specific to Humanoids.

If you do not follow these steps, your generic avatar will not have access to many Avatars 3.0 features such as Expression Parameters and State Behaviours. If you are fine with that, you can add an animation controller directly into the root animator, leaving the avatar field blank. This method could be useful if you are just building a hierarchy of static objects in Unity and want a simple animation.
