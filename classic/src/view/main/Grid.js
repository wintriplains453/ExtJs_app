
Ext.define('productApp.view.main.Grid', {
  extend: 'Ext.grid.Panel',
  xtype: 'mainGrid',

  title: 'Товары',
  padding: '20',
  store: {
    type: 'stocksStore'
  },
  scrollable: false,

  columns: [
      { text: 'ID', dataIndex: 'id', flex: 1 },
      { text: 'Имя', dataIndex: 'name', flex: 1 },
      { text: 'Описание', dataIndex: 'description', flex: 1 },
      { text: 'Цена', dataIndex: 'price', flex: 1 },
      {   
        text: 'Кол-во', 
        dataIndex: 'count', 
        flex: 1,
        renderer: function(value, metaData) {
          if (value === 0) {
            metaData.style = 'background-color:#ff7171; color: white;';
          }
          return value;
        }
      }
  ],


  tbar: {
    layout: {
        type: 'vbox',
        align: 'stretchmax' 
    },
    items: [
      {
          xtype: 'textfield',
          fieldLabel: 'ID',
          emptyText: 'Введите ID',
          itemId: 'idFilterField',
          margin: '10 0',
          enableKeyEvents: true,
          listeners: {
              keyup: function(field, event) {
                  if (event.getKey() === Ext.EventObject.ENTER) {
                      this.up('grid').filterProducts();
                  }
              }
          }
      },
      {
          xtype: 'textfield',
          fieldLabel: 'Описание',
          emptyText: 'Введите описание',
          margin: '10 0',
          itemId: 'descriptionFilterField',
          enableKeyEvents: true,
          listeners: {
              keyup: function(field, event) {
                  if (event.getKey() === Ext.EventObject.ENTER) {
                      this.up('grid').filterProducts();
                  }
              }
          }
      }
  ]},

  listeners: {
    itemclick: function(view, record) {
        view.up('grid').openProductCard(record);
      }
  },

  bbar: {
    xtype: 'pagingtoolbar',
    store: {
       type: 'stocksStore'
    },
    displayInfo: true,
    displayMsg: 'Показано товаров {0} - {1} из {2}',
    emptyMsg: 'Нет товаров для отображения'
  },

  filterProducts: function() {
    var grid = this,
    idFilter = grid.down('#idFilterField').getValue(),
    descriptionFilter = grid.down('#descriptionFilterField').getValue(),
    store = grid.getStore();

    store.clearFilter();

    store.filterBy(function(record) {
      
      var idMatch = true,
      descriptionMatch = true;

      if (idFilter) {
          idMatch = record.get('id') == idFilter; 
      }

      if (descriptionFilter) {
          descriptionMatch = record.get('name').toLowerCase().includes(descriptionFilter.toLowerCase());
      }

      return idMatch && descriptionMatch;
      
    });
  },

  openProductCard: function(record) {
    const editForm = Ext.create('productApp.view.cardProduct.ProductEditForm', {
      record: record
    });

    Ext.create('Ext.window.Window', {
      title: record.get('name'),
      modal: true,
      items: [editForm]
    }).show();
  }
});