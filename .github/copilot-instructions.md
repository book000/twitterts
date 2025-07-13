# GitHub Copilot Instructions for twitterts

## プロジェクト概要

**twitterts** は、TypeScript で作成された Twitter (X.com) の非公式スクレイピング API ライブラリです。Puppeteer を使用して Twitter のトラフィックをキャプチャし、有効な Twitter アカウントを使用してデータを取得します。

### 主要な機能

- Puppeteer を使用した x.com のトラフィックキャプチャ
- ユーザーツイート、タイムライン、検索などの API 提供
- REST および GraphQL エンドポイントのサポート
- 包括的な TypeScript 型定義
- レスポンスデータベースへの保存機能

## 技術スタック

### コア技術

- **TypeScript**: 厳格な型定義とコンパイル設定
- **Puppeteer Core**: ブラウザ自動化とスクレイピング
- **Node.js**: ランタイム環境

### 開発ツール

- **pnpm**: パッケージマネージャー（npm/yarn ではなく pnpm を使用）
- **ESLint**: `@book000/eslint-config` を使用したコード品質管理
- **Prettier**: コードフォーマット（設定は `.prettierrc.yml` を参照）
- **Jest**: テストフレームワーク
- **TypeDoc**: API ドキュメント生成
- **Husky**: Git フック管理

### CI/CD

- **GitHub Actions**: 自動ビルド、テスト、リリース
- **MySQL**: テスト環境でのデータベース

## コードスタイルとフォーマット規約

### TypeScript

- 厳格な TypeScript 設定（`tsconfig.json` を参照）
- `strict: true` モードを使用
- 未使用変数・パラメータの検出を有効化
- CommonJS モジュールシステムを使用

### コードフォーマット

- Prettier 設定（`.prettierrc.yml`）:
  - 行幅: 80文字
  - タブ幅: 2スペース
  - セミコロン: なし
  - シングルクォート使用
  - 末尾カンマ: ES5 スタイル
  - 改行コード: LF

### ESLint

- `@book000/eslint-config` を基盤とした設定
- `docs` ディレクトリは除外
- 未使用の eslint-disable ディレクティブを警告

## 開発ワークフロー

### ブランチ戦略

- メインブランチ: `main` または `master`
- フィーチャーブランチからプルリクエスト作成

### コマンド

```bash
# 依存関係インストール
pnpm install --frozen-lockfile

# リント実行
pnpm run lint

# ビルド実行
pnpm run build

# テスト実行
pnpm run test

# フォーマット修正
pnpm run fix
```

### Pre-commit フック

Husky により以下が自動実行される:

- `pnpm lint`
- `pnpm build`

## ファイル構造と組織化

### ディレクトリ構造

```
src/
├── generate-types/     # 型生成関連
├── models/            # データモデル定義
│   ├── responses/     # API レスポンス型
│   └── exceptions/    # 例外クラス
├── parser/            # データパーサー
├── saving-responses/  # レスポンス保存機能
├── converter.ts       # データ変換ユーティリティ
├── scraper.ts         # メインスクレイピングクラス
├── twitter.ts         # 公開 API クラス
└── index.ts          # エクスポート定義
```

### 重要なファイル

- `src/index.ts`: すべてのエクスポートを管理（ctix による自動生成）
- `src/twitter.ts`: メインの公開 API クラス
- `src/scraper.ts`: 内部スクレイピング実装
- `src/models/responses/`: Twitter API レスポンスの型定義

## コメントと言語使用規約

### 日本語使用箇所

- **ソースコード内のコメント**: すべて日本語で記述
- **JSDoc コメント**: 日本語で記述
- **PR の本文**: 日本語で記述
- **Issue コメント**: 日本語で記述
- **レビューコメント**: 日本語で記述
- **CI/CD ワークフローの説明**: 日本語で記述

### 英語使用箇所

- **PR タイトル**: 必ず英語で記述
- **コミットメッセージ**: 英語で記述（Conventional Commits 準拠）
- **変数名・関数名**: 英語で記述
- **型名・インターフェース名**: 英語で記述

## コミットとプルリクエスト規約

### Conventional Commits

すべてのコミットメッセージは Conventional Commits 仕様に準拠する:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Type 種類

- `feat`: 新機能
- `fix`: バグ修正
- `docs`: ドキュメント変更
- `style`: コードスタイル変更（機能に影響なし）
- `refactor`: リファクタリング
- `test`: テスト追加・修正
- `chore`: その他の変更
- `build`: ビルドシステム変更
- `ci`: CI 設定変更

#### 例

```
feat: add new user timeline parser
fix: resolve rate limiting issue in scraper
docs: update API documentation for search methods
```

### プルリクエスト

- **タイトル**: 英語で記述、Conventional Commits 形式
- **本文**: 日本語で詳細説明
- フォークからの PR には `🚀request-ci` ラベルが必要

## テストガイドライン

### テスト構成

- Jest を使用したユニットテスト
- `*.test.ts` パターンでテストファイル命名
- `jest-expect-message` でカスタムメッセージ対応

### テスト環境

- MySQL データベースが必要
- 環境変数で Twitter 認証情報を設定
- XVFB 環境での実行（CI）

### テスト実行

```bash
# 通常のテスト実行
pnpm run test

# CI 環境での実行
# 各種環境変数が自動設定される
```

## 依存関係管理

### パッケージマネージャー

- **pnpm** を使用（npm/yarn は使用しない）
- `pnpm-lock.yaml` はコミット対象
- `--frozen-lockfile` オプションで固定インストール

### 主要依存関係

- `puppeteer-core`: ブラウザ自動化
- `@book000/node-utils`: 共通ユーティリティ
- `mysql2`: データベース接続
- `otplib`: OTP 認証
- `twitter-d`: Twitter 型定義

### 開発依存関係

- `@book000/eslint-config`: ESLint 設定
- `ctix`: インデックスファイル自動生成
- `typedoc`: ドキュメント生成
- `tsx`: TypeScript 実行

## API ドキュメント

### TypeDoc

- `src/index.ts` から API ドキュメント生成
- GitHub Pages でホスト
- `docs/` ディレクトリに出力

### 生成コマンド

```bash
pnpm run generate-docs
```

## エラーハンドリング

### カスタム例外

`src/models/exceptions` に定義された例外クラスを使用:

- `TwitterTsError`: 基底例外クラス
- `TwitterOperationError`: 操作エラー
- `TwitterTimeoutError`: タイムアウトエラー
- `TwitterRateLimitError`: レート制限エラー
- その他具体的なエラー

### エラーメッセージ

- 日本語でわかりやすく記述
- 対処方法を含める

## セキュリティとプライバシー

### 認証情報

- 環境変数で管理
- GitHub Secrets で CI/CD に提供
- ソースコードにハードコーディング禁止

### データ保存

- レスポンスデータベース機能は開発・デバッグ用途
- 本番環境での個人情報保存に注意

## パフォーマンス考慮事項

### レート制限

- Twitter の API レート制限を尊重
- 適切な間隔でリクエスト実行
- レート制限エラーの適切なハンドリング

### メモリ使用量

- 大量データ処理時のメモリ効率を考慮
- ストリーミング処理の活用

## コード生成

### 自動生成

- `ctix` による `src/index.ts` の自動生成
- TypeScript 型の自動生成機能
- スキーマ生成機能

### 生成コマンド

```bash
pnpm run ctix          # インデックスファイル生成
pnpm run generate-types # 型生成
pnpm run generate-schema # スキーマ生成
```

## リリースプロセス

### 自動リリース

- PR マージ時に自動実行
- セマンティックバージョニング
- GitHub Releases 自動作成
- npm パッケージ自動公開

### バージョニング

Conventional Commits に基づく自動バージョニング:

- `feat`: マイナーバージョン更新
- `fix`: パッチバージョン更新
- `BREAKING CHANGE`: メジャーバージョン更新

これらの指針に従って、一貫性のある高品質なコードの開発をサポートしてください。
