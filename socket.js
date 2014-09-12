//Using socket.io to use our express server



module.exports = {

        startSocketServer: function (server) {

        	var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log('A new user connected!');
    socket.emit('servermsg', { msg: 'The world is round, there is no up or down.' });

    // A socket is a live connection.
    socket.on('clientmsg' , function (data) {
    	console.log(data);
    });
});


}

}