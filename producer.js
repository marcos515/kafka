var readline = require('readline');
const kafka = require("./kafka")
const config = require("./config.json")
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
{
    (async () => {
        while (true) {
            try {
                await kafka.producer(config.brockerHost, config.topic, await question())
            } catch (error) {
                console.log(error)
            }


        }
    })()
}

function question() {
    return new Promise((resolve, reject) => {
        leitor.question("Escreva a mesnages a ser produzida:\n", function (answer) {
            resolve(answer);
        });
    })

}