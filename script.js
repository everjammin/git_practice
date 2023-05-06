var msg1 = ['a','b','c','d','e'];
var msg2 = ['a','b','c','d','e'];
var msg3 = ['a','b','c','d','e'];

var randomizer = (msg) => {
    var r = Math.floor(Math.random() * msg.length);
    return msg[r];
}

var finalMsg = randomizer(msg1) + randomizer(msg2) + randomizer(msg3);

console.log(finalMsg);