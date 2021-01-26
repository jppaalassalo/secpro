const url = require('url');
const myUrl = new URL('https://moodle.tuni.fi/course/view.php?id=17136');
console.log(myUrl.href);
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));