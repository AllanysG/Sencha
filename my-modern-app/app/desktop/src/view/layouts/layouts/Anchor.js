Ext.define('MyModernApp.view.layouts.Anchor',{
    extend:'Ext.Panel',
    alias:'widget.anchor_layout',
    title:'Anchor Layout',
    defaults:{
        margin:10,
        shadow: true,
        border:1
    },
    items:[{
        xtype:'panel',
        title:'Panel1 - 98% width 50% height',
        width: '90%',
        height: '50%',
    },{
        xtype:'panel',
        width: '75%',
        height: '15%',
        title:'Panel2 - 75% width 15% height'
    },{
        xtype:'panel',
        width: '35%',
        height: 100,
        title:'Panel3 - 35% width '
    }]

});