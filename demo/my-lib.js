import io from 'socket.io-client/socket.io';

export default function(url){
  console.log('Creating socket connection...');
  var socket = io(url);
  socket.on('news', function (data) {
    console.log('Received on news: ', data);
    console.log('Sending data1');
    socket.emit('my other event', { my: 'data1' });
  });
  setTimeout(function(){
    console.log('Sending data2');
    socket.emit('my timeout event', { my: 'data2' });
  }, 1000);
}
