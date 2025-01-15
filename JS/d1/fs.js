import { dir } from 'console'
import fs from 'fs'
import { stringify } from 'querystring'
// for (let i = 0; i <= 10; i++) {
//   const zam = './logs/test' + i + '.txt'
//   fs.writeFile(zam, 'tested', (err, data) => {
//     if (err) {
//       console.log(err, data)
//       return;
//     }
//     console.log(data)
//   })
// }
// fs.readdir("./", 'utf8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })

// for (let k=0; k<=10; k++) {
//   let p = './logs/test' + k + '.txt'
//   fs.appendFileSync(p, '1', 'utf8')
//   const data = fs.readFileSync(p,'utf-8');
//   console.log(data)
// fs.writeFileSync(p, 'replaced', (err) => {
//   if(err){
//     console.log(err,data);
//   }else{
//     console.log(data);
//   }
// })
// }

// const read = fs.readFileSync("./Student.json", 'utf8')
// console.log(read)

// let jsonparse = JSON.parse(read)
// let obj = {}
// console.log(jsonparse)
// obj['name'] = "jack"
// obj['seatNumber'] = "3c"

// jsonparse.push(obj)
// console.log(jsonparse);

// const result = jsonparse.filter(checkAdult);

// function checkAdult(a) {
//     return a.seatNumber != "3a";
// }
// const write = fs.writeFileSync("./student.json", JSON.stringify(result))


const deleteStudent = (b)=>{
    let data = JSON.parse(fs.readFileSync("Student.json", 'utf8'))
    const result = data.filter(IdCheck);
    function IdCheck(a) {
        return a.id != b;
    }
    fs.writeFileSync("Student.json", JSON.stringify(result))
}

// const read =  () => {
//     let data = fs.readFileSync("Student.json", 'utf8')
//     return JSON.parse(data)
// }

// console.log(read());
let student = {
    seat : "3c"
}
const upDate = (id,student) =>{
    let data = JSON.parse(fs.readFileSync("Student.json", 'utf8'))
    const modify = data.filter(IdCheck);
    function IdCheck(a) {
        return a.id == 2;
    }
    if(student.name){
        modify[0].name = student.name
    }
    if(student.seat){
        modify[0].seat = student.seat
    }
    
    const result = data.filter(IdNonCheck);
    function IdNonCheck(a) {
        return a.id != 2;
    }
    console.log(result);
    result.push(modify[0])
    fs.writeFileSync("Student.json", JSON.stringify(result))
}
// deleteStudent(2)
upDate(2,student)