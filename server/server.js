const http = require("http");

const store = {
    faces: []
}

http.createServer((request, response) => {
    console.log("Requested url: " + request.url);

    switch (request.url.toLowerCase()) {
        case "/faces":

            response.writeHead(200, {
                Connection: "keep-alive",
                "Content-Type": "text/event-stream",
                "Cache-Control": "no-cache",
                "Access-Control-Allow-Origin": "*"
            });

            setInterval(() => {
                var stringData = JSON.stringify(store.faces);
                console.log("data: ", stringData);

                response.write("data: " + stringData);
                response.write("\n\n");
            }, 1000);

            break;

        case "/post-face":
            if (request.method == "POST") {

                request.on("data", (data) => {
                    console.log("received data: (not decoded) ", data);
                    var obj = JSON.parse(data);
                    store.faces.push(obj);
                    console.log("received data: ", obj);
                });

                request.on("end", () => {
                    response.writeHead(200, {
                        "Content-Type": "application/json",
                        "Cache-Control": "no-cache",
                        "Access-Control-Allow-Origin": "*"
                    });
                    response.end();
                });
            }
            break;

        default:
            response.writeHead(404);
            response.end();
            break;
    }
})
    .listen(3001);