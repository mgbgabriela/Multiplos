/*
Múltiplos
• Cree un algoritmo que visualice los
números que son múltiplos de 2 o
de 3 que hay entre 1 y 100
• Tener en cuenta que hay números
que son múltiplos de 2 y de 3 al
mismo tiempo
• En dichos casos, solamente
indique el número una vez
*/
let nro: number;
let multiplos: string = "";

for (let nro: number = 1; nro <= 100; nro++) {
  if (nro % 2 == 0 || nro % 3 == 0) {
    multiplos = multiplos + nro + " ";
  }
}
console.log(multiplos);
