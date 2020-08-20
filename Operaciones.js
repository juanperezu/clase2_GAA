function suma(a,b){
return a+b;
}

function multiplicar(a,b){
    return a*b;

}

function restar(a,b){
    return a-b;
    
}

function  dividir1(a,b){
if(a==0 || b==0) {
    console.log('Error A  y B < > 0');
}
return a/b;
   
}
function dividir2(a,b){
    if(a==0 || b==0) {
        console.log('Error A  y B < > 0');
    }
    return a%b;
    }

// 1. Una que permitaa evaluar la siguiente expresión Algrebraica
// 1. 2x+ 3Z-(X/Z) + Y
// 2. 2x(3+Z)+ 5(X/Y) + 5



exports.dividir1=dividir1;
exports.dividir2=dividir2;
exports.suma=suma;
exports.restar=restar;
exports.multiplicar=multiplicar;
