Ext.define('productApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'productApp.view.main.Grid',
        'productApp.view.main.Form',
        'productApp.store.StocksStore',
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    header: {
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        title: {
            bind: {
                text: 'Учет товаров'
            },
            flex: 1
        },
        items: [
            {
                xtype: 'button',
                text: 'Товары',
                margin: '10 10 10 0',
                handler: 'onProductsButtonClick',
								cls: 'custom-button'
            },
            {
                xtype: 'button',
                text: 'Logout',
                margin: '10 10 10 0',
                handler: 'onClickButton',
								cls: 'custom-button'
            }
        ]
    },

    tabBar: {
        docked: 'bottom',
        flex: 0,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        },
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },
    renderTo: Ext.getBody()
});
