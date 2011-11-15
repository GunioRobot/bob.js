var sys    = require('sys'),
    events = require('events');

var BOB = exports;

BOB.tunnels = {};

BOB.register = function(name, Tunnel) {
  return this.tunnels[name] = Tunnel;
};
