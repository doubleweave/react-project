module.exports = function (server) {
    const io = require('socket.io')(server);

    io.on('connection', function(socket) {
        console.log('Connected');
        socket.on('sendMsg', function(data) {
            console.log('Server receive message from browser:', data);
            const msg = data.name + '_' + data.date;
            io.emit('receiveMsg', msg);
            console.log('Server send message to browser:', msg);
        });
    });
};
