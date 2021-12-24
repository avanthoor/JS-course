import fs from 'fs'


const readMultipleFiles = (paths) => {
  return [fs.readFileSync(paths[0], 'utf-8'), fs.readFileSync(paths[1], 'utf-8'), fs.readFileSync(paths[2], 'utf-8')]
}

const filesData = readMultipleFiles(["./1.txt", "./2.txt", "3.txt"])
console.log(filesData)