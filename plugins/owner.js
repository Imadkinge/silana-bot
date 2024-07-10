import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\nwa.me/212684278994
*instagram:*\https://www.instagram.com/chatbi.imad?igshid=YTQwZjQ0NmI0OA==

*youtube:*\nchatbiimad3@gmail.com

*facebook page:*\nhttps://www.facebook.com/imad.chatbi.16

*script bot :* https://github.com/Imadkinge/silana-bot

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
