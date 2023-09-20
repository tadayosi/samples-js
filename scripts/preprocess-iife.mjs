import fs from 'fs'

fs.mkdir('./temp', () => {})

fs.readdir('src/types', (err, files) => {
  files.forEach(file => {
    if (file.endsWith('test.js')) {
      return
    }
    console.log('Process', file)
    const source = fs.readFileSync(`src/types/${file}`, 'utf-8')
    const processed = source.split('// preprocess-iife: BEGIN')[1]?.split('// preprocess-iife: END')[0] ?? source
    fs.writeFileSync(`temp/${file}`, processed)
  })
})
