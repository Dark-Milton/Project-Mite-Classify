// Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
    import { getDatabase, ref, set, child, get, update } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";
    import "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDTuJIBjCGYDIOgzx88Kb1stJ_xNDDx8lc",
  authDomain: "test-6edf8.firebaseapp.com",
  databaseURL: "https://test-6edf8-default-rtdb.firebaseio.com",
  projectId: "test-6edf8",
  storageBucket: "test-6edf8.appspot.com",
  messagingSenderId: "69865150986",
  appId: "1:69865150986:web:bddec4183c0c1d3f7b1df3"
  };

  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig);
  const db = getDatabase();
  const dbRef = ref(getDatabase());



//  -----------------------------------------Ready Data----------------------------------------//
var subjectDB, materialDB, NoDB, NameDB, LinkDB;
let countDB =0;
let wait = 1;

function Ready() {
	subjectDB = document.getElementById("subbox").value;
  materialDB = document.getElementById("materialbox").value;
	NoDB = document.getElementById("Nobox").value;
	NameDB = document.getElementById("Namebox").value;
	LinkDB = document.getElementById("Linkbox").value;
}

//------------------------------------------Check Count----------------------------------------//
function getcount(subject, material, _callback){
    get(child(dbRef, subject+"/"+material)).then((snapshot) => {
      if (snapshot.exists()) {
        countDB =  snapshot.val().count;
        _callback();
        // return snapshot.val();
      } else {
        countDB = 0;
        _callback();
      }
    }).catch((error) => {
      console.error(error);
    });
    
}
//------------------------------------------Insert Data----------------------------------------//
document.querySelector("#insert").addEventListener("click", ()=>{
	Ready();
  console.log(subjectDB+"/"+materialDB);
  getcount(subjectDB, materialDB, function() {
        countDB++;
        insert();
    });
})

function insert(){
  set(ref(db, subjectDB+"/"+materialDB+"/"+countDB), {
      No: NoDB,
      Link: LinkDB,
      Name: NameDB
    });
   update(ref(db, subjectDB+"/"+materialDB), {
       count: countDB
     });
}