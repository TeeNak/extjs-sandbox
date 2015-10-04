        Ext.define('MyApp.view.UserGridPanel', {
            extend: 'Ext.grid.Panel',
            requires : ['MyApp.store.UserStore'],
            renderTo: Ext.getBody(),
            width: 600,
            height: 400,
            title: 'Application Users',
            loadMask: true,
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
            ],
            initComponent : function() {
                this.store   = Ext.create('MyApp.store.UserStore');
                // paging bar on the bottom
                this.bbar = Ext.create('Ext.PagingToolbar', {
                    store: this.store,
                    displayInfo: true
                });
                this.callParent();

                // trigger the data store load
                this.store.loadPage(1);
            }
        });
