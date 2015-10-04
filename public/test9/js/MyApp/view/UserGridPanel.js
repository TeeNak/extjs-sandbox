Ext.define('MyApp.view.UserGridPanel', {
    extend: 'Ext.grid.Panel',
    requires : [
        'MyApp.store.UserStore',
        'Ext.grid.plugin.BufferedRenderer'
    ],
    renderTo: Ext.getBody(),
    width: 600,
    height: 400,
    title: 'Application Users',
    loadMask: true,
    plugins: 'bufferedrenderer',    
    columns: [
        {
            xtype: 'rownumberer',
            width: 40,
            sortable: false
        },
        {
            text: 'Name',
            width: 100,
            sortable: false,
            hideable: false,
            dataIndex: 'name'
        },
        {
            text: 'Email Address',
            width: 150,
            dataIndex: 'email',
            hidden: true
        },
        {
            text: 'Phone Number',
            flex: 1,
            dataIndex: 'phone'
        }
    ],
    initComponent : function() {

        var me = this;
        var data = [],
            perBatch = 1000,
            max = 20000;

        this.store   = Ext.create('MyApp.store.UserStore');


        this.callParent();



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
                me.getStore().loadData(data);
            }
        }
        
        Ext.getBody().mask('Generating fake data...');
            
        // In old IE, the fake data loop can cause a slow script warning,
        // so kick this off in the "background" to load the data in chunks.
        makeData();


    }


});
