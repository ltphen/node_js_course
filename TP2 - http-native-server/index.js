// import the http native module
const http = require("http");
// import the server configurations
const {host, port} = require('./config');

const file = require('./file_manager');


// the request listener
const requestListener = async (request, response) => {
  const { method, url } = request;
  // handle the home page
   if(method == 'GET' && url == '/'){
      response.setHeader("Content-Type", "text/html");
      response.writeHead(200);
      response.end(await file.read(__dirname+'/home.html'));
   }

  // Handle the json request
   else if(method == 'GET' && url == '/json'){
      response.setHeader("Content-Type", "text/html");
      response.writeHead(200);
      response.end(await file.read(__dirname+'/myfile.json'));
   }

   // handle other request
   else{
      response.writeHead(200);
    response.end(method+','+url);
   }

};

// create the web server
const server = http.createServer(requestListener);

// launch the server on a specific port and the default host. The 0 can be replace by the server ip

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});


errorPage = (error, res)=>{
  res.end(error);
}

