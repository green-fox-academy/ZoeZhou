/*exercise_11
function draw(){
    for (var i=0;i<12;i++){
        if ((i+1)%2===0){
            console.log(" % % % %");
        }else{
            console.log("% % % %");
        }
    }
}
draw();
*/
/*exercise_10
function draw(){
    for(var i=0;i<6;i++){
        if(i===0 || i===5){
            console.log("%%%%%%");
        }
        else{
            var str = "%    %";
            str = str.split('');
            str[i] = "%";
            console.log(str.join(''));
        }
    }
}
draw();
*/
/*exercise_09
function draw(){
    for(var i=0;i<6;i++){
        if(i===0 || i===5){
            console.log("%%%%%%");
        }
        else{
            console.log("%    %");
        }
    }
}
draw();
*/

/*exercise_08
// 0 -> [3] draw 1
// 1 -> [2] draw 3
// 2 -> [1] draw 5
// 3 -> [0] draw 7
// 4 -> [1] draw 5
// 5 -> [2] draw 3
// 6 -> [3] draw 1
function draw(){
    for(var i=0;i<7;i++){
        var stars, startPoint, str, j;
        if(i<4){
            stars = 2*i +1;
            startPoint = 3-i;
            str = [" "," "," "," "," "," "," "];
            for(j=startPoint;j<startPoint+stars;j++){
                str[j] = "*";
            }
            console.log(str.join(''));
        }
        else{
            stars = 5 - (i-4)*2;
            startPoint = i-3;
            str = [" "," "," "," "," "," "," "];
            for(j=startPoint;j<startPoint+stars;j++){
                str[j] = "*";
            }
            console.log(str.join(''));
        }
    }
}
draw();
*/

/*exercise_07
function draw() {
    for (var i = 0; i < 4; i++) {
        var stars, startPoint, str, j;
        stars = 2 * i + 1;
        startPoint = 3 - i;
        str = [" ", " ", " ", " ", " ", " ", " "];
        for (j = startPoint; j < startPoint + stars; j++) {
            str[j] = "*";
        }
        console.log(str.join(''));
    }
}
draw();
*/
/*exercise_06
function draw() {
    str = [" ", " ", " ", " "];
    for (var i = 0; i < 4; i++) {
        str[i] = "*";
        console.log(str.join(''));
    }
}
draw();
*/
/*exercise_05
function fizzBuzz() {
    for (var i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }else if(i % 5 === 0){
            console.log("Buzz");
        }else if(i % 3 === 0 ){
            console.log("Fizz");
        }else{
            console.log(i);
        }
    }
}
fizzBuzz();
*/
/*exercise_04
function multiplicationTable(num){
    for(var i = 0; i<10; i++){
        console.log( i+1 +" * 15 = "+ (i+1)*num);
    }
}
multiplicationTable(15)
*/
/*exercise_03
function printEven(){
    var res = [];
    for(var i=0; i<500; i++){
        if((i+1)%2===0){
            res.push(i+1);
        }
    }
    console.log(res);
}
printEven();
*/
/*exercise_02
function demo(){
    for(var i=0;i<100;i++){
        console.log("I like trains!" + (i+1));
    }
}
demo();
*/
//exercise_01
var a = 24;
var out = 0;
// if a is even increment out by one
if(a%2===0){
    out += 1;
}

console.log(out);

var b = 13;
var out2 = '';
// if b is between 10 and 20 set out2 to "Sweet!"
// if less than 10 set out2 to "More!",
// if more than 20 set out2 to "Less!"
if(b>20){
    out2 = "More!";
}else if(b>10){
    out2 = "Sweet!";
}else{
    out2 = "Less";
}

console.log(out2);

var c = 123;
var credits = 100;
var isBonus = false;
// if credits are at least 50,
// and isBonus is false decrement c by 2
// if credits are smaller than 50,
// and isBonus is false decrement c by 1
// if isBonus is true c should remain the same
if(credits>50 && !isBonus){
    c -=2;
}else if(credits < 50 && !isBonus){
    c -=1;
}

console.log(c);

var d = 8;
var time = 120;
var out3 = '';
// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"
if(d%4===0){
    if(time<=200){
        out3 = "check";
    }else if(time>200){
        out3 = "Time out";
    }else{
        out3 = "Run Forest Run!";
    }
}

console.log(out3);