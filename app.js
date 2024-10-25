const fs = require('fs');
const readline = require("readline");
const { load_commands } = require('./modules/command_handler.js');
const { terminal } = require('./modules/terminal.js');
const rl = readline.createInterface({input: process.stdin,output: process.stdout});
fetch = require('node-fetch');
const connect = async (url) => {
    try{
console.log(`Connecting to "${url}"...`)
  const response = await fetch(url)
  return true
}catch(err){
    console.log(err)
    return null
}
}

load_commands();
terminal();