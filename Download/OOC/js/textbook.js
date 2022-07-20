console.log("Hello");

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
  import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";
  import "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDTuJIBjCGYDIOgzx88Kb1stJ_xNDDx8lc",
    authDomain: "test-6edf8.firebaseapp.com",
    projectId: "test-6edf8",
    storageBucket: "test-6edf8.appspot.com",
    messagingSenderId: "69865150986",
    appId: "1:69865150986:web:bddec4183c0c1d3f7b1df3"
  };

  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig);

  let list = [];

  function addItems(no, name, link){
    list.push({
      moduleNo: no,
      moduleName: name,
      moduleLink: link
      });
  }

  async function FetchAllData( _callback){

    const dbRef = ref(getDatabase());
    // for(var i=0;i<2;i++){
    await get(child(dbRef, "OOC/TextBooks")).then((snapshot) => {
      if (snapshot.exists()) {
        list = (snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  // }
  console.log(list);
  _callback();
  }

  function insertLists(){
    if(list.count>0)
    {
        for(var i=1 ; i<=list.count ; i++){
          var no = document.createTextNode("Module "+list[i].No);
          var name = document.createTextNode(list[i].Name);
          var link = document.createTextNode("Download");
          var content = document.createElement("div");
          content.classList.add("content");

          
          var tag1 = document.createElement("h4");
          var tag2 = document.createElement("h4"); 
          var tag3 = document.createElement("h4"); 

          tag1.classList.add("no");
          tag2.classList.add("name");
          tag3.classList.add("link");

          var url = document.createElement("a");
          url.href = list[i].Link;

          
          tag1.appendChild(no);
          tag2.appendChild(name);
          url.appendChild(link);
          tag3.appendChild(url);
          
          content.append(tag1, tag2, tag3);

          var element = document.getElementById("textbooks");
          element.appendChild(content);
        }
        document.getElementById("textbkloading").style.display = "none";
        document.getElementById("textbklistHeader").style.display = "block";
      }
      else{
        document.getElementById("textbkloading").style.display = "none";
        document.getElementById("textbkcomingsoon").style.display = "block";
      }
  }


  FetchAllData( function () {
      console.log(list);
      insertLists();
    });

  