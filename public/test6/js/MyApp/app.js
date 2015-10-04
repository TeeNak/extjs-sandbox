Ext.Loader.setConfig({ disableCaching:false });

Ext.application({
    name   : 'MyApp',

    launch : function() {

        Ext.Loader.setPath('Ext.ux', '../ext-4.2.1-gpl/ext-4.2.1.883/examples/ux');
        Ext.Loader.setPath('MyApp', 'js/MyApp');

        Ext.Loader.setConfig({ 
            enabled: true
        });


        Ext.require('MyApp.view.UserGridPanel');

        Ext.onReady(function() {
      //      Ext.create('MyApp.views.UserEditorWindow').show();

            var gridPanel = Ext.create('MyApp.view.UserGridPanel');


        });


    }
});