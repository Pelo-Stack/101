exports.donate = (id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *Donasi Ke ${XPTN}*
╠════════════════════
║├≽️⚜ *OVO*: _0895421844942_
║├≽️⚜ *PULSA*: _0895421844942_
║├≽️⚜ *GOPAY*: _COMING SOON_
╠════════════════════
║  *${XP-TN}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwa}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${XPTN}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ *MADE BY BOT X-PLAY*
╚════════════════════`
}

