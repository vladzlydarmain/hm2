let readline = require("readline");
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Enter coefficient - a ", (a) => {
    rl.question("Enter coefficient - b ", (b) => {
        rl.question("Enter coefficient - c ", (c) => {
            a = parseFloat(a);
            b = parseFloat(b);
            c = parseFloat(c);
            let d = b**2 - 4*a*c;
            if (d < 0){
                console.log("Коренів немає")
            } else if(d == 0){
                console.log(-b/(2*a))
            } else if(d > 0){
                let x1 = (-b-Math.sqrt(d))/(2*a)
                let x2 = (-b+Math.sqrt(d))/(2*a)
                console.log(`Перший корінь = ${x1}, другий корінь = ${x2}`)
            }
        })
    })
}) 