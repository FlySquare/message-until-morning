const login = require("facebook-chat-api");
 
login({email: "username", password: "pasword"}, (err, api) => {


    if(err) return console.error(err);
    var myInt = setInterval(function () {
        var yourID = "receiver_id";
        var msg = "receiver_msg";
        api.sendMessage(msg, yourID);
    }, 60000);//minisec = 60000 = 60 sec -- 1000 = 1 sec
    
});

