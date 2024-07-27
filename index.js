const fs = require('fs')
const path = require('path')

const template = fs.readFileSync(
  path.join(__dirname, './template.bat'),
  'utf-8'
)

const commands = {
  w: 'nodemon',
  n: 'node --no-warnings',
  nw: 'node --no-warnings --watch',
  rp: 'run-p --silent',
  rs: 'run-s --silent',
}

for (const key in commands) {
  const command = commands[key]
  const batchFile = template.replace('::<<<COMMAND>>>', command)
  fs.writeFileSync(path.join(__dirname, `./batch/${key}.bat`), batchFile)
  console.log(`DONE: ${key}`)
}
