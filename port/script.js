const backTopbtn = document.querySelector("[data-back-to-top]");
const header = document.querySelector("[data-header]");


window.addEventListener("scroll", function(){
     if(window.scrollY >=300){
        header.classList.add("active");
        backTopbtn.classList.add("active");
     } else{
        header.classList.remove("active");
        backTopbtn.classList.remove("active");
     }
});

if (window.scrollY < 300) {
  backTopbtn.classList.remove("active");
}

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.classList.toggle("dark-mode");

  // Change button text dynamically
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Light Mode";
  } else {
    themeToggle.textContent = "Dark Mode";
  }
});
