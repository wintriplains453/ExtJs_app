Ext.define('productApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onClickButton: function () {
        localStorage.removeItem('productLogged')

        this.getView().destroy();
        Ext.create({
            xtype: 'login',
        })
    },

    onProductsButtonClick: function() {
        var tabPanel = this.getView();
        var tabId = 'productsTabId' + Ext.id();

        if (!tabPanel.items.findBy(item => item.id === tabId)) {
            tabPanel.add({
                title: 'Список товаров',
                id: tabId,
                closable: true,
                margin: '10',
                xtype: 'mainGrid'
            })
        }

        tabPanel.setActiveTab(tabId);
    }
});
