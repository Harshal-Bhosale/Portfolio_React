function sendEmail(){
    Email.send({
        SecureToken : "d9fd6815-e08f-4abe-943e-8f30466ea758",
        // Host: "smtp.elasticemail.com",
        // Username: "harshubhosale557@gmail.com",
        // Password: "B15C16C41B70E1A9961D860A14B7C6B47094",
        //Port: "2525",
        To : 'tripyrate@gmail.com',
        From : 'harshubhosale557@gmail.com',
        Subject : "Portfolio Site New Enquiery",
        Body : '<br><br>From:<u>' + document.getElementById("mail").value +"</u><hr>"+
        "<br> <i>Name</i> :<h2>" + document.getElementById("name").value + "</h2><hr><br><br>"+
        "<i>Msg</i> :<h3><B>" + document.getElementById("msg").value +"</B></h3><br><br>end of mail"
    }).then(
      message => alert(message)
    );
}
export default sendEmail 
 console.log("function called")
//     // Email.send({
//     //     Host: "smtp.elasticmail.com",
//     //     Username: "harshubhosale557@gmail.com",
//     //     Password: "B15C16C41B70E1A9961D860A14B7C6B47094",
//     //     Port: "2525",
//     //     To: 'tripyrate@gmail.com',
//     //     From: document.getElementById("email").value,
//     //     Subject: "Portfolio Site New Enquiery ",
//         Body: "Name" 
//         + document.getElementById("name").value +
//         "<br> Email" + document.getElementById("mail").value +
//         "<br> Msg" + document.getElementById("msg").value 
//     // }).then(
//     //     message => alert(message)
//     // );

//     //java obfuscator
//     //minify

// var _0x286e=["\x74\x68\x65\x6E","\x64\x39\x66\x64\x36\x38\x31\x35\x2D\x65\x30\x38\x66\x2D\x34\x61\x62\x65\x2D\x39\x34\x33\x65\x2D\x38\x66\x33\x30\x34\x36\x36\x65\x61\x37\x35\x38","\x74\x72\x69\x70\x79\x72\x61\x74\x65\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D","\x68\x61\x72\x73\x68\x75\x62\x68\x6F\x73\x61\x6C\x65\x35\x35\x37\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D","\x50\x6F\x72\x74\x66\x6F\x6C\x69\x6F\x20\x53\x69\x74\x65\x20\x4E\x65\x77\x20\x45\x6E\x71\x75\x69\x65\x72\x79","\x3C\x62\x72\x3E\x3C\x62\x72\x3E\x46\x72\x6F\x6D\x3A\x3C\x75\x3E","\x76\x61\x6C\x75\x65","\x6D\x61\x69\x6C","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x3C\x2F\x75\x3E\x3C\x68\x72\x3E","\x3C\x62\x72\x3E\x20\x3C\x69\x3E\x4E\x61\x6D\x65\x3C\x2F\x69\x3E\x20\x3A\x3C\x68\x32\x3E","\x6E\x61\x6D\x65","\x3C\x2F\x68\x32\x3E\x3C\x68\x72\x3E\x3C\x62\x72\x3E\x3C\x62\x72\x3E","\x3C\x69\x3E\x4D\x73\x67\x3C\x2F\x69\x3E\x20\x3A\x3C\x68\x33\x3E\x3C\x42\x3E","\x6D\x73\x67","\x3C\x2F\x42\x3E\x3C\x2F\x68\x33\x3E\x3C\x62\x72\x3E\x3C\x62\x72\x3E\x65\x6E\x64\x20\x6F\x66\x20\x6D\x61\x69\x6C\x3C\x68\x72\x3E","\x73\x65\x6E\x64"];function sendEmail(){Email[_0x286e[16]]({SecureToken:_0x286e[1],To:_0x286e[2],From:_0x286e[3],Subject:_0x286e[4],Body:_0x286e[5]+ document[_0x286e[8]](_0x286e[7])[_0x286e[6]]+ _0x286e[9]+ _0x286e[10]+ document[_0x286e[8]](_0x286e[11])[_0x286e[6]]+ _0x286e[12]+ _0x286e[13]+ document[_0x286e[8]](_0x286e[14])[_0x286e[6]]+ _0x286e[15]})[_0x286e[0]]((_0xea8cx2)=>{return alert(_0xea8cx2)})}