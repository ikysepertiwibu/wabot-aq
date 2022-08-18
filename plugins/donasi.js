let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Theree 3 [089618728196]
│ • XL axiata [087892870587]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana : 089618738196
│ • Ovo / Gopay : 087892870587
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi🗿']
handler.tags = ['info☕']
handler.command = /^dona(te|si)$/i

module.exports = handler
