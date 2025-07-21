const os = require('os');
function getPreferredLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name in interfaces) {
    for (const iface of interfaces[name]) {
      if (
        iface.family === 'IPv4' &&
        !iface.internal &&
        iface.address.startsWith('192.168.1.')
      ) {
        return iface.address;
      }
    }
  }
  return 'Không tìm thấy IP trong dải 192.168.1.x';
}
module.exports = getPreferredLocalIP;
