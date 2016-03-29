a = new Array();  
for (var b = 0; b < 10; b++) {  
  a[0] |= b;  // Funciona mesmo o índice 0 ainda não existindo
}
//vs.
a = new Array();  
a[0] = 0;  
for (var b = 0; b < 10; b++) {  
  a[0] |= b;  // Mesmo resultado, porém 2x mais rápido!
}