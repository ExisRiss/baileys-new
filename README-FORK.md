# @sairidev/baileys-new — build yang bisa dipakai

Fork Baileys v7 (`@itsliaaa/baileys` 0.3.15 → nama `@sairidev/baileys-new`).
Paket npm aslinya **sudah dicabut** oleh tim keamanan npm (holding package
`0.0.1-security`) dan build GitHub-nya **gagal diimpor**. Repo ini memperbaiki
keduanya.

## Perbaikan di repo ini

| # | Masalah | Perbaikan |
|---|---|---|
| 1 | `lib/Utils/messages.js` & `lib/Utils/rich-message-utils.js` mengimpor `DONATE_URL` dari `Defaults/index.js`, tetapi konstanta itu **tidak pernah dideklarasikan** → seluruh paket gagal diimpor (`SyntaxError: does not provide an export named 'DONATE_URL'`) | `DONATE_URL` didaftarkan di `lib/Defaults/index.js` |
| 2 | `forwardedAiBotMessageInfo.botJid` **hard-coded** `'867051314767696@bot'` → semua bot tampil sebagai nomor pembuat paket | dinamis: `content.botJid` → `conn.user.id` → `global.conn.user.id` → cadangan; `:device` dibuang |
| 3 | `lib/index.js` menjalankan `console.clear()` + banner promosi setiap kali diimpor → menghapus log boot bot & mengotori log server | keduanya dibuang |
| 4 | `chalk` diimpor hanya untuk banner | impor dicabut |

## Pemakaian

```json
"@whiskeysockets/baileys": "npm:@sairidev/baileys-new@github:ExisRiss/baileys-new#<commit>"
```

atau tanpa alias:

```json
"@sairidev/baileys-new": "github:ExisRiss/baileys-new#<commit>"
```

## botJid dinamis — cara pakai

```js
import { prepareRichResponseMessage } from '@whiskeysockets/baileys/lib/Utils/rich-message-utils.js'

// 1. paling eksplisit
const pesan = prepareRichResponseMessage({ contentText: 'halo', botJid: sock.user.id })

// 2. lewat conn
const pesan2 = prepareRichResponseMessage({ contentText: 'halo', conn: sock })

// 3. otomatis dari global.conn (perilaku lama, tanpa perubahan kode)
const pesan3 = prepareRichResponseMessage({ contentText: 'halo' })
```

`'628123456789:12@s.whatsapp.net'` → `'628123456789@s.whatsapp.net'`.
Bila tidak ada koneksi sama sekali, dipakai nilai cadangan `867051314767696@bot`
supaya pengiriman tidak pernah gagal.

## Catatan

- Paket ini **fork pihak ketiga**. Untuk produksi, kunci ke commit tertentu
  (jangan pakai `#main`) karena branch bisa berubah kapan saja.
- Lisensi mengikuti aslinya (MIT).
