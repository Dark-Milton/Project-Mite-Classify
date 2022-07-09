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
const content = document.querySelector(".content");

content.style.marginTop = headerHeight+"px";
console.log(headerHeight+"px");


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
