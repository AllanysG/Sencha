Ext.define('Home-Test.class_system.Cantor',{
    extend:'Home-Test.class_system.Pessoa',
    mixins:{
        musico: 'Home-Test.class_system.Musico',
        passaro: 'Home-Test.class_system.Passaro'
},
/*
    extend:'Home-Test.class_system.Pessoa',
    mixins:['Home-Test.class_system.Musico','Home-Test.class_system.Passaro'],
*/
    //extend:'Person',
    name:'Ateez',
    city: 'Coréia',
    cantar: function (){
        console.log('Cantor está Cantando....');
    }
});