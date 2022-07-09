console.log("Hello");

// disable right click
document.addEventListener('contextmenu', event => event.preventDefault());
 
document.onkeydown = function (e) {
 
    // disable F12 key
    if(e.keyCode == 123) {
        return false;
    }
 
    // disable I key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
        return false;
    }
 
    // disable J key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        return false;
    }
 
    // disable U key
    if(e.ctrlKey && e.keyCode == 85) {
        return false;
    }
}

const headerHeight = document.querySelector("header").offsetHeight;
const idHeader = document.querySelector("#header");
const idHeaderHeight = document.querySelector("#header").offsetHeight;


const heading = document.querySelector(".heading");
idHeader.style.marginTop = headerHeight+"px";
heading.style.marginTop = idHeaderHeight+headerHeight+50+"px";
console.log(idHeaderHeight+headerHeight+60+"px");

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () =>{
  const visibility = primaryNav.getAttribute("data-visible");
  console.log(visibility);

  if(visibility === "false"){
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  }
  if(visibility === "true"){
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
})


// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.fontSize = "var(--scroll-header-font-size)";
    document.getElementById("header").style.padding = "20px 0px";
    document.getElementById("header").style.textDecoration = "underline";
  } else {
    document.getElementById("header").style.fontSize = "var(--header-font-size)";
    document.getElementById("header").style.padding = "50px 0px";
    document.getElementById("header").style.textDecoration = "none";
  }
}

//Collection of materials


  let notes = [{
    moduleNo : "1",
    moduleName  : "Module1",
    moduleLink     : "youtube.com",
  },
    {
    moduleNo : "2",
    moduleName  : "Module2",
    moduleLink     : "youtube.com",
  },
    {
    moduleNo : "3",
    moduleName  : "Module3",
    moduleLink     : "youtube.com",
  },{
    moduleNo: "5",
      moduleName: "Probabiliy",
      moduleLink: "youtube.com"
  }];
  for( i=0 ; i<notes.length ; i++){
    var no = document.createTextNode("Module "+notes[i].moduleNo);
    var Name = document.createTextNode(notes[i].moduleName);
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
    url.href = "youtube.com";

    
    tag1.appendChild(no);
    tag2.appendChild(Name);
    url.appendChild(link);
    tag3.appendChild(url);
    
    content.append(tag1, tag2, tag3);

    var element = document.getElementById("notes");
    element.appendChild(content);
    


    
     // var tag = document.createElement("p");
     // var text = document.createTextNode(notes[i].moduleNo + " " + notes[i].moduleName + " " + notes[i].moduleLink);
     // tag.appendChild(text);
     // var element = document.getElementById("note");
     // element.appendChild(tag);
}




















//------------------------------------------------------------------------------------
// let person = {
//   firstName : "John",
//   lastName  : "Hegde",
//   age     : 50,
//   eyeColor  : "blue"
// };

// document.getElementById("demo").innerHTML = person.firstName + " " + person.lastName;



// document.getElementById("note").innerHTML = "Hii";

// let notes = [{
//   moduleNo : "1",
//   modName  : "module1",
//   link     : "youtube.com",
// },
//   {
//   moduleNo : "2",
//   modName  : "Module2",
//   link     : "youtube.com",
// },
//   {
//   moduleNo : "3",
//   modName  : "module3",
//   link     : "youtube.com",
// }];
// for(i=0;i<3;i++){
//   document.getElementById("note").innerHTML = notes[i].moduleNo;
// }
