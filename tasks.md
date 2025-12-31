# Hugo テーマ作成タスク

## 概要
design-system-example-components-react のデザインシステムを参考にして、シンプルな Hugo テーマを作成する。

## 参考リソース
- `hugo-theme-stack-starter/` - ディレクトリ構成の参考
- `design-system-example-components-react/` - デザインシステムとコンポーネントの参考

## ページ要件
- **トップページ**: ブログタイトル、記事一覧
- **記事ページ**: 記事タイトル、投稿日、更新日、記事本文

---

## タスク一覧

### 1. プロジェクト構築
- [x] 新しい Hugo テーマ用ディレクトリを作成する（`themes/simple-theme/`）
- [x] 基本的なディレクトリ構造を作成する
  - `layouts/` - HTML テンプレート
  - `assets/` - CSS/JS ファイル
  - `static/` - 静的ファイル
  - `config.toml` - テーマ設定

### 2. デザインシステムの準備
- [x] design-system-example-components-react のデザイントークンを確認する
  - `design-system-example-components-react/src/tokens/` の内容を確認
- [x] 使用するコンポーネントのスタイルを抽出する
  - Link（記事一覧のリンク用）
  - Typography（見出し、本文用）
  - Divider（区切り線用）
- [x] Tailwind CSS 設定を Hugo で使用できるように準備
- [x] Tailwind CSS ビルドのテスト
  - `npm run build:css` で CSS が正しくビルドされること
  - 出力された CSS にデザイントークンのクラスが含まれていること

### 3. 基本レイアウトの作成
- [x] `layouts/_default/baseof.html` - ベーステンプレート作成
- [x] `layouts/partials/` - 共通パーツを配置
  - `header.html` - ヘッダー（ブログタイトル）
  - `footer.html` - フッター
  - `head.html` - ヘッダー内要素（meta、CSS 読み込み）
- [x] 基本レイアウトのテスト
  - HTML 構造の検証
  - CSS が正しく読み込まれていることの確認

### 4. トップページの作成
- [x] `layouts/index.html` - トップページテンプレート作成
  - ブログタイトルの表示（`.Site.Title`）
  - 記事一覧の表示（`where .Site.RegularPages "Type" "post"`）
  - 記事タイトル、投稿日、更新日を一覧表示
- [x] トップページのテスト
  - 記事一覧が正しく表示されること
  - リンクが正しく動作すること
  - レスポンシブデザインの確認

### 5. 記事ページ（シングルページ）の作成
- [x] `layouts/_default/single.html` - 記事ページテンプレート作成
  - 記事タイトル（`.Title`）
  - 投稿日（`.Date`）
  - 更新日（`.Lastmod`）
  - 記事本文（`.Content`）
- [x] 記事ページのテスト
  - 記事タイトル、本文が正しく表示されること
  - 投稿日、更新日が正しく表示されること
  - Markdown のレンダリングが正しく動作すること

### 6. スタイリングの実装
- [x] `assets/css/main.css` - メイン CSS ファイル作成
  - design-system-example-components-react のデザイントークン（色、フォント、余白）を適用
  - Tailwind CSS のクラスを使用したスタイリング
- [x] レスポンシブデザインの対応
- [x] スタイリングのテスト
  - デザイントークンが正しく適用されていること
  - リンクのホバー・フォーカススタイルが正しく動作すること
  - 区切り線のスタイルが正しく適用されていること

### 7. テーマ設定ファイル
- [x] `theme.toml` - テーマ情報ファイルの作成
- [x] `config/_default/params.toml` - テーマパラメータの定義
- [x] 設定ファイルのテスト
  - Hugo が設定ファイルを正しく読み込めること
  - テーマ情報が正しく表示されること

### 8. サンプルコンテンツの作成
- [x] サンプル記事の作成（`content/post/first-post.md`）
- [x] フロントマターの設定（タイトル、日付、更新日）
- [x] サンプルコンテンツのテスト
  - Markdown の各種要素（見出し、リスト、コードブロック等）が正しくレンダリングされること
  - フロントマターの情報が正しく表示されること

### 9. 動作確認（統合テスト）
- [x] Hugo サーバーで動作確認（`hugo server -D`）
- [x] トップページの表示確認
- [x] 記事ページの表示確認
- [x] レスポンシブデザインの確認
- [x] E2E テスト
  - ユーザー視点での一連の操作フロー確認
  - 記事一覧から記事詳細への遷移確認
  - ブラウザの幅を変更した際のレイアウト崩れ確認

### 10. ドキュメント作成
- [x] README.md の作成
  - テーマの概要
  - 導入方法
  - カスタマイズ方法

---

## 注意事項
- design-system-example-components-react は React 製のコンポーネントライブラリのため、Hugo ではデザインとスタイル（CSS/Tailwind設定）を参考に実装する
- デザイントークン（`@digital-go-jp/design-tokens`）の色、タイポグラフィ、スペーシングを参照
- 可能な限り既存の Hugo テーマのパターンに従う
