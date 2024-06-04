# ランタイム例外のデバッグ

自分が書いたプログラムが、ゲーム内でしかデバッグできないことに気づくことがあるでしょう。そのようなプログラムの例外を捉え、理解しやすくするために、U#にはVRChatの出力ログから例外を探すランタイム例外ウォッチャーが含まれています。ウォッチャーは、例外を起こしたスクリプトと行をエディターのログに出力します。

### セットアップ手順
#### エディターのセットアップ
1. エディターにて、Project settingsメニューを開く

![Project Settings](/img_usharp/red-1.png)

2. "Udon Sharp"内の`Listen for client exceptions`(クライアントの例外をリッスンする)をオンにする

![Listen for Client Exceptions](/img_usharp/red-2.png)

#### VRChatクライアントのセットアップ
1. Steamライブラリ内のVRChatを右クリックして、`Properties...`(`プロパティ...`)をクリック

![Steam VRChat Properties](/img_usharp/red-3.png)

2. `Set Launch Options`をクリック  
(訳注: 現在ではSteamのUIが変わっているため、`上級ユーザーは起動オプションに修正を入力できます`の欄に以下の引数を直接入力してください。)

![Set Launch Options](/img_usharp/red-4.png)

3. 起動オプションに`--enable-udon-debug-logging`を追加して、OKをクリック

![Steam Launch Args](/img_usharp/red-5.png)


***

一度クライアントとエディターをセットアップしたら、あとはゲームを起動してワールドに入るだけです。ワールド内で発生したエラーは全て、エディターのコンソールに出力されるはずです。  
これは、エラーがどのようなものかを示す一例です。エラーの種類や例外を起こしたスクリプトはこの画像とは異なるかもしれません。

![Error in Console](/img_usharp/red-6.png)