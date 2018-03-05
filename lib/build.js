// convert bulk icons/psd to png
// requires imagemagick lib
// synchronous because im a lazy bastard

const fs = require('fs')
const path = require('path')
const proc = require('child_process')

const loc = {
  psd: path.join(__dirname, 'icons'),
  out: path.join(__dirname, 'output')
}

// cleansing
if (fs.existsSync(loc.out)) {
  proc.execSync(`rm -rf  ${loc.out}`)
}

fs.mkdirSync('output')

const dir = fs.readdirSync(loc.psd)

console.log(`Converting icons, this may take up to 60 seconds.`)

dir.forEach((file) => {
  const name = file.slice(0, -4)

  const psd = `${loc.psd}/${name}.psd[0]`
  const png = `${loc.out}/${name}.png`

  proc.execSync(`convert '${psd}' ${png}`)
})

console.log(`${dir.length} icons exported to ${loc.out}`)