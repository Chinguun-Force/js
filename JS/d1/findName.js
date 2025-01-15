// const names = [
//     "baljan",
//     "itgel",
//     "jamiyansuren",
//     "chingun",
//     "telmuun",
//     "chinguun",
//     "nomi",
//     "aygul",
//     "behbat",
//     "narangerel",
//     "oyunbat",
//     "turbat",
//     "baasandash",
//     "jargalsaihan",
//     "tugsbileg",
//     "huwituguldur",
//     "ursaa",
//     "ider",
//     "ariunjargal"
// ];
// var find = ""
// function criteria(find){
//     for(let i = 0; i<names.length; i++){
//         if(find == names[i]){
//             return i
//         }
//     }
// }
// console.log(criteria(ursaa))

// function compareNumbers(a, b) {
//     return a - b;
//   }
// var number = [5, 13, 9, 18, 2, 6]
// var sorted = number.sort(compareNumbers)
// var max = sorted[sorted.length-1]
// console.log(max)
// var numbers = [5, 5, 13, 9, 18, 2, 6, 100]
// var max = 0;
// var maxIndex = 0;
// for(let i=0; i < numbers.length; i++){
//     if(max<numbers[i]){
//         max = numbers[i];
//         maxIndex = i;
//     }
// }
// console.log(maxIndex)


// var a = 25;
// var b = 35;
// var c = 20;
// var d = 4

// console.log(Math.max(a,b,c))

// if(a>b&&c){
//     console.log(a)
// }else if(b>a&&c){
//     console.log(b)
// }else{
//     console.log(c)
// }
// if (a < b > c && d) {
//     console.log(b)
// } else if (c < b > a && d) {
//     console.log(b)
// } else if (d < b > c && a) {
//     console.log(b)
// } else if (b < a > c && d) {
//     console.log(a)
// } else if (c < a > b && d) {
//     console.log(a)
// } else if (d < a > c && b) {
//     console.log(a)
// } else if (a < c > b && d) {
//     console.log(c)
// } else if (b < c > a && d) {
//     console.log(c)
// } else if (d < c > b && a) {
//     console.log(c)
// } else if (a < d > c && b) {
//     console.log(d)
// } else if (c < d > a && b) {
//     console.log(d)
// } else if (b < d > c && a) {
//     console.log(d)
// }

// console.log(Math.min(Math.max(a, b, c), Math.max(d, b, c), Math.max(a, d, c), Math.max(a, b, d)))

// function LeapYear(a) {


//     if (a % 4 == 0 && a % 400 == 0 || a % 100 != 0) {
//         return console.log("this is leap year")
//     }
//         return console.log("this is not leap year")
// }
// LeapYear(2023)
// const nums = [2,7,7,15]
// for(let i=0; i<=nums.length; i++){
//     for(let j=i+1; j<=nums.length; j++){
//         if(nums[i]==nums[j]){
//             console.log(nums[i])
//         }
//     }
// }

// let result = 0
// for(let i=0; i<=1000; i++){
//     if(i%4==0){
//         result=result+i
//     }
// }
// console.log(result)

// let result = 0
// for(let i=3; i<=1000; i+=3){
//     result+=i
// }
// console.log(result)

// let a = 4;
// let b = 1000;
// let result = ((a+b)*(b/a))/2
// console.log(result)
