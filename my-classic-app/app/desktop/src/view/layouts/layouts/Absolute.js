Ext.define('MyClassicApp.view.layouts.Absolute',{
    extend:'Ext.Panel',
    alias:'widget.absolute_layout',
    title:'Exemplo Absolute Layout',
    layout:{
        type:'absolute'
    },
    default:{
        //configuração dos itens do conteiner 
        shadow:true,
        border:1,
        height:100,
        margin:10
    },
    items:[{
        xtype:'panel',
        x:100,
        y:100,
        title:'Panel 1 -x 100 y 100'
    },{
        xtype:'panel',
        x:150,
        y:268,
        title:'Panel 2 x 150 y260'
    },{
        xtype:'panel',
        x:300,
        y:400,
        title:'Panel 3 x 300 y 400'
    }]
});
