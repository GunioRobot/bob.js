var events = require('events'),
    sys    = require('sys'),
    net    = require('net'),
    BOB    = require('../bob');

var Tunnel = exports.Tunnel = function(opts) {
  var socket = new net.Socket();

  if(opts === undefined) {
    var opts = opts || {};
  };

  return this;
};

Tunnel.init = function() {
  this.emit('init', this);
};

Tunnel.register = function() {
  return BOB.register(this.tunnel, this);
};
