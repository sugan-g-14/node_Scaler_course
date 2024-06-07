const fs = require('fs')

// reading a file

// let fileContent = fs.readFileSync('f1.txt')

// console.log('' +fileContent)


//writing in a file

// fs.writeFileSync('f1.txt','this is file f1')
// console.log('file has been written')
// let updatedContent = fs.readFileSync('f1.txt')
// console.log('' +updatedContent)

// let check=fs.appendFileSync('f1.txt','hello from f1')

// console.log('content is appended')
// fileContent = fs.readFileSync('f1.txt')

// console.log(''+fileContent)
// console.log(''+ check)
// fs.unlinkSync('f1.txt')
// console.log('f1 is deleted')

//create a directory
// fs.mkdirSync('mydirectory')

// check the content inside of a directory

// let folderPath = 'C:\\Users\\surya\\OneDrive\\Desktop\\Node_scaler\\Node moudule system\\mydirectory'
// let folderContent = fs.readdirSync(folderPath)
// console.log('folder content', folderContent)


//to delete a folder/ directory
// fs.rmdirSync('mydirectory')
// console.log('file has been deleted')