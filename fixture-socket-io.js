import io from 'socket.io-client/socket.io';

var managerProto = io.Manager.prototype;

var methods = ['open','connect','on','emit','once'];

var origs = methods.map(name => managerProto[name]);

function mock(options={}){
  managerProto.open = function(){
    console.log('Mocking prototype.open ...');
  };
  managerProto.on = function(){
    console.log('Mocking prototype.on ...');
  };
  managerProto.emit = function(){
    console.log('Mocking prototype.emit ...');
  };
  managerProto.once = function(){
    console.log('Mocking prototype.once ...');
  };
}

function restore(){
  methods.forEach(name => {
    managerProto[name] = origs[name];
  });
}

export default {
  mock,
  restore
}