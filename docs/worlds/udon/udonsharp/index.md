# UdonSharp

<!-- ## A compiler for compiling C# to Udon assembly -->
## C# to UdonAssembly のコンパイラー

<!-- UdonSharp is a compiler that compiles C# to Udon assembly. UdonSharp is not currently conformant to any version of the C# language specification, so there are many things that are not implemented or will not work. -->
UdonSharpはC#をUdonアセンブリーにコンパイルするコンパイラーです。UdonSharpは現在C#言語仕様のどのバージョンにも準拠していないため、未実装のものや動作しないものが多くあります。

<!-- ## C# features supported -->
## サポートされているC#の機能
<!-- - Flow control -->
- 制御構文
    - `if` `else` `while` `for` `do` `foreach` `switch` `return` `break` `continue` `ternary operator (condition ? true : false)` `??`

<!-- - Implicit and explicit type conversions -->
- 明示的&暗黙的型変換
<!-- - Arrays and array indexers -->
- 配列と配列インデクサー
<!-- - All builtin arithmetic operators -->
- すべての組み込みの算術計算
<!-- - Conditional short circuiting `(true || CheckIfTrue())` will not execute CheckIfTrue() -->
- 条件式の短絡評価
    - 例: `(true || CheckIfTrue())`とするとCheckIfTrue()は実行されません
- `typeof()`
- Extern methods with out or ref parameters (such as many variants of `Physics.Raycast()`)
- User defined methods with parameters and return values, supports out/ref, extension methods, and `params`
- User defined properties
- Static user methods
- UdonSharpBehaviour inheritence, virtual methods, etc.
- Unity/Udon event callbacks with arguments. For instance, registering a OnPlayerJoined event with a VRCPlayerApi argument is valid.
- String interpolation
- Field initializers
- Jagged arrays
- Referencing other custom UdonSharpBehaviour classes, accessing fields, and calling methods on them
- Recursive method calls are supported via the `[RecursiveMethod]` attribute

<!-- ## Differences from regular Unity C# to note -->
## 通常のUnity C#との違い
<!-- - For the best experience making UdonSharp scripts, make your scripts inherit from `UdonSharpBehaviour` instead of `MonoBehaviour` -->
- UdonSharpスクリプトの作成を楽にするために、スクリプト内では`MonoBehaviour`の代わりに`UdonSharpBehaviour`を継承してください
<!-- - If you need to call `GetComponent<UdonBehaviour>()` you will need to use `(UdonBehaviour)GetComponent(typeof(UdonBehaviour))` at the moment since the generic get component is not exposed for UdonBehaviour yet. `GetComponent<T>()` works for other Unity component types though. -->
- `GetComponent<UdonBehaviour>()`を呼び出す必要がある場合、現時点では`(UdonBehaviour)GetComponent(typeof(UdonBehaviour))`を代わりに使用してください。これは、UdonBehaviourに汎用のgetコンポーネントがまだ公開されていないからです。他のUnityのコンポーネントに対しては`GetComponent<T>()`で取得できます。
<!-- - Udon currently only supports array `[]` collections and by extension UdonSharp only supports arrays at the moment. It looks like they might support `List<T>` at some point, but it is not there yet. -->
- Udonは現在、配列 `[]` コレクションのみをサポートしており、そのため現時点ではUdonSharpも配列のみをサポートしています。どこかのタイミングで`List<T>`がサポートされると考えていますが、今はまだされていません。
<!-- - Field initilizers are evaluated at compile time, if you have any init logic that depends on other objects in the scene you should use Start for this. -->
- フィールドの初期化式はコンパイル時に評価されます。シーン内の他のオブジェクトに依存する初期化式は、Startの中に記述してください。
<!-- - Use the `UdonSynced` attribute on fields that you want to sync. -->
- `UdonSynced`属性をフィールドに付与することで、同期させることができます。
<!-- - Numeric casts are checked for overflow due to UdonVM limitations -->
- 数値のキャストは、UdonVMの制限の影響でオーバーフローがチェックされます。
- The internal type of variables returned by `.GetType()` will not always match what you may expect since U# abstracts some types in order to make them work in Udon. For instance, any jagged array type will return a type of `object[]` instead of something like `int[][]` for a 2D int jagged array.

<!-- ## Udon bugs that affect U# -->
## U#に影響を及ぼすUdonのバグ
- Mutating methods on structs do not modify the struct (this can be seen on things like calling Normalize() on a Vector3) https://vrchat.canny.io/vrchat-udon-closed-alpha-bugs/p/raysetorigin-and-raysetdirection-not-working

<!-- ## Setup -->
## セットアップ

<!-- ### Requirements -->
### 必要なもの
- Unity 2019.4.31f1
- (訳注: [VCC](https://vrchat.com/home/download))

(訳注: 下記2つは現在ではVCCが自動で用意するため、必要なし)

- [VRCSDK3 + UdonSDK](https://vrchat.com/home/download)
<!-- - The latest [release](https://github.com/vrchat-community/UdonSharp/releases/latest) of UdonSharp -->
- 最新の[Udonsharp](https://github.com/vrchat-community/UdonSharp/releases/latest)

<!-- ### Installation -->
### インストール
<!-- 1. Read the getting started with Udon doc page https://docs.vrchat.com/docs/getting-started-with-udon this has basic installation instructions for Udon. -->
1. [はじめてのUdon](/worlds/udon/getting-started-with-udon)をご覧ください。ここにはUdonの基本的なインストール方法が書かれています。

(訳注: プロジェクト新規作成時、"World"テンプレートを選択すれば自動でUdonとUdonSharpもプロジェクトにインストールされるようになったため、下記2つは現在では行う必要はありません。)  

<!-- 2. Install the latest version of the VRCSDK3 linked on the getting started. -->
2. 上記のページに従ってVRCSDK3の最新版をインストール。
<!-- 3. Get the latest release of UdonSharp from [here](https://github.com/vrchat-community/UdonSharp/releases/latest) and install it to your project. -->
3. 最新のUdonSharpを[こちら](https://github.com/vrchat-community/UdonSharp/releases/latest)から取得し、プロジェクトにインストール。

### Getting started
<!-- 1. Make a new object in your scene -->
1. シーン内でオブジェクトを新規作成
<!-- 2. Add an `Udon Behaviour` component to your object -->
2. `Udon Behaviour`コンポーネントをオブジェクトに追加
<!-- 3. Below the "New Program" button click the dropdown and select "Udon C# Program Asset" -->
3. "New Program"ボタンの下のドロップダウンをクリックし、"Udon C# Program Asset"を選択
4. (訳注: プロジェクトを新規作成した場合、先にシーンを保存する必要があります)
<!-- 4. Now click the New Program button, this will create a new UdonSharp program asset for you -->
5. "New Program"ボタンをクリック。UdonSharpプログラムのアセットが新規作成されます
<!-- 5. Click the Create Script button and choose a save destination and name for the script. -->
6. "Create Script"ボタンを押して、スクリプトの保存場所と名前を入力
<!-- 7. This will create a template script that's ready for you to start working on, open the script in your editor of choice and start programming -->
7. スクリプト内にはテンプレートが自動で記述されているため、すぐにコードを書き始めることができます。スクリプトをダブルクリックしてプログラミングをはじめましょう。  
(訳注: ダブルクリック時に開かれるエディタはPreferencesから変更できます)

<!-- #### Asset explorer asset creation -->
#### Projectタブからアセット作成

<!-- Instead of creating assets from an UdonBehaviour you can also do the following: -->
UdonBehaviourからアセットを作成するのではなく、このようにして作成することもできます:
<!-- 1. Right-click in your project asset explorer -->
1. Projectタブ内で右クリック
<!-- 2. Navigate to Create > U# script -->
2. メニュー内でCreate > U# script
<!-- 3. Click U# script, this will open a create file dialog -->
3. U# scriptをクリックすると、ファイル作成ダイアログが表示されます
<!-- 4. Choose a name for your script and click Save -->
4. スクリプトの名前を入力し、保存
<!-- 5. This will create a .cs script file and an UdonSharp program asset that's set up for the script in the same directory -->
5. .csスクリプトファイルとそれに紐づくUdonSharp program assetが同じフォルダ内に作成されました

<!-- ### Example scripts -->
### スクリプトの例

<!-- #### The rotating cube demo -->
#### 回転するキューブ

<!-- This rotates the object that it's attached to by 90 degrees every second -->
アタッチされたオブジェクトを毎秒90度回転させるスクリプト

```cs
using UnityEngine;
using UdonSharp;

public class RotatingCubeBehaviour : UdonSharpBehaviour
{
    private void Update()
    {
        transform.Rotate(Vector3.up, 90f * Time.deltaTime);
    }
}
```

<!-- #### Other examples -->
### 他のスクリプト例

<!-- For more example scripts take a look at the wiki page for [examples](https://github.com/Merlin-san/UdonSharp/wiki/examples), the Examples folder included with U#, or the [community resources](https://github.com/Merlin-san/UdonSharp/wiki/community-resources) page on the wiki. -->
その他のスクリプト例に関しては、[スクリプト例](/worlds/udon/udonsharp/examples)や、U#内のスクリプト例が入ったフォルダ、[コミュニティ資料](/worlds/udon/udonsharp/community-resources)をご覧ください。

<!-- ## Credits -->
## クレジット

<!-- - See [CONTRIBUTORS.md](https://github.com/vrchat-community/UdonSharp/blob/master/CONTRIBUTORS.md) for people who have helped provide improvments to UdonSharp -->
- UdonSharpの改善に貢献した人々については[CONTRIBUTORS.md](https://github.com/vrchat-community/UdonSharp/blob/master/CONTRIBUTORS.md)を参照してください。
<!-- - The open source project [Harmony](https://github.com/pardeike/Harmony) helps Udonsharp provide a better editor experience -->
- オープンソースプロジェクト[Harmony](https://github.com/pardeike/Harmony)はUdonsharpのエディター体験の向上に貢献しました。


# 
[![Discord](https://img.shields.io/badge/Discord-Merlin%27s%20Discord%20Server-blueviolet?logo=discord)](https://discord.gg/Ub2n8ZA)
