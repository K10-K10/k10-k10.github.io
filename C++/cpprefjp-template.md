# cpprefjp-page-tmp

## page layout

1. title 　見出し 1
2. タグルール

   > header_name[meta header]  
   > function[meta id-type]  
   > macro[meta id-type]  
   > std[meta namespace]  
   > class_name[meta class]  
   > cpp17[meta cpp]

3. 関数、変数の宣言
4. 非推奨、削除時には、代わりの関数　(省略可)
5. 概要: 編集途中には(執筆中)とかく。(必要項目)
6. 要件: 関数を実行するための事前条件 (省略可)
7. テンプレートパラメーター制約 (省略可)
8. 事前条件: 関数実行時に必要な条件
9. 効果: 内部で発生する効果。戻り値のみの場合 (省略可)
10. 同期操作: 関数の同期操作(省略可)
11. 戻り値: void の場合(なし)と記述
12. 事後条件: 結果が満たすべき事後条件
13. 計算量: (省略可)
14. 例外: `noexcept` の場合(投げない)と記述。気革命期がなければ (省略可)
15. トリビアるに定義される条件:
16. 定数式に評価される条件: `constexpr`に評価される条件。
17. explicit になる条件: `explicit`になる条件。
18. 備考: 補足事項 (省略可)
19. この機能が必要になった背景・経緯: この機能によって解決される問題
20. 非推奨・削除の詳細: 削除される背景
21. 例:コード例 インデントは 2 スペース cpprxa
22. 出力: 実行結果が変化するならば`出力例`、出力なしなら空の出力
23. 実装例:
24. バージョン:
    > 言語(C++11)  
    > 処理系(clang,gcc,icc,Visual C++)  
    > `C++03`で実行可能なら削除する。
25. 備考: 処理系ごとの備考
26. 関連項目: cpprefjp ないのリンク (省略可)
27. 参照: 参考資料、その他のサイトのリンク (省略可)

### その他のページテンプレート

- [`class`](https://github.com/cpprefjp/site/blob/master/start_editing/class_template_page.md)
- [`comparison_operatir`](https://github.com/cpprefjp/site/blob/master/start_editing/comparison_operator_template_page.md)
- [`concept`](https://github.com/cpprefjp/site/blob/master/start_editing/concept_template_page.md)
- [`cpo`](https://github.com/cpprefjp/site/blob/master/start_editing/cpo_template_page.md)
- [`function`](https://github.com/cpprefjp/site/blob/master/start_editing/function_template_page.md)
- [`header`](https://github.com/cpprefjp/site/blob/master/start_editing/header_template_page.md)
- [`lang`](https://github.com/cpprefjp/site/blob/master/start_editing/lang_template_page.md)
- [`module`](https://github.com/cpprefjp/site/blob/master/start_editing/module_template_page.md)
- [`named_requirement`](https://github.com/cpprefjp/site/blob/master/start_editing/named_requirement_template_page.md)
- [`type-type`](https://github.com/cpprefjp/site/blob/master/start_editing/type-type_template_page.md)

## markdown rules

- ブロックコメントの禁止
- 箇条書きのインデントは 4 スペースのみ
- `.noink`で追加予定のリンクの保存
- `<sup><a id="note_ref-1" href="#note-1">[注1]</a></sup>`で`<a id="note-t1-1" href="#note_ref-t1-1">[注1<]/a>`に移動

### タグルール

- ＜メタ情報＞[meta ＜メタ情報タイプ＞]

  - `[meta header]`: 所属ヘッダを表す
  - `[meta category]`: 説明用の機能群
  - `[meta id-type]`:
    > class, class template, function, function template, enum, variable, type-alias, macro, namespace, concept, named requirement
  - `[meta namespace]`: 所属する名前空間
  - `[meta class]`: 所属するクラス
  - `[meta cpp]`: 追加、非推奨、削除されたバージョン

    > cpp11[meta cpp] cpp11 で追加  
    > cpp11deprcated[meta cpp]cpp11 で非推奨  
    > cpp11 removed[meta cpp] cpp11 で削除

  - [mathjax enable]: LaTeX形式での数式記述の許可

## filename-rule

- 機能名をページファイル名とする
- マクロは小文字
- 大文字+区切り文字+拡張子で構成されるファイルは無視される(README.md)など

- 非メンバ関数は、`_free`をつける。

## ディレクトリ構造

> ### lang

- cpp{version}.md 形式
- 各バージョンの言語機能ページ
- `future.md`: 導入予定、検討された機能を記述
- `archive.md`: 廃案になった機能

> ### reference / module

- reference: ヘッダベース
  - ヘッダページ
    - 所属機能
- module: モジュールベース

  - モジュールページ
    - 所属機能

- `<exposition-only>`全体で使用するもの

- クラス
  - メンバ関数
  - 型
  - オーバーロードを意図している関数
  - 演算子オーバーロード(左辺のクラス)

> ### コンセプト階層

- オーバーロード、特殊化

> ## namespace

基本導入しない
例外: `std::this_thread`
