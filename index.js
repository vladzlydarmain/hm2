let readline = require("readline");
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Введіть довжину: ", (a) => {
    rl.question("Введіть ширину: ", (b) => {
        a = parseFloat(a)
        b = parseFloat(b)
        console.log(`P = ${2*(a+b)}`)
    })
})