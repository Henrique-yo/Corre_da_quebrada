function mudouTamanho(){
    if(window.innerWidth >= 768){
        menu.style.display = 'block'
    } else{
        menu.style.display = 'none'
    }
}
function clickMenu(){
    
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
    } else{
        menu.style.display = 'block'
    }
} 


// mensalidade


const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const basic = document.getElementById("basic");

checkbox.addEventListener("click", () => {
  basic.textContent = basic.textContent === "$199.99" ? "$19.99" : "$199.99";
  professional.textContent =
    professional.textContent === "$249.99" ? "$24.99 " : "$249.99";
  master.textContent = master.textContent === "$399.99" ? "$39.99" : "$399.99";
});

