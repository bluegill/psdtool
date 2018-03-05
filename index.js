#!/usr/bin/env node

const colors = require('colors')
const core = require('./lib/core')

const arg = process.argv.slice(2)
const cmd = arg[0]

if (!cmd) {
  core.showHelp()
}

const command = core.findCommand(cmd)

if (!command) {
  console.log(`Command '${cmd}' not found \n`.red.bold)

  core.showHelp()
}

command.apply(arg)
