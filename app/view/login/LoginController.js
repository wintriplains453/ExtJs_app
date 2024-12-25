Ext.define('productApp.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',

  onLoginClick: function() {
    var form = this.getView().down('form')

    if(form.isValid()) {
      let values = form.getValues() 

      if(values.username !== 'admin' && values.password !== 'padmin') return 
    }
    
    localStorage.setItem("productLogged", true);

    this.getView().destroy();
    Ext.create({
      xtype: 'app-main'
    })
  }
})