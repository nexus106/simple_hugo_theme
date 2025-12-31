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

### 2. CSSのビルド

```bash
npm run build:css
```

### 3. Hugoサーバーの起動

```bash
hugo server -D
```

http://localhost:1313/ にアクセスしてください。

## スクリプト

```bash
# CSSのビルド
npm run build:css

# CSSのウォッチ（開発中）
npm run watch:css
```

## 記事の作成

```bash
hugo new post/my-new-post.md
```

作成された記事の `type: post` を確認してください。

## 詳細ドキュメント

テーマの詳細については、[themes/simple-theme/README.md](themes/simple-theme/README.md) を参照してください。

## 開発

### CSSの変更

1. `themes/simple-theme/assets/css/main.css` を編集
2. `npm run build:css` でビルド
3. 変更を確認

### レイアウトの変更

- `themes/simple-theme/layouts/` 以下のファイルを編集

## ライセンス

MIT

## 参考リソース

- [design-system-example-components-react](https://github.com/digital-go-jp/design-system-example-components)
- [Hugo](https://gohugo.io/)
- [Tailwind CSS](https://tailwindcss.com/)
