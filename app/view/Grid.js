Ext.define('Fiddle.view.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygridpanel',

    requires: [
        'Fiddle.view.GridController',
        'Fiddle.view.GridModel'
    ],

    viewModel: {
        type: 'mygridpanel_model'
    },

    controller: 'mygridpanel_controller',
    title: 'My Grid Panel',

    bind: {
        store: '{Names}'
    },

    listeners: {
        edit: 'onUpdate'
    },

    columns: [{
        xtype: 'gridcolumn',
        dataIndex: 'first_name',
        text: 'First',
        editor: {
            xtype: 'textfield'
        }
    }, {
        xtype: 'gridcolumn',
        dataIndex: 'last_name',
        text: 'Last',
        editor: {
            xtype: 'textfield'
        }
    }, {
        xtype: 'actioncolumn',
        width: 50,
        sortable: false,
        menuDisabled: true,
        align: 'center',
        text: 'Delete',
        items: [{
            icon: 'https://cdn2.iconfinder.com/data/icons/aspneticons_v1.0_Nov2006/delete_16x16.gif',
            tooltip: 'Delete Name',
            handler: 'onDelete'
        }]
    }],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        items: [{
            xtype: 'form',
            reference: 'name_form',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            defaults: {
                labelWidth: 35
            },
            items: [{
                xtype: 'textfield',
                fieldLabel: 'First',
                allowBlank: false,
                name: 'first_name'
            }, {
                xtype: 'textfield',
                fieldLabel: 'Last',
                margin: '0 0 0 10',
                allowBlank: false,
                name: 'last_name'
            }]
        }, {
            xtype: 'button',
            text: 'Add Name',
            handler: 'onAdd'
        }]
    }],

    plugins: [{
        ptype: 'rowediting',
        clicksToEdit: 1
    }]
});