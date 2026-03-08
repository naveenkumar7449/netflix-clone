document.querySelectorAll(".question").forEach(q=>q.addEventListener("click",()=>{
let a=q.nextElementSibling;
a.style.display=a.style.display==="block"?"none":"block";
}));
function slideLeft(){document.querySelector('.movie-row').scrollBy({left:-215,behavior:'smooth'})}
function slideRight(){document.querySelector('.movie-row').scrollBy({left:215,behavior:'smooth'})}