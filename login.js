const firebaseConfig = {
  apiKey: "AIzaSyA5SgLINuoZ00fjnQql4d-zBKCC8ubXR68",
  authDomain: "coursework-ef53f.firebaseapp.com",
  databaseURL: "https://coursework-ef53f-default-rtdb.firebaseio.com",
  projectId: "coursework-ef53f",
  storageBucket: "coursework-ef53f.appspot.com",
  messagingSenderId: "210678734913",
  appId: "1:210678734913:web:c94eab90d70d12416de6c0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve the database handle
const myDBCxn = firebase.database().ref('/XXcontacts');
//Notice that contacts is the name of the root node in the project data tree. THIS IS YOU WILL CHANGE

// Tell JavaScript to call saveContacts when SUBMIT button is clicked
const btn = document.getElementById("submit-data");
btn.addEventListener("click", saveContacts());

// Submit clicked so post the data to the server
function saveContacts() {
  //alert("SUBMIT clicked!!!");

  // read the data from the email field
  const emailField = document.getElementById("email");
  const emailFieldValue = emailField.value;
  alert(emailFieldValue),

    // reset form 
  emailField.value = ''; // clear the field
  emailField.focus(); // set the focus

  // code to save the data to Firebase GOES HERE!
  const data = myDBCxn.push();
  data.set( {email: emailFieldValue
            });

}

//Code to retrieve and display the data goes here ...
myDBCxn.on("child_added", displayData);

function displayData(data, prevChildKey) {
    const datapoint = data.val();
    document.getElementById("contacts").value += datapoint.email + "\n";
}