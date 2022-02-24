function alwaysHungry(arr) {
    var alimentado=false;
    arr.forEach(element => {
        if(element=="comida")
        {
            console.log("Delicioso");
            alimentado=true;
        }
    });
    if(alimentado==false)
    {
        console.log("Tengo Hambre");
    }
}

alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

function highPass(arr, cutoff) {
    var filteredArr = [];
    arr.forEach(function(num){
        if(num>cutoff)
        {
            filteredArr.push(num);
        }
    });
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

function betterThanAverage(arr) {
    var sum = 0;
        arr.forEach(function(num){
            sum +=num;
        });
    var count = 0
    arr.forEach(function(num){
        if(num>(sum/arr.length))
        {
            count++;
        }
    });  
    // cuenmta cuánmtas variables son mayores que el promedio
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

function reverse(arr) {
    aux=[];
    arr.forEach(function(num,i){
        aux.push(arr[arr.length-i-1])
    });

    return aux;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]


function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];

    for(x=0;x<n-2;x++)
    {
        fibArr.push(fibArr[fibArr.length-1]+fibArr[fibArr.length-2]);
    }
    
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]