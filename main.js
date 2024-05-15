//lowercase//
var personname = "kainat";
console.log("lowercase :", personname.toLowerCase());
//uppercase//
console.log("uppercase:", personname.toLocaleUpperCase());
//titilecase//
console.log("titilecase:", personname.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
