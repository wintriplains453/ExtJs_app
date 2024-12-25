Ext.define('productApp.model.Stock', {
  extend: 'productApp.model.Base',

  store: 'productApp.store.StockStore',
  fields: [
    {name: 'id', type: 'int'},
    {name: 'name', type: 'string'},
    {name: 'description', type: 'string'},
    {name: 'price', type: 'float'},
    {name: 'count', type: 'float'},
  ]
})