
import Garmin from '../public/garmin/';

const fetch = require('node-fetch');

export const post = async (req, res, next)  => {
  const apiUrl = 'https://example.com/api/endpoint'; // Replace this with the URL of your API endpoint
  const postData = {
    key1: 'value1',
    key2: 'value2'
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

//     const http = require("http");
  
//     const hostname = "0.0.0.0";
//     const port = 3000;
  
//     const server = http.createServer((req, res) => {
//       console.log(`\n${req.method} ${req.url}`);
//       console.log(req.headers);
  
//       req.on("data", function(chunk) {
//         console.log("BODY: " + chunk);
//       });
  
//       res.statusCode = 200;
//       res.setHeader("Content-Type", "text/plain");
//       res.end("Hello World\n");
//     });
  
//     server.listen(port, hostname, () => {
//       console.log(`Server running at http://localhost:${port}/`);
//     });
  
//   };
  
//   const https = require('https')

// export function post(url, data) {
//   const dataString = JSON.stringify(data)

//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Content-Length': dataString.length,
//     },
//     timeout: 1000, // in ms
//   }

//   return new Promise((resolve, reject) => {
//     const req = https.request(url, options, (res) => {
//       if (res.statusCode < 200 || res.statusCode > 299) {
//         return reject(new Error(`HTTP status code ${res.statusCode}`))
//       }

//       const body = []
//       res.on('data', (chunk) => body.push(chunk))
//       res.on('end', () => {
//         const resString = Buffer.concat(body).toString()
//         resolve(resString)
//       })
//     })

//     req.on('error', (err) => {
//       reject(err)
//     })

//     req.on('timeout', () => {
//       req.destroy()
//       reject(new Error('Request time out'))
//     })

//     req.write(dataString)
//     req.end()
//   })
// }
    
// const res = await post('https://...', data