var today=new Date();
var hourNow=today.getHours();
var saludo;
var nombre=" Madelin";

console.log(today);
console.log(hourNow);

function saludo(nom){
    if(hourNow>18){
        saludo="Buenas Noches";
    }else if(hourNow>12){
        saludo="Buenas Tardes";
    }else if(hourNow>0){
        saludo="Buenos D&iacute;as";
    }else{
        saludo="Bienvenido!!";
    }
    
    document.write('<h3>'+saludo+ nom+ '</h3>');
}
saludo(' Madelin');