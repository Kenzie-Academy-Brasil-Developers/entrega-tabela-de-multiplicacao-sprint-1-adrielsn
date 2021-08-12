  
function tabelaMultiplica(valor) { 
    
    let resultado = [];

    for (let linha = 0; linha <= valor; linha++) {
        resultado[linha] = []
        for (let coluna = 0; coluna <= valor; coluna++) {
            resultado[linha].push(linha*coluna)
        }
    }
    console.table(resultado)
    return resultado
}