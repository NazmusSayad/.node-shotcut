const fs = require('fs')
const path = require('path')

const template = fs.readFileSync(
  path.join(__dirname, './template.bat'),
  'utf-8'
)

const commands = {
  n: 'ts-node-dev --quiet',
  nw: 'ts-node-dev --respawn --quiet --rs --clear',
}

for (const key in commands) {
  const command = commands[key]
  const batchFile = template.replace('::<<<COMMAND>>>', command)
  fs.writeFileSync(path.join(__dirname, `./batch/${key}.bat`), batchFile)
  console.log(`DONE: ${key}`)
}
