Ext.define('Home-Test.class_system.Util',{
    alternateClassName: 'Util',
    singleton:true,
    alertaSucesso: function(){
        Ext.Msg.alert('Sucesso','Operação realizada com sussesso!!');
},
    log: function(msg){
    console.log(msg);
}
});
