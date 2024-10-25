const { help } = require("./help.js")

const cmds = Object.freeze ({
    HELP: 0,
    EXIT: 1 
})

function process_command(command) {
    switch (command) {
        case cmds.HELP:
            help()
            break;
        case cmds.EXIT:
            process.exit()
            break;
        default:
            console.log("Command not found!")
    }
}

module.exports = { process_command }