/**
 * La lista de comandos a implementar es la siguiente:
 *
 *  help
 *  clear
 *  getdest
 *  getnick
 *  inhost
 *  inport
 *  list
 *  lookup
 *  newkeys
 *  option
 *  outhost
 *  outport
 *  quiet
 *  quit
 *  setkeys
 *  setnick
 *  showprops
 *  start
 *  status
 *  stop
 *  verify
 *  visit
 *  zap
**/

var net = require('net')
var sys = require('sys');

var BOB = exports.BOB = function(socket, options) {
  
  if(! (this instanceof BOB)) {
    return new BOB(socket, options);
  };

  tunnels = tunnels || [];
  options = options || {};

  socket = new net.Socket();

  socket.on('connect', function() {
    console.log('connected to bob bridge');
  });

  socket.on('data', function(data) {
    console.log('received: ' + data.toString());
  });
};

// Prototypes

BOB.prototype.raw = function(data) {
  var self = this;
  setTimeout(function() {
    self.socket.write(data + '\n', 'ascii', function() {
      console.log('sent: ' + data);
    });
  }, 100);
};

BOB.prototype.getStatus = function() {
  this.raw('status');
};

BOB.prototype.getList = function() {
  this.raw('list');
};

BOB.prototype.createTunnel = function(nick, ihost, iport, ohost, oport) {
  this.raw('setnick ' + nick + '\n' + 'inhost ' + ihost + '\n' + 'inport ' + iport + '\n' + 'outhost ' + ohost + '\n' + 'outport ' + oport); 
  this.tunnels.push({nick: nick, inhost: ihost, inport: iport, outhost: ohost, outport: oport});
};

BOB.prototype.lookup = function(uri) {
  this.raw('lookup ' + uri);
};

