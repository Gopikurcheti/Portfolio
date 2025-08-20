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