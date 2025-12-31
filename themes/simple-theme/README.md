# Simple Hugo Theme

design-system-example-components-react のデザインシステムを参考にした、シンプルな Hugo テーマです。

## 特徴

- **シンプルなデザイン**: 余計な装飾を排したミニマルなデザイン
- **デザインシステム**: @digital-go-jp/design-tokens を使用したデザイントークン
- **レスポンシブ対応**: モバイル、タブレット、デスクトップに対応
- **アクセシビリティ**: リンクのフォーカススタイル、適切なコントラスト比
- **Markdown対応**: 見出し、リスト、コードブロック、引用、テーブル等
- **コンポーネントライブラリ**: 再利用可能なUIコンポーネント

## デモ

### トップページ
- ブログタイトルの表示
- 記事一覧（タイトル、投稿日、更新日、サマリー）

### 記事ページ
- 記事タイトル
- 投稿日、更新日
- 記事本文（Markdownレンダリング）

### コンポーネントテストページ
- すべてのUIコンポーネントのデモ: `/components/`

## 導入方法

### 1. 新しいHugoサイトを作成

```bash
hugo new site my-blog
cd my-blog
```

### 2. テーマを追加

```bash
git clone https://github.com/yourusername/simple-hugo-theme themes/simple-theme
```

または、Gitサブモジュールとして追加：

```bash
git submodule add https://github.com/yourusername/simple-hugo-theme themes/simple-theme
```

### 3. config.toml を設定

```toml
baseURL = "https://example.com/"
title = "My Blog"
theme = "simple-theme"

languageCode = "ja-jp"
hasCJKLanguage = true

[params]
  description = "ブログの説明"
  author = "著者名"
```

### 4. 依存パッケージをインストール

```bash
npm install
```

### 5. CSSをビルド

```bash
npm run build:css
```

### 6. 記事を作成

```bash
hugo new post/my-first-post.md
```

### 7. Hugoサーバーを起動

```bash
hugo server -D
```

http://localhost:1313/ にアクセスして確認してください。

## コンポーネントライブラリ

このテーマには [design-system-example-components-react](https://github.com/digital-go-jp/design-system-example-components) に基づくUIコンポーネントが含まれています。

### 使用方法

コンポーネントは2つの方法で使用できます：

1. **Shortcodes**（Markdown内で使用）
2. **Partials**（テンプレート内で使用）

---

### Button コンポーネント

ボタンコンポーネント。3つのバリアントと4つのサイズをサポートします。

#### Shortcode

```markdown
{{< button text="送信" variant="solid-fill" size="md" >}}
```

#### Partial

```go-html-template
{{ partial "components/button.html" (dict
  "text" "送信"
  "variant" "solid-fill"
  "size" "md"
  "type" "submit"
) }}
```

#### パラメータ

| パラメータ | 説明 | デフォルト | 値 |
|-----------|------|-----------|-----|
| `text` | ボタンテキスト | 必須 | 任意の文字列 |
| `variant` | ボタンバリアント | `solid-fill` | `solid-fill`, `outline`, `text` |
| `size` | ボタンサイズ | `md` | `lg`, `md`, `sm`, `xs` |
| `type` | ボタンタイプ | `button` | `button`, `submit`, `reset` |
| `disabled` | 無効化 | `false` | `true`, `false` |

#### 使用例

```markdown
### Solid Fill ボタン
{{< button text="Large Button" variant="solid-fill" size="lg" >}}
{{< button text="Medium Button" variant="solid-fill" size="md" >}}
{{< button text="Small Button" variant="solid-fill" size="sm" >}}
{{< button text="Extra Small" variant="solid-fill" size="xs" >}}

### Outline ボタン
{{< button text="送信" variant="outline" size="md" >}}

### Text ボタン
{{< button text="キャンセル" variant="text" size="md" >}}

### 無効化されたボタン
{{< button text="送信中..." variant="solid-fill" size="md" disabled="true" >}}
```

---

### Breadcrumbs コンポーネント

パンくずリストを表示します。

#### Shortcode

```markdown
{{< breadcrumbs >}}
```

#### Partial

```go-html-template
{{ partial "components/breadcrumbs.html" }}
```

#### 使用例

```markdown
{{< breadcrumbs >}}
```

---

### NotificationBanner コンポーネント

重要なお知らせや警告を表示するバナー。

#### Shortcode

```markdown
{{< notification type="info1" style="standard" title="お知らせ" content="通知内容" >}}
```

#### Partial

```go-html-template
{{ partial "components/notification-banner.html" (dict
  "type" "info1"
  "style" "standard"
  "title" "お知らせ"
  "content" "通知内容"
) }}
```

#### パラメータ

| パラメータ | 説明 | デフォルト | 値 |
|-----------|------|-----------|-----|
| `type` | バナータイプ | `info1` | `info1`, `info2`, `warning`, `error`, `success` |
| `style` | バナースタイル | `standard` | `standard`, `color-chip` |
| `title` | バナータイトル | 必須 | 任意の文字列 |
| `content` | バナー内容 | 必須 | 任意の文字列（HTML可） |

#### 使用例

```markdown
### 情報（青）
{{< notification type="info1" style="standard" title="情報" content="これは情報メッセージです。" >}}

### 情報（グレー）
{{< notification type="info2" style="standard" title="お知らせ" content="これはグレーの情報メッセージです。" >}}

### 警告
{{< notification type="warning" style="standard" title="警告" content="これは警告メッセージです。注意が必要です。" >}}

### エラー
{{< notification type="error" style="standard" title="エラー" content="これはエラーメッセージです。問題が発生しています。" >}}

### 成功
{{< notification type="success" style="standard" title="成功" content="操作が正常に完了しました。" >}}

### カラーチップスタイル
{{< notification type="info1" style="color-chip" title="カラーチップ" content="これはカラーチップスタイルのバナーです。" >}}
```

---

### Accordion コンポーネント

展開・折りたたみ可能なコンテンツを表示します。

#### Shortcode

```markdown
{{< accordion id="accordion-1" summary="アコーディオンヘッダー" content="アコーディオン内容" >}}
```

#### Partial

```go-html-template
{{ partial "components/accordion.html" (dict
  "id" "accordion-1"
  "summary" "アコーディオンヘッダー"
  "content" "アコーディオン内容"
  "open" false
) }}
```

#### パラメータ

| パラメータ | 説明 | デフォルト | 値 |
|-----------|------|-----------|-----|
| `id` | 一意のID | 必須 | 任意の文字列 |
| `summary` | サマリー（見出し） | 必須 | 任意の文字列 |
| `content` | コンテンツ内容 | 必須 | 任意の文字列（HTML可） |
| `open` | 初期状態で開くか | `false` | `true`, `false` |

#### 使用例

```markdown
### 基本的なアコーディオン
{{< accordion id="accordion-1" summary="よくある質問" content="これはアコーディオンの内容です。" >}}

{{< accordion id="accordion-2" summary="もう一つの質問" content="2つ目のアコーディオンの内容です。" >}}

### 初期状態で開いたアコーディオン
{{< accordion id="accordion-3" summary="詳細情報" content="これはページ読み込み時に既に開いているアコーディオンです。" open="true" >}}
```

---

### Form コンポーネント (Input/Label/ErrorText)

フォーム要素をまとめて表示します。

#### Shortcode

```markdown
{{< form-group label="名前" id="name" type="text" size="md" placeholder="名前を入力" >}}
```

#### Partial

```go-html-template
{{ partial "components/form-group.html" (dict
  "label" "名前"
  "id" "name"
  "type" "text"
  "size" "md"
  "placeholder" "名前を入力してください"
  "required" false
  "error" ""
) }}
```

#### パラメータ

| パラメータ | 説明 | デフォルト | 値 |
|-----------|------|-----------|-----|
| `label` | ラベルテキスト | - | 任意の文字列 |
| `id` | input要素のID | 必須 | 任意の文字列 |
| `type` | inputのtype属性 | `text` | `text`, `email`, `password`, etc. |
| `size` | 入力サイズ | `md` | `lg`, `md`, `sm` |
| `placeholder` | プレースホルダー | - | 任意の文字列 |
| `required` | 必須項目か | `false` | `true`, `false` |
| `error` | エラーメッセージ | - | 任意の文字列 |
| `name` | input要素のname属性 | `id`と同じ | 任意の文字列 |

#### 使用例

```markdown
### 基本的なフォーム要素
{{< form-group label="名前" id="name" size="lg" placeholder="名前を入力してください" >}}

{{< form-group label="メールアドレス" id="email" type="email" size="md" placeholder="example@example.com" >}}

{{< form-group label="パスワード" id="password" type="password" size="md" >}}

### 必須項目
{{< form-group label="必須項目" id="required" size="md" required="true" placeholder="この項目は必須です" >}}

### エラー状態
{{< form-group label="エラー例" id="error-input" size="md" error="この項目は必須です" >}}
```

---

### その他のCSSクラス

#### Blockquote

```html
<blockquote class="blockquote">
  これは引用文の例です。左側に太いボーダーが表示されます。
</blockquote>
```

#### Table

```html
<table class="table">
  <thead>
    <tr>
      <th scope="col">ラベル</th>
      <th scope="col">ラベル</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>データ</td>
      <td>データ</td>
    </tr>
  </tbody>
</table>
```

#### List (Ul/Ol)

```html
<ul class="list-ul">
  <li>最初の項目</li>
  <li>2番目の項目</li>
</ul>

<ol class="list-ol">
  <li>最初の手順</li>
  <li>2番目の手順</li>
</ol>
```

#### Divider

```html
<hr class="divider">
```

---

## 記事の作成

記事は `content/post/` ディレクトリに配置します。

### フロントマター例

```markdown
---
title: "記事タイトル"
date: 2025-12-30T10:00:00+09:00
lastmod: 2025-12-30T12:00:00+09:00
type: post
---

これは記事本文です。
```

### 必須フィールド

- `title`: 記事タイトル
- `date`: 投稿日時
- `type`: `post` を指定

### オプションフィールド

- `lastmod`: 更新日時（投稿日と異なる場合に表示）

## カスタマイズ方法

### CSSをカスタマイズ

`themes/simple-theme/assets/css/main.css` を編集します。

#### Linkスタイルのカスタマイズ

```css
.link {
  @apply text-blue-1000 underline;
  /* カスタムスタイルを追加 */
}
```

#### 記事本文（prose）のスタイル

```css
.prose h2 {
  @apply text-std-28B-150 mt-8 mb-4;
}
```

### レスポンシブデザイン

モバイル向けのスタイルは `@media` クエリで定義されています：

```css
@media (max-width: 768px) {
  .prose h2 {
    @apply text-std-24B-150;
  }
}
```

### カラーテーマ

@digital-go-jp/design-tokens の色を使用しています：

- `blue-1000`: リンクの基本色
- `magenta-900`: 訪問済みリンク
- `yellow-300`: フォーカス背景
- `solid-gray-420`: 区切り線

## CSSの開発

### CSSのビルド

```bash
npm run build:css
```

### CSSのウォッチ（開発中）

```bash
npm run watch:css
```

### Tailwind CSS設定

`tailwind.config.js` で設定を変更できます。

## プロジェクト構造

```
themes/simple-theme/
├── config/
│   └── _default/
│       └── params.toml              # テーマパラメータ
├── assets/
│   └── css/
│       ├── main.css                 # ソースCSS
│       └── dist/
│           └── main.css             # ビルド済みCSS
├── layouts/
│   ├── _default/
│   │   ├── baseof.html              # ベーステンプレート
│   │   └── single.html              # 記事ページ
│   ├── partials/
│   │   ├── header.html              # ヘッダー
│   │   ├── footer.html              # フッター
│   │   ├── head.html                # ヘッダー内要素
│   │   └── components/              # コンポーネント（Partial版）
│   │       ├── button.html
│   │       ├── breadcrumbs.html
│   │       ├── notification-banner.html
│   │       ├── accordion.html
│   │       └── form-group.html
│   ├── shortcodes/                  # ショートコード
│   │   ├── button.html
│   │   ├── breadcrumbs.html
│   │   ├── notification.html
│   │   ├── accordion.html
│   │   └── form-group.html
│   └── index.html                   # トップページ
├── static/                          # 静的ファイル
└── theme.toml                       # テーマ情報
```

## 依存関係

- [Hugo](https://gohugo.io/) >= 0.112.0
- [Node.js](https://nodejs.org/) >= 20
- [@digital-go-jp/design-tokens](https://github.com/digital-go-jp/design-tokens)
- [@digital-go-jp/tailwind-theme-plugin](https://github.com/digital-go-jp/tailwind-theme-plugin)
- [Tailwind CSS](https://tailwindcss.com/)

## 参考リソース

- [design-system-example-components-react](https://github.com/digital-go-jp/design-system-example-components)
- [Hugo ドキュメント](https://gohugo.io/documentation/)

## ライセンス

MIT

## 作者

Your Name

## 謝辞

このテーマは [design-system-example-components-react](https://github.com/digital-go-jp/design-system-example-components) のデザインシステムを参考にして作成されました。
