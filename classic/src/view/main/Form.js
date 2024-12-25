Ext.define('productApp.view.main.Form', {
  extend: 'Ext.form.Panel',
  xtype: 'Form',
  title: 'Add a new Stock',
  width: 350,
  bodyPadding: 5,
  url: 'http://localhost:1234/stock',
  methods: 'POST',

  layout: 'anchor',
  defaults: {
    anchor: '100%'
  },

  defaultType: 'textfield',
  items: [
    {
      fieldLabel: 'Name',
      name: 'nameInp',
      allowBlank: false
    }
  ],
  jsonSubmit: true,
  buttons: [
    {
      text: 'Submit',
      formBind: true,
      disabled: true,
      handler: function() {
        var form = this.up('form')

        if(form.isValid()) {
          form.submit({
            success: function(form, action) {
              Ext.Msg.alert(
                'Seccess',
                'The stock got added!'
              )
            },
            failure: function() {
              Ext.Msg.alert(
                'Error',
                'Ups, the stock not added'
              )
            }
          })
        }
      }
    }
  ]
})