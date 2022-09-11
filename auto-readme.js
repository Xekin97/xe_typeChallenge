const fs = require('fs')
const { resolve } = require('path')

const ROOT_PATH = 'https://github.com/Xekin97/xe_typeChallenge/tree/master'

function getFileTitle (filename, diffcult) {
    if (!filename) return ''
    return `[${filename.replace('.ts', '')}](${ROOT_PATH}/${diffcult}/${filename})`
}


async function main () {

    const ws = fs.createWriteStream(resolve(__dirname, './README.md'))

    let content = "## Xekin's TypeChallenge\nEasy|Medium|Hard\n--|:--:|--:\n"

    console.log('自动写入 readme 开始')

    const ezFiles = await fs.promises.readdir(resolve(__dirname, './easy'))
    const mdFiles = await fs.promises.readdir(resolve(__dirname, './medium'))
    const hdFiles = await fs.promises.readdir(resolve(__dirname, './hard'))

    let len = Math.max(ezFiles.length, mdFiles.length, hdFiles.length)

    for (let i = 0; i < len; i++) {
        content += getFileTitle(ezFiles[i], 'easy') + '|' + getFileTitle(mdFiles[i], 'medium') + '|' + getFileTitle(hdFiles[i], 'hard') + '\n'
    }
    ws.write(content, "utf-8")

    console.log('自动写入 readme 成功')

}

main();

