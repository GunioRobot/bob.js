# Intro

NOTE: Warning, this is currently broken and I don't have enought time right now to properly finish this bindings,
however *I will find some time* to finish an usable implementation of BOB for node.js, thanks. If you want to help
out send me a message.

BOB means Basic Open Bridge and it's a protocol bridge for creating
encrypted and secure tunnels using I2P.

BOB does all the hard work, and is usable via telnetting the bridge.

# Protocol

Protocol is pretty simple; it's all plain text.

# Messages

Currently, BOB supports the following commands:

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

# Examples

TBD

# Motivation

There is no I2P sweetness in the node world. I love JS, I love node, I love I2P. It seemed obvious.

This should help you if you want to create dynamic tunnels using JavaScript for making stream connections in I2P.