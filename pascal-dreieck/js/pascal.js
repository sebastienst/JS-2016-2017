function computePascalTriangle(elementID){
    var zeilen = document.getElementById(elementID).value;
    var i, j;
    var result = [];

    for(i = 0; i <= zeilen; i++){
        result[i] = [];
        result[i][0] = 1;
    }

    for(i = 1; i <= zeilen; i++){
        for(j = 1; j < i; j++){
            result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
        }

        result[i][j] = 1;
    }
    return(result);
}

function printPascal(pascalResult, printWhere){
    var i, j;
    var pascalTable;
    document.getElementById(printWhere).innerHTML = "";
    pascalTable += '<table>';
    for(i in pascalTable){
        pascalTable += '<tr>';
        for(j in pascalResult[i]){
            pascalTable += '<td>' + pascalResult[i][j] +'</td>';
        }
        pascalTable += '</tr>';
    }
    pascalTable += '</table>';

    document.getElementById(printWhere).innerHTML += (pascalTable);
}

function doIt(){
    toPrint = computePascalTriangle("zeilen");
    printPascal(toPrint, "pascal");
}
