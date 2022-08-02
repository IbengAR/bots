const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:1.1.0\n' 
                    + 'N:;iBeng;;;'
                    + 'FN:iBeng\n' // full name
                    + 'ORG:iBeng;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6281257172080:+62 812-5717-2080 \n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Ilman', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
