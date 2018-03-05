const colors = require('colors')

const commands = {
  'help': {
    alias: ['-h', 'about'],
    action: showHelp
  },

  'build': {
    alias: ['-b', 'compile'],
    action: buildTheme
  }
}

/******************************/
/**      core functions      **/
/******************************/

function findCommand (cmd) {
  if (commands[cmd]) {
    return commands[cmd].action
  }

  for (const i in commands) {
    const command = commands[i]

    if (command.alias && command.alias.includes(cmd)) {
      return command.action
    }
  }

  return false
}

function buildTheme () {
  console.log('Compiling theme, this could take up to 60 seconds...'.bold)
}

function showHelp () {
  console.log(`Usage: themetool <command> \n`)
  console.log(`Where <command> is one of:
    help, init, create, delete, build, package, format
  `)
  console.log(`themetool init                  create new theme in current directory`)
  console.log(`themetool create <directory>    create new theme in <directory>`)
  console.log(`themetool build  <directory>    build and compile theme in <directory>`)
}

/******************************/
/**     export functions     **/
/******************************/

exports.findCommand = findCommand
exports.showHelp = showHelp
