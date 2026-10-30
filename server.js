import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    try {
        // Check if GET request
        if (req.method === 'GET') {
            if (req.url === '/') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>Homepage<h1>');
            } else if(req.url === '/about') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>About<h1>');
            } else {

            }
        } else {
            throw new Error('Method not allowed');
        }
    } catch (error){
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server error');
    }



    
});


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});