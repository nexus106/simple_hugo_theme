---
title: "コンポーネントテスト"
date: 2025-12-31T10:00:00+09:00
draft: false
---

# デザインシステムコンポーネント テストページ

design-system-example-components-react に基づくコンポーネントのテストページです。

## Button コンポーネント

### Solid Fill ボタン

{{< button text="Large Button" variant="solid-fill" size="lg" >}}
{{< button text="Medium Button" variant="solid-fill" size="md" >}}
{{< button text="Small Button" variant="solid-fill" size="sm" >}}
{{< button text="Extra Small" variant="solid-fill" size="xs" >}}

### Outline ボタン

{{< button text="Large Button" variant="outline" size="lg" >}}
{{< button text="Medium Button" variant="outline" size="md" >}}
{{< button text="Small Button" variant="outline" size="sm" >}}

### Text ボタン

{{< button text="Large Button" variant="text" size="lg" >}}
{{< button text="Medium Button" variant="text" size="md" >}}
{{< button text="Small Button" variant="text" size="sm" >}}

### 無効化されたボタン

{{< button text="Disabled Button" variant="solid-fill" size="md" disabled="true" >}}

---

## Breadcrumbs コンポーネント

### 基本的なパンくずリスト

{{< breadcrumbs >}}

---

## NotificationBanner コンポーネント

### Info1 (情報 - 青)

{{< notification type="info1" style="standard" title="情報" content="これは情報メッセージです。" >}}

### Info2 (情報 - グレー)

{{< notification type="info2" style="standard" title="お知らせ" content="これはグレーの情報メッセージです。" >}}

### Warning (警告)

{{< notification type="warning" style="standard" title="警告" content="これは警告メッセージです。注意が必要です。" >}}

### Error (エラー)

{{< notification type="error" style="standard" title="エラー" content="これはエラーメッセージです。問題が発生しています。" >}}

### Success (成功)

{{< notification type="success" style="standard" title="成功" content="操作が正常に完了しました。" >}}

### Color Chip スタイル

{{< notification type="info1" style="color-chip" title="カラーチップスタイル" content="これはカラーチップスタイルのバナーです。" >}}

---

## Accordion コンポーネント

### 基本的なアコーディオン

{{< accordion id="accordion-1" summary="アコーディオン 1" content="これはアコーディオンの内容です。クリックして展開・折りたたみができます。" >}}

{{< accordion id="accordion-2" summary="アコーディオン 2" content="2つ目のアコーディオンの内容です。" >}}

### 初期状態で開いたアコーディオン

{{< accordion id="accordion-3" summary="初期状態で開いているアコーディオン" content="これはページ読み込み時に既に開いているアコーディオンです。" open="true" >}}

---

## Form コンポーネント (Input/Label/ErrorText)

### 基本的なフォーム要素

{{< form-group label="名前" id="name" size="lg" placeholder="名前を入力してください" >}}

{{< form-group label="メールアドレス" id="email" type="email" size="md" placeholder="example@example.com" >}}

{{< form-group label="パスワード" id="password" type="password" size="md" >}}

{{< form-group label="備考" id="notes" size="sm" placeholder="任意の備考入力" >}}

### エラー状態

{{< form-group label="エラー例" id="error-input" size="md" error="この項目は必須です" >}}

### 必須項目

{{< form-group label="必須項目" id="required" size="md" required="true" placeholder="この項目は必須です" >}}

---

## Blockquote コンポーネント

<blockquote class="blockquote">
  これは引用文の例です。design-system-example-components-react の Blockquote スタイルを適用しています。
  左側に太いボーダーが表示されます。
</blockquote>

---

## Table コンポーネント

### 1行目が見出しセル

<table class="table">
  <thead>
    <tr>
      <th scope="col">ラベル</th>
      <th scope="col">ラベル</th>
      <th scope="col">ラベル</th>
      <th scope="col">ラベル</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>データ</td>
      <td>データ</td>
      <td>データ</td>
      <td>データ</td>
    </tr>
    <tr>
      <td>データ</td>
      <td>データ</td>
      <td>データ</td>
      <td>データ</td>
    </tr>
  </tbody>
</table>

---

## List コンポーネント

### 箇条書きリスト

<ul class="list-ul">
  <li>最初の項目</li>
  <li>2番目の項目</li>
  <li>3番目の項目</li>
</ul>

### 番号付きリスト

<ol class="list-ol">
  <li>最初の手順</li>
  <li>2番目の手順</li>
  <li>3番目の手順</li>
</ol>
