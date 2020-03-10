let array = ['Яблоко', 'Банан', 'Ананас'];

// console.log(array.map(el=>el[0])); //"Я", "Б", "А"
// console.log(array.filter(el=>el[0].toLowerCase() ==  "a"));
// console.log(array.forEach((el,i,arr) => arr[i] = `${i + 1} : ${el};`)); //1: Яблоко;, 2: Банан;, 3: Ананас;

// let arr = ['Яблоко', 'Банан', 'Ананас'];
// arr.forEach((el, i, arr) => arr[i] = ` ${i + 1}: ${el};`);
// alert(arr);

// function likeMap (arr, i) {
//     let tempArray = new Array(arr.length);
//     console.log(tempArray);
//     let b = 0 //переменная для индекса tempArray[]
//     tempArray.length = arr.length;
//     // console.log(tempArray);
//     for (let value of arr) {
//         tempArray[b] = value[i - 1];
//         b++;
//     }
//     return tempArray;
// }
// console.log(likeMap(array, 1));



//map
console.log(array.reduce(function(accumulator, currentValue, index) {
    // console.log("acc is: "+accumulator);
    // console.log("curr is: "+currentValue);
    return Array((index === 0) ? String(accumulator[0] + " " + currentValue[0]) : Array(accumulator[0] + " " + currentValue[0]));
  }));



//forEach
console.log(array.reduce(function(accumulator, currentValue, index) {
//     console.log("acc is: "+accumulator);
//  console.log("curr is: "+currentValue);
return(accumulator + " " + (index+1) + ": " +currentValue).slice(-28)  //slice - что бы убрать '0' из строки

}, 0))