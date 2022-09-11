const fs = require('fs')
const { resolve } = require('path')

const ROOT_PATH = 'https://github.com/Xekin97/xe_typeChallenge/tree/master'

async function main () {

    const ws = fs.createWriteStream(resolve(__dirname, './README.md'))

    let content = "## Xekin's TypeChallenge\n"

    console.log('自动写入 readme 开始')

    console.log('读取 easy 文件夹')

    const ezFiles = await fs.promises.readdir(resolve(__dirname, './easy'))

    content += "### Easy\n"
    ezFiles.forEach(filename => {
        content += `(${filename.replace('.ts', '')})[${ROOT_PATH}/${filename}]\n`
    })

    console.log('读取 medium 文件夹')

    const mdFiles = await fs.promises.readdir(resolve(__dirname, './medium'))
    content += "### Medium\n"
    mdFiles.forEach(filename => {
        content += `(${filename.replace('.ts', '')})[${ROOT_PATH}/${filename}]\n`
    })
    
    ws.write(content, "utf-8")

}

main();

