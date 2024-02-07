---
title: "ランタイム例外のデバッグ"
---
<!-- # Runtime Exception Debugging -->
<!-- # ランタイム例外のデバッグ -->

<!-- You will often find yourself with programs that can only be debugged in-game. In order to catch these errors and make them easier to understand, U# includes a runtime exception watcher that will look for exceptions from VRChat's output log. The watcher will then output the script and line that threw that exception to your editor's log. -->
自分が書いたプログラムが、ゲーム内でしかデバッグできないことに気づくことがあるでしょう。そのようなプログラムの例外を捉え、理解しやすくするために、U#にはVRChatの出力ログから例外を探すランタイム例外ウォッチャーが含まれています。ウォッチャーは、例外を起こしたスクリプトと行をエディターのログに出力します。

<!-- ### Setup instructions -->
### セットアップ手順
<!-- #### Editor setup -->
#### エディターのセットアップ
<!-- 1. In your editor open the project settings menu  -->
1. エディターにて、Project settingsメニューを開く

![Project Settings](/img_usharp/red-1.png)

<!-- 2. Enable `Listen for client exceptions` in the Udon Sharp settings  -->
2. "Udon Sharp"内の`Listen for client exceptions`(クライアントの例外をリッスンする)をオンにする

![Listen for Client Exceptions](/img_usharp/red-2.png)

<!-- #### VRChat client setup -->
#### VRChatクライアントのセットアップ
<!-- 1. Right-click on VRChat in your Steam library and click `Properties...` -->
1. Steamライブラリ内のVRChatを右クリックして、`Properties...`(`プロパティ...`)をクリック

![Steam VRChat Properties](/img_usharp/red-3.png)

<!-- 2. Click `Set Launch Options...` -->
2. `Set Launch Options`をクリック  
(訳注: 現在ではSteamのUIが変わっているため、`上級ユーザーは起動オプションに修正を入力できます`の欄に以下の引数を直接入力してください。)

![Set Launch Options](/img_usharp/red-4.png)

<!-- 3. Add the launch argument `--enable-udon-debug-logging` to the launch options and click OK -->
3. 起動オプションに`--enable-udon-debug-logging`を追加して、OKをクリック

![Steam Launch Args](/img_usharp/red-5.png)


***

<!-- Now once you have the client and editor setup, you just need to start your game and load into the world. Any errors that are thrown in your world will be output to your editor's console. This is an example of what the error will look like, you probably won't be getting the same error and it won't be in the same code file. -->
一度クライアントとエディターをセットアップしたら、あとはゲームを起動してワールドに入るだけです。ワールド内で発生したエラーは全て、エディターのコンソールに出力されるはずです。  
これは、エラーがどのようなものかを示す一例です。エラーの種類や例外を起こしたスクリプトはこの画像とは異なるかもしれません。

![Error in Console](/img_usharp/red-6.png)