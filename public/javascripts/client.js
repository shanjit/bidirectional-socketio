// connect to the socket server
var socket = io.connect(); 

// if we get an "info" emit from the socket server then console.log the data we recive
socket.on('servermsg', function (data) {
    console.log(data);
    send('client says hi');
});

function send (text)
{
    socket.emit('clientmsg', { msg: text });
}


