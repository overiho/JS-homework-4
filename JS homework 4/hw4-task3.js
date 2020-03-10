// Напишите свои функции-аналоги методов массивов:
// pop, 
// push, 
// shift, 
// unshift, 
// concat

//  используя только свойства массивов

function fill(i) {
    let tempArr = [];
    for (let a = 0; a < i; a++){
        tempArr[a] = Math.random();
        tempArr[a] = +tempArr[a].toFixed(3);
    }
    // console.log(tempArr);
    return tempArr;
}

//pop. Метод pop() удаляет последний элемент из массива и возвращает его значение.
//Последний элемент массива или undefined, если массив пуст.
console.log("__________pop()___________")
let arrPop = fill(4);
console.log(arrPop);
function likePop(arr) {
    let a;
    a = arr[arr.length - 1];
    delete arr[arr.length - 1];
    return a;
}
console.log(likePop(arrPop));
console.log(arrPop);

// Метод push() добавляет один или более элементов в конец массива 
// и возвращает новую длину массива.
// arr.push(element1, ..., elementN)
// Параметры
// Элементы, добавляемые в конец массива.
// Возвращаемое значение
// Новое значение свойства length объекта, для которого 
// был вызван данный метод.
console.log("_____________push()____________")
let arrPush = fill(4);
console.log(arrPush);
function likePush (arr, value) {
    arr[arr.length] = value;
    return arr.length;
}
console.log(likePush(arrPush, 0.111));
console.log(arrPush);
console.log(likePush(arrPush, 0.999));
console.log(arrPush);

// Метод shift() удаляет первый элемент из массива и возвращает его значение. 
// Этот метод изменяет длину массива.
// arr.shift()
console.log("______________shift()______________")
let arrShift = fill(4);
console.log(arrShift);
function likeShift(arr) {
    let a = arr[0]
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i+1]
    }
    arr.length--;
    return a;
}
console.log(likeShift(arrShift));
console.log(arrShift);

// Метод unshift() добавляет один или более элементов в начало массива 
// и возвращает новую длину массива.
// Возвращаемое значение
// Новое свойство length объекта, над которым был вызван метод unshift

console.log("______________unshift()_____________")
let arrUnshift = fill(4);
console.log(arrUnshift);
function likeUnshift (arr, value) {                                        // можно реализовать через остаточные параметры(...value для любого кол-ва значений)
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = value;
    return arr.length;
}
console.log(likeUnshift(arrUnshift, 0.222)); 
console.log(arrUnshift);
console.log(likeUnshift(arrUnshift, 0.444));
console.log(arrUnshift);

// Метод concat() возвращает новый массив, состоящий из массива, 
// на котором он был вызван, соединённого с другими массивами и/или 
// значениями, переданными в качестве аргументов.
// Возвращаемое значение
// Новый экземпляр Array.

console.log("___________concat()_____________")
let arrConcat = fill(3);
console.log(arrConcat);
let testArray = fill(2);
console.log(testArray);
let testValue = "concat";
function likeConcat (arr, value) { // можно реализовать через остаточные параметры(...value для любого кол-ва значений)
    let tempArray = [];
    if (Array.isArray(value)) { //Проверка типа данных value (Массив или нет) !! Через typeof не получилось
        tempArray.length = value.length + arr.length;
        for (let i = 0; i < arr.length; i++) {
            tempArray[i] = arr[i];
        }
        for(let i = arr.length; i < tempArray.length; i++) {
            tempArray[i] = value[i-arr.length];
        }
        return tempArray;
    } else {
        tempArray.length = arr.length;
        for (let i = 0; i < arr.length; i++) {
            tempArray[i] = arr[i];
        }
        tempArray[tempArray.length] = value;
        return tempArray;
    }
}
console.log(likeConcat(arrConcat, testArray));
console.log(likeConcat(arrConcat, testValue));
