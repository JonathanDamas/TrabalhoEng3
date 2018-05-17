start();

function start(){
    var button = document.getElementById("btnCadEquip")
    button.onclick = function(){
        cadastroEquip();
    }
}

function cadastroEquip(){

    var inputCodigo = document.getElementById("fieldCodigo")
    var inputFabricante = document.getElementById("fieldFabricante")
    var inputModelo = document.getElementById("fieldModelo")
    var inputVeiculo = document.getElementById("fieldVeiculo")
    var inputQuantidade = document.getElementById("fieldQuantidade")

    if(isValidField(inputCodigo)&&isValidField(inputFabricante)&&isValidField(inputModelo)&&
    isValidField(inputVeiculo)&&isValidField(inputQuantidade)) {
        NovoCadastro(inputCodigo,inputFabricante,inputModelo,inputVeiculo,inputQuantidade)
    }else{
        alert('Preencha todos os campos!');
    }
    

}
function isValidField(field) {
    return field.value.trim() != '';
}
function NovoCadastro(inputCodigo,inputFabricante,inputModelo,inputVeiculo,inputQuantidade){
    var tr = createLine()
    var tdCodigo = createTableData(inputCodigo.value)
    var tdFabricante = createTableData(inputFabricante.value)
    var tdModelo = createTableData(inputModelo,value)
    var tdVeiculo = createTableData(inputVeiculo.value)
    var tdQuantidade = createTableData(inputQuantidade.value)

    tr.appendChild(tdCodigo)
    tr.appendChild(tdFabricante)
    tr.appendChild(tdModelo)
    tr.appendChild(tdVeiculo)
    tr.appendChild(tdQuantidade)

    var table = document.getElementById("tableEquip")
    table.appendChild(tr)

}

function createLine() {
    var tr = document.createElement('tr');
    return tr;
}

function createTableData(content) {
    var td = document.createElement('td');
    td.innerHTML = content;
    return td;
}