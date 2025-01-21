import sharp from 'sharp'
import fs from 'fs'
const test = fs.readdirSync('pic','utf8')
for(let i=0; i<test.length; i++){
    sharp(`./Pic/${test[i]}`)
        .toFile(`./Output/result${i}.webp`, (err, info) => {
            if (err) throw err;
            console.log(`Converted to WebP: ${info.size} bytes`);
    });
}

