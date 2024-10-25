const fs = require('fs')
function load_commands() {
    if(!fs.existsSync("./resources/commands.json")){
        if(fs.existsSync("./resources/commands.json")){
            fs.mkdirSync("./resources/")
        }
        fs.writeFileSync("./resources/commands.json", JSON.stringify(
            {
                "help":{
                    "about":"View this help menu.",
                    "code":"N/A"
                },
                "exit":{
                    "about":"Exit the command line mode.",
                    "code":"N/A"
                },
                "makefile":{
                    "about":"Create a new file.",
                    "code":"N/A"
                },
                "makefolder":{
                    "about":"Create a new folder.",
                    "code":"N/A"
                },
                "removefile":{
                    "about":"Remove a file.",
                    "code":"N/A"
                },
                "removefolder":{
                    "about":"Remove a folder.",
                    "code":"N/A"
                },
                "list":{
                    "about":"List files and folders.",
                    "code":"N/A"
                },
                "readfile":{
                    "about":"Read a file.",
                    "code":"N/A"
                },
                "writefile":{
                    "about":"Write to a file.",
                    "code":""
                }
            }, null, 2))
    }
}

module.exports = { load_commands }