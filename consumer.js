const kafka = require("./kafka")
var config = require("./config.json")
var consumer = kafka.consumer(config.brockerHost, config.topic)
var consumerClient = consumer[0]
var consumerMsg = consumer[1]

consumerMsg.on("message", async (message) => {
    console.log(message)
})
consumerMsg.on("error", async (err) => {
    console.log("Consumer error: " + err.message)
})
consumerClient.on("error", async (err) => {
    console.log("Consumer error: " + err.message)
})
consumerClient.on("ready", async (err) => {
    console.log("Consumer conectado.")
})
consumerClient.on("timeout", ()=>{
    console.log("Timeout")
})