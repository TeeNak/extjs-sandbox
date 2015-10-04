// Ext.Loader有効化
Ext.Loader.setConfig({
    enabled: true
});

// アプリケーション設定
Ext.application({

    // アプリケーション名
    name: 'Xenophy',

    // アプリケーションフォルダパス
    appFolder: 'src/app',

    // 使用コントローラー定義
    controllers: ['Main'],

    // アプリケーション起動時イベントハンドラ
    launch: function() {

        Ext.Loader.setPath('Xenophy', 'src/app');
        Ext.require('Xenophy.view.Viewport');

        Ext.onReady(function() {
            Ext.create('Xenophy.view.Viewport');
        });

    }

});
