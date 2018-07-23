var auth = require ("./auth");

function test_login(user, pass) {
    if(auth.login(user, pass)) {
        console.log("%s logged in okay", user);
    } else console.log("%s can't login", user);
}

test_login("daffy", "d12");
test_login("bob", "pass");