### 絶対パスの指定方法
https://create-react-app.dev/docs/importing-a-component/#absolute-imports
のAbsolute Importsを参考に記載しています。

### Dockerの起動方法
ターミナルでwwwディレクトリに移動後、docker compose -d up build

### Dockerコンテナ内に入る方法
①Dev Containerから入る
拡張機能をダウンロードして、VSコード左下のアイコンをクリック、実行中のコンテナにアタッチすると別ウインドウで開きます
②コマンドで入る方法
docker exec -it コンテナID sh
