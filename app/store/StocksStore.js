var storedStocks = [
    { id: 1, name: 'Товар 1', description: 'Описание товара 1', price: 100, count: 2 },
    { id: 2, name: 'Товар 2', description: 'Описание товара 2', price: 200, count: 8 },
    { id: 3, name: 'Товар 3', description: 'Описание товара 3', price: 300, count: 0 }
]

Ext.define('productApp.store.StocksStore', {
  extend: 'Ext.data.Store',
  alias: 'store.stocksStore',
  model: 'productApp.model.Stock',
  autoLoad: true,
  fields: ['ID', 'Имя', 'Описание', 'Цена', 'Кол-во'],

  data: storedStocks,
  pageSize: 5,
  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      rootProperty: 'data'
    },
  }
})