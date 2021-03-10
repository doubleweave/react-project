module.exports = function (server) {
    //Get io object
    /*const io = require('socket.io')(server, {
        handlePreflightRequest: function (req, res) {
            var headers = {
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Credentials': true
            };
            res.writeHead(200, headers);
            res.end();
        }
    });*/

    const io = require('socket.io')(server);

    //listen to connection
    io.on('connection', function (socket) {
        console.log('socketio connected');

        socket.on('sendMsg', function (data) {
            console.log('Server get data from browser.', data);
            // send message to browser
            io.emit('receiveMsg', data.name + '_' + data.date);
            console.log('server send message to browser.', data);
        });
    });
};
