const fs = require('fs')
const path = require('path')

const template = fs.readFileSync(
  path.join(__dirname, './template.bat'),
  'utf-8'
)

const commands = {
  n: 'ts-node-dev --quiet',
  nw: 'ts-node-dev --respawn --quiet --rs --clear',
  rp: 'npm-run-all -r false -p',
  rs: 'npm-run-all -r false -s',
  rc: 'concurrently -p {name} -t HH:mm:ss.SSS -l 99999',
}

for (const key in commands) {
  const command = commands[key]
  const batchFile = template.replace('::<<<COMMAND>>>', command)
  fs.writeFileSync(path.join(__dirname, `./batch/${key}.bat`), batchFile)
  console.log(`DONE: ${key}`)
}
