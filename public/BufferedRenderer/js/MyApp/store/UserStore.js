Ext.define('MyApp.store.UserStore', {
    extend: 'Ext.data.Store',
    requires : [
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.ux.data.PagingMemoryProxy'
    ],
//            autoLoad: true,
    model: 'MyApp.model.User',
//    pageSize: 100,


    proxy: {
        // memory proxy is better in performance than pagingmemory when used
        // with paging scroller
//        type: 'pagingmemory'
        type: 'memory'
    }

});
