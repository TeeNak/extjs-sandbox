Ext.application({
    name   : 'MyApp',

    launch : function() {

        Ext.Loader.setPath('MyApp', 'js/MyApp');
        Ext.require('MyApp.views.UserEditorWindow')
        Ext.onReady(function() {
                Ext.create('MyApp.views.UserEditorWindow').show();
        });

    }
});