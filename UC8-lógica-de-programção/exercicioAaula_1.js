var listaDePecas = ["Amortecedor","Motor","Filtro de ar"]

let peso = 100
if (peso < 100){
    console.log("A peça deve pesar no minimo 100g")
    }else{
        console.log("A peça possui peso adequado")
    }

if (listaDePecas.length < 10){
    console.log("Ainda tem espaço")
    }else{
            console.log("não tem mais espaço")
        }

let nomePeca = "disco de freio"
if(nomePeca.length > 3){
    console.log("Nome da peça está adequado")

}else if(nomePeca.length == 0) {
    console.log("Nome da peça não pode ser vazio")

}else{
    console.log("Nome da peça precisa ter no minimo 3 caracteres")
}



