// Tic-Tac-Toe Checker
// If we were to set up a Tic-Tac-Toe game, we would want 
// to know whether the board's current state is solved, wouldn't we? 
// Our goal is to create a function that will check that for us!
// Assume that the board comes in the form of a 3x3 array, where 
// the value is 0 if a spot is empty, 1 if it is an "X", or 
// 2 if it is an "O", like so:
// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]

// We want our function to return:
// -1 if the board is not yet finished (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the 
// context of a game of Tic-Tac-Toe.

function getRandomIntInclusive(min, max) { //Получение случайного целого числа в заданном интервале, включительно
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
function fitArray() {
    let tempArr = [];
    for (let i = 0; i < 3; i++) {
    tempArr[i] = getRandomIntInclusive(0, 2);
    }
    return tempArr;
}
let ticTacToe = new Array(fitArray(), fitArray(), fitArray()); //случайное заполнение массива 3х3
console.log(ticTacToe);
function result(arr) {
    let result;
    switch (true) {
        case (arr[0][0] == 1 && arr[1][1] == 1 && arr[2][2] == 1 || //
            arr[0][2] == 1 && arr[1][1] == 1 && arr[2][0] == 1 ||   // 2 варианта по диагонали
            arr[0][0] == 1 && arr[1][0] == 1 && arr[2][0] == 1 ||   //
            arr[0][1] == 1 && arr[1][1] == 1 && arr[2][1] == 1 ||   //
            arr[0][2] == 1 && arr[1][2] == 1 && arr[2][2] == 1 ||   //  3 варианта по вертикали
            arr[0][0] == 1 && arr[0][1] == 1 && arr[0][2] == 1 ||   //
            arr[1][0] == 1 && arr[1][1] == 1 && arr[1][2] == 1 ||   //
            arr[2][0] == 1 && arr[2][1] == 1 && arr[2][2] == 1 ): { // 3 варианта по горизонтали
                result = "Победа ноликов";
                break;
            }
        case (arr[0][0] == 2 && arr[1][1] == 2 && arr[2][2] == 2 || //
            arr[0][2] == 2 && arr[1][1] == 2 && arr[2][0] == 2 ||   // 2 варианта по диагонали
            arr[0][0] == 2 && arr[1][0] == 2 && arr[2][0] == 2 ||   //
            arr[0][1] == 2 && arr[1][1] == 2 && arr[2][1] == 2 ||   //
            arr[0][2] == 2 && arr[1][2] == 2 && arr[2][2] == 2 ||   //  3 варианта по вертикали
            arr[0][0] == 2 && arr[0][1] == 2 && arr[0][2] == 2 ||   //
            arr[1][0] == 2 && arr[1][1] == 2 && arr[1][2] == 2 ||   //
            arr[2][0] == 2 && arr[2][1] == 2 && arr[2][2] == 2 ): {
                result = "Победа крестиков";
                break;
            }
        default: { 
            result = "Ничья"             //цикл for должен находиться внутри switch, а не за его пределами, 
            for (let i = 0; i < 3; i++){ //так как партия может быть окончена победой и с пустыми полями на поле
                for (let j = 0; j < 3; j++){  
                    if (arr[i][j] == 0){
                        result = "Партия не окончена";
                        break;
                    }  
                }
            }
            break;
        }
        
    }
    return result;
}
console.log(result(ticTacToe)); // !!!на практике при случайном заполении массива 0 есть почти всегда. Для проверки кода стОит поменять параметры случайного заполениня в строке 28
