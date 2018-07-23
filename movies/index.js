var http = require('http');

var movies = [
    {
        name:"who",
        releaseYear: 2000,
        tagLine:"who"
    },
    {
        name:"what",
        releaseYear: 2001,
        tagLine:"what"
    },
    {
        name:"when",
        releaseYear: 2002,
        tagLine:"when"
    },
    {
        name:"where",
        releaseYear: 2003,
        tagLine:"where"
    },
    {
        name:"why",
        releaseYear: 2004,
        tagLine:"why"
    }
]

var server = http.createServer(function(req, res) {
    res.setHeader("Content-type", "application/json");
    if(req.method === "GET") {
        res.write(JSON.stringify(movies));
        res.end();
    } else if(req.method === "POST") {
        var body = "";
        
        req.on("data", function(chunk) {
            body += chunk;
            console.log(body);
        });

        req.on("end", function() {
            var newMovie = JSON.parse(body);
            console.log('new: ' + newMovie);
            movies.push(newMovie);
            console.log('all: ' + movies);
            res.end();
        });
    }
});

server.listen(3000);