// Initialize Firebase
var config = {
    apiKey: "AIzaSyB4zvNAI26TlSkUrrBPRoliUnrKdoNKlhA",
    authDomain: "pmstudio-3400c.firebaseapp.com",
    databaseURL: "https://pmstudio-3400c.firebaseio.com",
    projectId: "pmstudio-3400c",
    storageBucket: "pmstudio-3400c.appspot.com",
    messagingSenderId: "8817041739"
  };
  firebase.initializeApp(config);

  //reference
  var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
function submitForm(e){
    // e.preventDefult();
//    console.log(123);

   //Get values
   var name = getInputVal('name');
   var email = getInputVal('email');
   var message = getInputVal('message');
   var number = getInputVal('number');
   
   
   //save messgae
   saveMessages(name,email,number,message);
}



//function to get id 
function getInputVal(id){
    return document.getElementById(id).value;
}

//save messages 
function saveMessages(name,email,number,message){
    var newMessageRef = messagesRef.child(name);
    newMessageRef.set({
        name:name,
        email:email,
        number:number,
        message:message
    });
}
