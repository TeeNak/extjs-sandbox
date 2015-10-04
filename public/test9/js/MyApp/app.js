Ext.Loader.setConfig({ disableCaching:false });

Ext.application({
    name   : 'MyApp',

    launch : function() {

        var me = this;

        Ext.Loader.setPath('Ext.ux', '../ext-4.2.1-gpl/ext-4.2.1.883/examples/ux');
        Ext.Loader.setPath('MyApp', 'js/MyApp');

        Ext.Loader.setConfig({ 
            enabled: true
        });


        Ext.require('MyApp.view.UserGridPanel');

        Ext.onReady(function() {
      //      Ext.create('MyApp.views.UserEditorWindow').show();

            var gridPanel = Ext.create('MyApp.view.UserGridPanel');
/*
            var data = [],
                perBatch = 1000,
                max = 20000;

            function createFakeData (count, data) {
                var i;
                count = count || 25;
                for( i = 0; i < count / 5; i++ ) {
                    data.push(
                        { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' }
                    );
                    data.push(
                        { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' }
                    );
                    data.push(
                        { name: 'Homer', email: 'home@simpsons.com', phone: '555-222-1244' }
                    );
                    data.push(
                        { name: 'Homer', email: 'home@simpsons.com', phone: '555-222-1244' }
                    );
                    data.push(
                        { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
                    );
                }
            }

            function makeData() {
                createFakeData(perBatch, data);
                if (data.length < max) {
                    setTimeout(makeData, 20);
                } else {
                    Ext.getBody().unmask();
                    gridPanel.getStore().loadData(data);
                }
            }
            
            Ext.getBody().mask('Generating fake data...');
                
            // In old IE, the fake data loop can cause a slow script warning,
            // so kick this off in the "background" to load the data in chunks.
            makeData();
*/

        });
    }

});