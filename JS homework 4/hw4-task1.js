// Find a Chair
// So you've found a meeting room - phew! You arrive there ready to 
// present, and find that someone has taken one or more of the chairs!! 
// You need to find some quick.... check all the other meeting rooms 
// to see if all of the chairs are in use.
// Your meeting room can take up to 8 chairs. need will tell you 
// how many have been taken. You need to find that many.
// Find the spare chairs from the array of meeting rooms. Each 
// meeting room array will have the number of occupants as a string. 
// Each occupant is represented by 'X'. The room array will also 
// have an integer telling you how many chairs there are in the room.
// You should return an array of integers that shows how many 
// chairs you take from each room in order, up until you have 
// the required amount.
// example: [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]]
//  when you need 4 chairs:
// result -- > [0, 1, 3] (no chairs free in room 0, take 1 from room 1, 
//     take 3 from room 2. No need to consider room 4 as you 
//     have your 4 chairs already.
// If you need no chairs, return 'Game On'. 
// If there aren't enough spare chairs available, return 'Not enough!'
// Examples:
// meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4) ---> [0, 1, 3]
// meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5) ---> [0, 0, 1, 2, 2]
// meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0) ---> 'Game On'


let room0 = ['XXX', 5];
let room1 = ["XXXXX", 5];
let room2 = ["XXXXXX", 9];
let room3 = ["X", 8];
let room4 = ["XXXXX", 14]
// ... //
let roomN = ["XXXXXXXXXXXXXXXXXXXXXX", 50];

function chairs(quan, ...arrs) {
    let sum = 0;
    let chair = '1';
    let tempArray = new Array(arrs.length); //массив, который мы будем возвращать
    //quan - число стульев, которое нам требуется. Х в массиве - сколько стульев занятно, числовое значение - общее кол-во стульев в комнате

    for (let i = 0; i < arrs.length; i++) {
        for (let j = 0; j < 2; j++) {
            if (j % 2 == 1) {      //элементы формата [i]['нечетное'] - число
                sum += arrs[i][j]; //общее кол-во стульев 
            } else {
                chair += arrs[i][j] //общее кол-во занятых стульев
            }
        }
    }
    if (sum - (chair.length-1) < quan) {
        // console.log("В офисе меньше стульев, чем вам требуется");
        return "В офисе меньше стульев, чем вам требуется";
    } else {
        let k = 0;
        for (let i = 0; i < arrs.length; i++) {
            for (let j = 0; j < 2; j++) {
                if (j % 2 == 1) {      //элементы формата [i]['нечетное'] - число
                    continue;
                } else {
                    let tempI = (arrs[i][j+1] - arrs[i][j].length);  //кол-во свободных стульев в комтане i
                    // console.log(tempI);
                    if (quan >= 0) {                                 //Прверка "Нужны ли еще стулья?"
                        if (tempI > quan) {                          //Поверка "В комнате больше свободных стулье, чем нужно"
                            tempI = quan;
                        }
                        quan = quan - tempI;
                        tempArray[k] = tempI;
                        k++;
                    }
                }
            }
        }
    }
    console.log(tempArray);
    return tempArray;
}
console.log(chairs(9, room0,room1,room2,room3));