const path = require('path')
const fs = require('fs')

// read file and replace by regex in every string
fs.readFile('./data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  // remove numbers
  const modifiedData = data.replace(/^\d+\. /gm, '')

  console.log(modifiedData)

  fs.writeFile('./new-data.txt', modifiedData, { flag: 'a+' }, err => {})

})
