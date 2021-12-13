Ext.define('Home-Test.class_system.StaticExample',{
    extend:'Person',
    
    statics:{test1: 'valor', teste2: true},

    private:{
        privateMethodHere:function(){
            console.log('Estado privado aqui');
        }
    }
});
