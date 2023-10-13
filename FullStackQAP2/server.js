// Raymond Payne
// FullStack QAP2
// Task 1 Parts ALL

const http = require('http');
const url = require('url');
const port = 3000;

// Create a server
const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url);

  // Determine the route based on the path
  const route = parsedUrl.pathname;

  // Use a switch statement to handle different routes
  switch (route) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('Welcome to the home page!');
      console.log('Request for the home page');
      break;
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('This is the About page.');
      console.log('Request for the About page');
    case '/contact':
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Contact us at bestproductsalways203@gmail.com.');
        console.log('Request for the Contact page');
        break;
    case '/employeeOffice':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('View our Office Employees here.');
      console.log('Request to the Office Department page');
      break;
      break;
    case '/employeePlant':
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('View our Plant Employees here.');
        console.log('Request for the Products Department page');
        break;
    case '/partsDepartment':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('View our parts here.');
            console.log('Request for the Parts Department page');
            break;
    case '/productsDepartment':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('View our products here.');
      console.log('Request for the Products Department page');
      break;
    
    default:
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('404 Not Found');
      console.log('Request for an unknown route');
  }
});

// Set the server to listen on port 3000

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
