module.exports.login = function(user, pass) {
    if(user === "bob" && pass === "pass") {
        return true;
    } else return false;
}