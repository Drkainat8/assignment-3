//lowercase//
let personname : string = "kainat"
console.log("lowercase :" ,personname.toLowerCase());

//uppercase//
console.log("uppercase:" , personname.toLocaleUpperCase());

//titilecase//
console.log("titilecase:" , personname.replace(/\b\w/g,c => c.toUpperCase()));








