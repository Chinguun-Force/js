

// for (let year = 2025; year <= 2030; year++) {
//     let date = new Date(year, 11, 31);
//     console.log(date.toDateString())
// }

// let days = { 
//     '0': 'Ням гараг',
//     '1': 'Даваа гараг',
//     '2': 'Мягмар гараг',
//     '3': 'Лхагва гараг',
//     '4': 'Пүрэв гараг',
//     '5': 'Баасан гараг',
//     '6': 'Бямба гараг'
// }
// console.log(Object.entries(days))
// let days1 

const nums = [3,3]
const target = 6
const obj = {}
for(let i = 0; i<nums.length; i++){
    if(obj.hasOwnProperty(nums[i])){
        console.log([obj[nums[i]],i])
    }
    else{
        obj[target-nums[i]] = i
    }
}