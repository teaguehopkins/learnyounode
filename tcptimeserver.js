var net = require('net');
var server = net.createServer(function (socket){
  //socket handling logic
  var date = new Date();
  var dateString = date;

  var year = date.getFullYear()
  var month = date.getMonth()     // starts at 0
  var day = date.getDate()      // returns the day of month
  var hours = date.getHours()
  var min = date.getMinutes()

month++; //because month starts at 0


//only zero filled month and day. to make robust, abstract this into a function and call it on each piece of the date
if (month.toString().length==1) {
    month="0"+month;
    }

if (day.toString().length==1) {
    day="0"+day;
    }

  dateString = year + "-" + month + "-" + day + " " + hours + ":" + min + "\n"

  //console.log(dateString);
  socket.write(dateString);
  socket.end();
  });

server.listen(process.argv[2]);
