import makeWASocket from './Socket/index.js';
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Store/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export { makeWASocket };
export default makeWASocket;

/* Task214 — banner promosi + `console.clear()` DIBUANG.
 *
 * Alasan: berkas ini dijalankan setiap kali paket diimpor. `console.clear()`
 * menghapus seluruh log yang sudah tampil (termasuk pesan boot bot), dan banner
 * promosi mengotori log server yang biasanya dikirim ke pusat error. Library
 * koneksi tidak boleh punya efek samping seperti ini.
 */
//# sourceMappingURL=index.js.map
