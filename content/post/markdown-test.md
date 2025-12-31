---
title: "Markdown要素のテスト"
date: 2025-12-28T09:00:00+09:00
lastmod: 2025-12-30T14:00:00+09:00
type: post
---

この記事はMarkdownの各種要素をテストするための記事です。

## 見出しのテスト

### 見出しレベル3

#### 見出しレベル4

## テキストスタイル

**太字テキスト**
*斜体テキスト*
***太字と斜体***
~~取り消し線~~
`インラインコード`

## リスト

### 箇条書きリスト

- 項目1
- 項目2
  - ネストされた項目1
  - ネストされた項目2
- 項目3

### 番号付きリスト

1. 最初の項目
2. 二番目の項目
3. 三番目の項目

### 定義リスト

- 用語1
  - 説明1
- 用語2
  - 説明2

## コードブロック

```bash
# Hugoサーバーの起動
hugo server -D

# サイトのビルド
hugo

# テーマの作成
mkdir -p themes/simple-theme
```

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('World');
```

## 引用

> これは引用文です。
>
> 複数行にわたる引用も可能です。

## リンク

- [Hugo公式サイト](https://gohugo.io/)
- [design-system-example-components-react](https://github.com/digital-go-jp/design-system-example-components)

## 水平線

---

## テーブル

| 列1 | 列2 | 列3 |
|-----|-----|-----|
| データ1 | データ2 | データ3 |
| データ4 | データ5 | データ6 |

## その他の要素

### 強調

これは**非常に重要**なポイントです。

### コードとテキストの組み合わせ

段落の中に `code()` のようにインラインコードを含めることができます。
