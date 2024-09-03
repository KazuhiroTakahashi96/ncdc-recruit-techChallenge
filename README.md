# NCDC フロントエンド技術課題[Markdown Editor]

### 起動準備・手順

1. 事前にバックエンド API をローカルで起動しておく。
2. 環境変数ファイルを作成（今回は無くても動作する想定で実装してます。主に`/src/store/content.js`内を参照）
   1. ルートディレクトリに`.env`ファイルを作成
   2. ファイル内に`VITE_API_URL=http://localhost:3000`と記述して保存
3. 以下コマンドをルートディレクトリで実行し、（おそらく）`http://localhost:5173`を開く

```
// インストール
npm i

// アプリ起動
npm run dev
```

### 使用した技術スタック

- [React](https://ja.react.dev/)：React(Next.js)メインでフロントエンド開発はされていることと、個人的にこれから使用していきたいライブラリ・フレームワークだったためキャッチアップも兼ねて今回使用しました。
- [React Router](https://reactrouter.com/en/main)：ルーティングに使用した。（今回の規模？なら無くてもよかったと思う。キャップアップも兼ねて使用しました）。
- [TailwindCSS](https://tailwindcss.com/)：前職で参画していたプロジェクトで使用経験があり、使いやすかったため今回使用しました。
- [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)：タイトルの編集・更新後にサイドバーのタイトルも更新させるにはグローバルステート管理が必要だと思い、そこで、YouTube を使用し MERN スタックで React と Node.js を勉強する中で出会ったこちらを、今回アウトプットも兼ねて使用しました。

### その他

- `/`にアクセスした際のデザイン仕様がなかったため、サイドバーは表示するものの、編集エリア？については何も表示しないようにしました(App.jsx 12 行目参照)。
- デザイン仕様が幅 1440px、高さ 1024px となっていたため、その想定で実装しました。
- ディレクトリ構造の正解が分からず、こちらの[Zenn の記事](https://zenn.dev/manalink_dev/articles/bulletproof-react-is-best-architecture?redirected=1)をなんとなく参考にしました。
