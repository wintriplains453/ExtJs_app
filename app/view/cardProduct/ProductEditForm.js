Ext.define('productApp.view.cardProduct.ProductEditForm', {
  extend: 'Ext.form.Panel',
  xtype: 'producteditform',

  bodyPadding: 10,

  constructor: function(config) {
      this.callParent(arguments);

      this.add([
          {
              xtype: 'displayfield',
              fieldLabel: 'Имя',
              value: config.record.get('name')
          },
          {
              xtype: 'displayfield',
              fieldLabel: 'Описание',
              value: config.record.get('description')
          },
          {
              xtype: 'numberfield',
              fieldLabel: 'Цена',
              name: 'price',
              value: config.record.get('price'),
              minValue: 0,
              decimalPrecision: 2,
              allowBlank: false,
              validator: function(value) {
                  return value >= 0 ? true : 'Цена должна быть неотрицательным числом';
              }
          },
          {
              xtype: 'numberfield',
              fieldLabel: 'Кол-во',
              name: 'count',
              value: config.record.get('count'),
              minValue: 0,
              allowBlank: false,
              validator: function(value) {
                  return Number.isInteger(Number(value)) && value >= 0 ? true : 'Количество должно быть неотрицательным целым числом';
              }
          }
      ]);

      this.addDocked({
          xtype: 'toolbar',
          dock: 'bottom', 
          items: [
              {
                  text: 'Сохранить',
                  handler: this.onSave,
                  scope: this
              },
              {
                  text: 'Отмена',
                  handler: this.onCancel,
                  scope: this
              }
          ]
      });
  },

  onSave: function() {
      const form = this;
      if (form.isValid()) {
          const values = form.getValues();
          const record = form.record;

          const priceChanged = values.price != record.get('price');
          const countChanged = values.count != record.get('count');

          if (priceChanged || countChanged) {
              Ext.Msg.alert('Изменения', 'Данные были изменены.', function() {

                record.set('price', values.price);
                  record.set('count', values.count);

                  form.up('window').close();
              });
          } else {
              Ext.Msg.alert('Информация', 'Нет измененных данных.');
          }
      } else {
          Ext.Msg.alert('Ошибка', 'Пожалуйста, исправьте ошибки в форме.');
      }
  },

  onCancel: function() {
      this.up('window').close();
  }
});
