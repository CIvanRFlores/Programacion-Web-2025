function calcular(numero1, numero2, operacion){
    let resultado;
    numero1 = Number.parseInt(numero1);
    numero2 = Number.parseInt(numero2);

    if(isNaN(numero1) || isNaN(numero2)){
        alert("Error: Ingrese solamente digitos")
    }
    else{
        if(operacion === "sumar" || operacion === "restar" || operacion === "multiplicar" || operacion === "dividir"){
            switch(operacion){
                case "sumar" :
                    resultado = numero1 + numero2;
                    break;
                case "restar" :
                    resultado = numero1 - numero2;
                    break;
                case "multiplicar" :
                    resultado = numero1 * numero2;
                    break;                
                case "dividir" :
                    if(numero1 === 0 || numero2 === 0){
                        alert("Error: Dividir numeros mayores a 0")
                        return;
                    }
                    else{
                        resultado = numero1 / numero2;
                    }
                    break;
            }
            
            return alert("Resultado : " + resultado);
        }
        else{
            alert("Error: Operacion invalida")
        }
    }
}

let numero1 = (prompt("Ingresar primer numero: "));

let numero2 = (prompt("Ingresar segundo numero: "));

let operacion = prompt("Eliga una operacion (sumar, restar, multiplicar, dividir)")

calcular(numero1, numero2, operacion);