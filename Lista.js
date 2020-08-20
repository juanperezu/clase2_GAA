const ListaNUmeros=[2,4,6,8,10];
const nuevaLista=[];
/*
for(i in ListaNUmeros){
console.log(ListaNUmeros[i]);
nuevaLista.push(ListaNUmeros[i]);
}// fin para i
*/
function duplicar(lista){
if(lista[0]==2) return console.log([[0]*2])
else duplicar([nuevaLista[1]*2]);
}

duplicar(ListaNUmeros);

console.log(nuevaLista);
console.log(ListaNUmeros);

