/* ЗАВДАННЯ 1 */

const arr = [4, 4, 8, 3, 3, 3, 2, 4, 4];

// 1. Вивести кожен елемент
console.log("Усі елементи:");
arr.forEach(num => console.log(num));

// 2. Перші 3 елементи
console.log("Перші 3 елементи:", arr.slice(0, 3));

// 3. Сума всіх елементів
const totalSum = arr.reduce((sum, val) => sum + val, 0);
console.log("Сума всіх:", totalSum);

// 4. Сума без 4
const sumWithout4 = arr.reduce((sum, val) => val !== 4 ? sum + val : sum, 0);
console.log("Сума без 4:", sumWithout4);

/* ЗАВДАННЯ 2 */

const fs = require('fs');

fs.readFile('list.json', 'utf8', (err, data) => {
    if (err) throw err;

    const json = JSON.parse(data);

    if (!Array.isArray(json.lists)) {
        console.log("No 'lists' array found");
        return;
    }

    console.log("Space ID and Name for each list:");
    json.lists.forEach(list => {
        const space = list.space;
        if (space) {
            console.log(`Space ID: ${space.id}, Space Name: ${space.name}`);
        }
    });
});



