Ext.define('Home-Test.class_system.Dialog',{
    extend:'Ext.Dialog',
    requires:[
        'Ext.field.text',
         Ext.field.Date,
        'Ext.Button'
    ],
    title:'Helo World',
    closable:true,
    width :500,
    height:300,

    items:[{
        xtype:'textfield',
        label:'Label 1'
    },{
        xtype:'datefield',
        label:'Date'
    },{
        xtype:'button',
        text:'My button'
    }]
});