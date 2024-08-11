//UBAH OWNER, NAMA BOT WM DISINI
//UBAH PREMIUM DI FOLDER ALL/DATABASE
require("./all/module.js")
const version = require("@whiskeysockets/baileys/package.json").version
const { color } = require('./all/function')
global.owner = "2347078364918"
global.namaowner = "Feyi sola"
global.namaowner2 = "Feyi sola"
global.namabot = "Deltacrush" 
global.version = "5.1"
global.foother = "WhatsApp"
global.packname = "deltaNew"
global.author = "delta"
global.antibug = true
global.msg = {
"error": "\`bad connection\`",
"wait": "\`wait a minute\`", "group": "\`group only\`", 
"private": "\`private only\`", "admin": "\`admin only\`", 
"adminbot": "\`bot only\`", "owner": "\`owner only\`", 
"developer": "\`developer only\`"
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
