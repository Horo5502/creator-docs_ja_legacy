# UdonSharp

## C# to UdonAssembly のコンパイラー

UdonSharpはC#をUdonアセンブリーにコンパイルするコンパイラーです。UdonSharpは現在C#言語仕様のどのバージョンにも準拠していないため、未実装のものや動作しないものが多くあります。

## サポートされているC#の機能
- 制御構文
    - `if` `else` `while` `for` `do` `foreach` `switch` `return` `break` `continue` `ternary operator (condition ? true : false)` `??`

- 明示的&暗黙的型変換
- 配列と配列インデクサー
- すべての組み込みの算術計算
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

## 通常のUnity C#との違い
- UdonSharpスクリプトの作成を楽にするために、スクリプト内では`MonoBehaviour`の代わりに`UdonSharpBehaviour`を継承してください
- `GetComponent<UdonBehaviour>()`を呼び出す必要がある場合、現時点では`(UdonBehaviour)GetComponent(typeof(UdonBehaviour))`を代わりに使用してください。これは、UdonBehaviourに汎用のgetコンポーネントがまだ公開されていないからです。他のUnityのコンポーネントに対しては`GetComponent<T>()`で取得できます。
- Udonは現在、配列 `[]` コレクションのみをサポートしており、そのため現時点ではUdonSharpも配列のみをサポートしています。どこかのタイミングで`List<T>`がサポートされると考えていますが、今はまだされていません。
- フィールドの初期化式はコンパイル時に評価されます。シーン内の他のオブジェクトに依存する初期化式は、Startの中に記述してください。
- `UdonSynced`属性をフィールドに付与することで、同期させることができます。
- 数値のキャストは、UdonVMの制限の影響でオーバーフローがチェックされます。
- The internal type of variables returned by `.GetType()` will not always match what you may expect since U# abstracts some types in order to make them work in Udon. For instance, any jagged array type will return a type of `object[]` instead of something like `int[][]` for a 2D int jagged array.

## U#に影響を及ぼすUdonのバグ
- Mutating methods on structs do not modify the struct (this can be seen on things like calling Normalize() on a Vector3) https://vrchat.canny.io/vrchat-udon-closed-alpha-bugs/p/raysetorigin-and-raysetdirection-not-working

## セットアップ

### 必要なもの
- Unity 2019.4.31f1
- (訳注: [VCC](https://vrchat.com/home/download))

(訳注: 下記2つは現在ではVCCが自動で用意するため、必要なし)

- [VRCSDK3 + UdonSDK](https://vrchat.com/home/download)
- 最新の[Udonsharp](https://github.com/vrchat-community/UdonSharp/releases/latest)

### インストール
1. [はじめてのUdon](/worlds/udon/getting-started-with-udon)をご覧ください。ここにはUdonの基本的なインストール方法が書かれています。

(訳注: プロジェクト新規作成時、"World"テンプレートを選択すれば自動でUdonとUdonSharpもプロジェクトにインストールされるようになったため、下記2つは現在では行う必要はありません。)  

2. 上記のページに従ってVRCSDK3の最新版をインストール。
3. 最新のUdonSharpを[こちら](https://github.com/vrchat-community/UdonSharp/releases/latest)から取得し、プロジェクトにインストール。

### Getting started
1. シーン内でオブジェクトを新規作成
2. `Udon Behaviour`コンポーネントをオブジェクトに追加
3. "New Program"ボタンの下のドロップダウンをクリックし、"Udon C# Program Asset"を選択
4. (訳注: プロジェクトを新規作成した場合、先にシーンを保存する必要があります)
5. "New Program"ボタンをクリック。UdonSharpプログラムのアセットが新規作成されます
6. "Create Script"ボタンを押して、スクリプトの保存場所と名前を入力
7. スクリプト内にはテンプレートが自動で記述されているため、すぐにコードを書き始めることができます。スクリプトをダブルクリックしてプログラミングをはじめましょう。  
(訳注: ダブルクリック時に開かれるエディタはPreferencesから変更できます)

#### Projectタブからアセット作成

UdonBehaviourからアセットを作成するのではなく、このようにして作成することもできます:
1. Projectタブ内で右クリック
2. メニュー内でCreate > U# script
3. U# scriptをクリックすると、ファイル作成ダイアログが表示されます
4. スクリプトの名前を入力し、保存
5. .csスクリプトファイルとそれに紐づくUdonSharp program assetが同じフォルダ内に作成されました

### スクリプトの例

#### 回転するキューブ

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

### 他のスクリプト例

その他のスクリプト例に関しては、[スクリプト例](/worlds/udonsharp/Getting-Started/examples)や、U#内のスクリプト例が入ったフォルダ、[コミュニティ資料](/worlds/udonsharp/Getting-Started/community-resources)をご覧ください。

## クレジット

- UdonSharpの改善に貢献した人々については[CONTRIBUTORS.md](https://github.com/vrchat-community/UdonSharp/blob/master/CONTRIBUTORS.md)を参照してください。
- オープンソースプロジェクト[Harmony](https://github.com/pardeike/Harmony)はUdonsharpのエディター体験の向上に貢献しました。


# 
[![Discord](https://img.shields.io/badge/Discord-Merlin%27s%20Discord%20Server-blueviolet?logo=discord)](https://discord.gg/Ub2n8ZA)
