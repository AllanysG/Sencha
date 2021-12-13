Ext.define('MyClassicApp.view.layouts.Anchor',{
    extend:'Ext.panel.Panel',
    alias:'widget.anchor_layout',
    title:'Anchor Layout',
    // para estilo de navegador mais antigo
    layout:{
        type: 'anchor',
    },
    defaults:{
        margin:10,
        shadow: true,
        border:1
    },
    items:[{
        xtype:'panel',
        title:'Panel1 - 98% width 50% height',
        anchor: '98% 50%'
    },{
        xtype:'panel',
        anchor: '75% 15%',
        title:'Panel2 - 75% width 15% height'
    },{
        xtype:'panel',
        anchor: '35%',
        height: 100,
        title:'Panel3 - 35% width '
    }]

});