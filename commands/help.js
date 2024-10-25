function help() {
    let helpMenu = []
    helpMenu.push('==========================================')
    helpMenu.push('AVAILABLE COMMANDS\n')
    for (let index = 0; index < Object.keys(availableCommands).length; index++) {
        const element = Object.keys(availableCommands)[index];
        helpMenu.push(element +'    '+availableCommands[Object.keys(availableCommands)[index]].about)
    }
    helpMenu.push('==========================================')
    helpMenu.forEach(element => {
        console.log(element)
    });
}

module.exports.help = { help}