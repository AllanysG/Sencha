/*
    Definindo um Classe
*/
Ext.define('Home-Test.class_system.Pessoa',{
alternateClassName:['Person','Persona'],
 config:{
    /*
    //setName()
    //getName()
    //applyName()
    //updateName()
    */
   
   name:'Allanys Gasparotto',
   city: 'Hotolândia',
   age:0
 },
 constructor:function(config){
    this.initConfig(config);
 },
 applyCity:function(newValue,oldValue){
    //só altera a cidade se for maior que 18 anos
    if (this.getAge()>= 18){
       return newValue; 
    }
    return 'Cidade Natal';
 } ,
 updateCity:function(oldValue,newValue){
   //só altera a cidade se for maior que 18 anos
   this.jaMudouDeCidade= true;
} ,
 myMethodHere:function(){
 } ,
 conversar:function(){
    console.log('Pessoa Conversando...');
 }  
});
/*
//var pessoa = Ext.create('Home-Test.class_system.Pessoa',{
   // minhaConfig:'teste',
   // minhaConfigBoolean:True
//},function (){
    //console.log('Objeto Criado')
//});
//var pessoa2 = Ext.create('Person',{
   // minhaConfig:'teste',
   // minhaConfigBoolean:True
//});
//var pessoa3 = new Person({
  //  minhaConfig:'teste',
  //  minhaConfigBoolean:True
//});
//var pessoa4 = Person.create({
   // minhaConfig:'teste',
    //minhaConfigBoolean:True
//});*/