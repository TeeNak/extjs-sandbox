Ext.define('MyApp.store.UserStore', {
    extend: 'Ext.data.Store',
    requires : [
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.ux.data.PagingMemoryProxy'
    ],
//            autoLoad: true,
    model: 'MyApp.model.User',
    pageSize: 100,



    proxy: {
        type: 'pagingmemory',
        reader: {
            type: 'json',
            root: 'users'
        }
    },

});
