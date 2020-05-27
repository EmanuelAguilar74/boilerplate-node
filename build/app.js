import * as fs from 'fs/promises';
fs.readFile('files/test.txt', { encoding: 'utf-8' }).then((data) => {
    console.log({ data });
});
