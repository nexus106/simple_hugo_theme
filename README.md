# Simple Hugo Theme プロジェクト

design-system-example-components-react のデザインシステムを参考にした、シンプルな Hugo テーマのプロジェクトです。

## プロジェクト概要

このプロジェクトは、[design-system-example-components-react](https://github.com/digital-go-jp/design-system-example-components) のデザインシステムを参考にして作成された Hugo テーマと、そのテーマを使用したサンプルブログで構成されています。

## ディレクトリ構成

```
.
├── content/              # 記事コンテンツ
│   └── post/           # 記事ファイル
├── themes/             # Hugoテーマ
│   └── simple-theme/   # テーマファイル
├── config.toml         # Hugo設定ファイル
├── package.json        # npm依存パッケージ
├── tailwind.config.js  # Tailwind CSS設定
└── postcss.config.js   # PostCSS設定
```

## クイックスタート

### 1. 依存パッケージのインストール

```bash
npm install
```

### 2. Hugoサーバーの起動

```bash
hugo server -D
```

http://localhost:1313/ にアクセスしてください。

> **注意:** このプロジェクトでは **Hugo Pipes** を使用しているため、CSSの事前ビルドは不要です。Hugoがビルド時に自動でPostCSS/Tailwindを処理します。

## スクリプト

```bash
# CSSのウォッチ（Hugo Pipes未使用の開発環境用）
npm run watch:css
```

> **メモ:** `build:css` / `watch:css` はHugo Pipesを使わない開発環境用のオプションです。通常は使用する必要がありません。

## 記事の作成

```bash
hugo new post/my-new-post.md
```

作成された記事の `type: post` を確認してください。

## Cloudflare Pages でデプロイ

### 設定

| 項目 | 値 |
|------|-----|
| **ビルドコマンド** | `npm install && hugo` |
| **ビルド出力ディレクトリ** | `public` |

### 解説

1. `npm install` - Hugo PipesがPostCSS/Tailwindを実行するための依存関係をインストール
2. `hugo` - Hugo Pipesが自動でPostCSS → Tailwind処理を実行し、サイトをビルド

CSSの事前ビルドは不要です。Hugoがすべてを処理します。

## 詳細ドキュメント

テーマの詳細については、[themes/simple-theme/README.md](themes/simple-theme/README.md) を参照してください。

## 開発

### CSSの変更

1. `themes/simple-theme/assets/css/main.css` を編集
2. `hugo server -D` で確認（Hugo Pipesが自動で処理）

### レイアウトの変更

- `themes/simple-theme/layouts/` 以下のファイルを編集

## ライセンス

MIT

## 参考リソース

- [design-system-example-components-react](https://github.com/digital-go-jp/design-system-example-components)
- [Hugo](https://gohugo.io/)
- [Tailwind CSS](https://tailwindcss.com/)
