var b = new Buffer.from(`[Key To Encode]`);
console.log("Encoded String:");
console.log("----------------------");
console.log(b.toString("base64"));

var str = new Buffer.from("[Encoded Version To Decode]", "base64");

console.log();
console.log("Decoded String:");
console.log("----------------------");
console.log(str.toString());
