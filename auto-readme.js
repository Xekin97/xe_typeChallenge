const fs = require("fs");
const { resolve } = require("path");

const ROOT_PATH = "https://github.com/Xekin97/xe_typeChallenge/tree/master";

const TITLES = ["Easy", "Medium", "Hard"];
const FINISHED_LENGTHS = [13, 82, 45];

function getFileTitle(filename, diffcult) {
	if (!filename) return "&nbsp;";
	return `[${filename.replace(
		".ts",
		""
	)}](${ROOT_PATH}/${diffcult}/${filename})`;
}

function getTableTitle(index, length) {
	return TITLES[index] + (length >= FINISHED_LENGTHS[index] ? "✅" : "");
}

async function main() {
	const ws = fs.createWriteStream(resolve(__dirname, "./README.md"));

	console.log("自动写入 readme 开始");

	const ezFiles = await fs.promises.readdir(resolve(__dirname, "./easy"));
	const mdFiles = await fs.promises.readdir(resolve(__dirname, "./medium"));
	const hdFiles = await fs.promises.readdir(resolve(__dirname, "./hard"));

	let content = `## Xekin's TypeChallenge\n${getTableTitle(
		0,
		ezFiles.length
	)}|${getTableTitle(1, mdFiles.length)}|${getTableTitle(
		2,
		hdFiles.length
	)}\n--|:--:|--:\n`;

	let len = Math.max(ezFiles.length, mdFiles.length, hdFiles.length);

	for (let i = 0; i < len; i++) {
		const row =
			getFileTitle(ezFiles[i], "easy") +
			"|" +
			getFileTitle(mdFiles[i], "medium") +
			"|" +
			getFileTitle(hdFiles[i], "hard") +
			"\n";
		content += row;
		console.log(row);
	}
	ws.write(content, "utf-8");

	console.log("自动写入 readme 成功");
}

main();
