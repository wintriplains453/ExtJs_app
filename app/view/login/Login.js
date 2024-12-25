Ext.define('productApp.view.login.Login', {
  extend: 'Ext.window.Window',
  xtype: 'login',

  requires: [
    'productApp.view.login.LoginController',
    'Ext.window.Window'
  ],

  controller: 'login',
  bodyPadding: 10,
  title: 'Авторизация',
  closable: false,
  autoShow: true,

  items: {
    xtype: 'form',
    reference: 'form',
    items: [
      {
        xtype: 'textfield',
        name: 'username',
        fieldLabel: 'Логин',
        allowBlank: false
      },
      {
        xtype: 'textfield',
        name: 'password',
        inputType: 'password',
        fieldLabel: 'Пароль',
        allowBlank: false
      },
      {
        xtype: 'displayfield',
        hideEmptyLabel: false,
        value: 'Заполните форму'
      }
    ],
    buttons: [{
      text: 'Войти',
      formBind: true,
      listeners: {
        click: 'onLoginClick'
      }
    }]
  }
})