let productos=[
    {nombre:'Guitarra Clasica', precio:30.25, cantidad:20},
    {nombre:'Piano', precio:100.5, cantidad:5},
    {nombre:'Bateria', precio:200.2, cantidad:15},
    {nombre:'Flauta', precio:5.2, cantidad:35}
];

var totalFactura = 0;

for(let i=0; i<productos.length;i++)
{
    console.log(productos[i]);
    var p = productos[i];
    var total= p.precio * p.cantidad;
    totalFactura +=total;

    var elem=document.createElement('p');
    elem.textContent= p.nombre + ' $'+total;
    document.body.appendChild(elem);
}

var tot=document.createElement('p');
    tot.textContent= 'Total: $'+ totalFactura;
    document.body.appendChild(tot);