var planet = "world";
if(process.argv.length > 2) {
    planet = process.argv[2];
}
console.log("hello %s", planet);