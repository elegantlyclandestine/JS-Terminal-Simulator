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
                }
            }, null, 2))
    }
}