//Require socket.io

function socketCallBack(socket) {
    console.log('socket is here.');

    socket.on('socket.userJoin', function(userName) {
        socket.userName = userName;
        socket.emit('socket.login', {
            message: 'Welcome!'
        });
    })
}

module.exports = socketCallBack;
