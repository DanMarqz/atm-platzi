var dinero,
  resultado = document.getElementById( "resultado" ),
  b = document.getElementById('extraer'),
  papeles = 0,
  div = 0,
  entregado = [],
  caja = [];

class Billete{
  constructor(v, c){
    this.valor = v;
    this.cantidad = c;
  }
}

caja.push( new Billete( 100, 10) );
caja.push( new Billete( 50, 20) );
caja.push( new Billete( 20, 60) );
caja.push( new Billete( 10, 40) );
caja.push( new Billete( 5, 30) );
caja.push( new Billete( 1, 50) );


function entregarDinero(){
  var t = document.getElementById( "dinero" );
  dinero = t.value ;

  for( var bi of caja ){
    if( dinero > 0){
      div = Math.floor( dinero / bi.valor );

      div > bi.cantidad ? papeles = bi.cantidad : papeles = div;

      entregado.push( new Billete( bi.valor , papeles ))
      dinero = dinero - ( bi.valor * papeles );     
    }
  }
  
  if( dinero > 0 ){
    resultado.innerHTML = 'Transacción no completada' ;
  } else{
    for( var e of entregado ){
      if( e.cantidad > 0 ){
        resultado.innerHTML += '<br>' + e.cantidad + ' billetes de $' + e.valor;
      }
    }
  }
  
  
}

b.addEventListener('click', entregarDinero)