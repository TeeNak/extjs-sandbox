Ext.application({
    name   : 'MyApp',

    launch : function() {
/*
        Ext.widget({
            renderTo : Ext.getBody(),
            xtype    : 'grid',
            title    : 'Grid',
            width    : 650,
            height   : 300,
            plugins  : 'rowediting',
            store    : {
                fields : [ 'name', 'age', 'votes', 'credits' ],
                data   : [
                    [ 'Bill', 35, 10, 427 ],
                    [ 'Fred', 22, 4, 42 ]
                ]
            },
            columns: {
                defaults: {
                    editor : 'numberfield',
                    width  : 120
                },
                items: [
                    { text: 'Name', dataIndex: 'name', flex: 1, editor: 'textfield' },
                    { text: 'Age', dataIndex: 'age' },
                    { text: 'Votes', dataIndex: 'votes' },
                    { text: 'Credits', dataIndex: 'credits' }
                ]
            }
        })
*/

        Ext.define('User', {
            extend: 'Ext.data.Model',
            fields: [ 'name', 'email', 'phone' ]
        });

        var userStore = Ext.create('Ext.data.Store', {
            model: 'User',
            data: [
                { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
                { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
                { name: 'Homer', email: 'home@simpsons.com', phone: '555-222-1244' },
                { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
            ]
        });


        Ext.create('Ext.grid.Panel', {
            renderTo: Ext.getBody(),
            store: userStore,
            width: 400,
            height: 200,
            title: 'Application Users',
            columns: [
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
            ]
        });


    }
});