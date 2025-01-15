// const numbers = [19, 9, 14, 2, 49];
// for (let i = 0; i < numbers.length; i++) {
//     for (let k = i+1; k < numbers.length; k++) {
//         if (numbers[i] < numbers[k]) {
//             let r = numbers[i];
//             numbers[i] = numbers[k]
//             numbers[k] = r
//         }
//     }
// }
// console.log(numbers)

const weather = [{ "date": "2024-12-26", "temperature": { "current": -18.7, "min": -22.9, "max": -14.5 } }, { "date": "2024-12-27", "temperature": { "current": -19.2, "min": -24.0, "max": -14.4 } }, { "date": "2024-12-28", "temperature": { "current": -17.4, "min": -21.2, "max": -13.5 } }, { "date": "2024-12-29", "temperature": { "current": -16.4, "min": -22.0, "max": -10.7 } }, { "date": "2024-12-30", "temperature": { "current": -15.7, "min": -20.5, "max": -10.9 } }, { "date": "2024-12-31", "temperature": { "current": -17.4, "min": -22.7, "max": -12.1 } }, { "date": "2025-01-01", "temperature": { "current": -20.4, "min": -23.9, "max": -16.8 } }, { "date": "2025-01-02", "temperature": { "current": -20.1, "min": -25.8, "max": -14.3 } }, { "date": "2025-01-03", "temperature": { "current": -17.8, "min": -23.5, "max": -12.0 } }, { "date": "2025-01-04", "temperature": { "current": -18.3, "min": -22.4, "max": -14.2 } }, { "date": "2025-01-05", "temperature": { "current": -16.8, "min": -22.0, "max": -11.6 } }, { "date": "2025-01-06", "temperature": { "current": -16.6, "min": -22.4, "max": -10.7 } }, { "date": "2025-01-07", "temperature": { "current": -15.9, "min": -22.2, "max": -9.6 } }, { "date": "2025-01-08", "temperature": { "current": -15.6, "min": -21.9, "max": -9.3 } }]
for (let i = 0; i < weather.length; i++) {
    for (let j = i + 1; j < weather.length; j++) {
        if (weather[i].date < weather[j].date) {
            let r = weather[i];
            weather[i] = weather[j];
            weather[j] = r;
        }
    }
} console.log(weather)
