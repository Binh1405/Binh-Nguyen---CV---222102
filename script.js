// document.getElementsByClassName("navbar-btn")[0]
const navbarBtn = document.querySelector('#navbar-btn')
console.log("navbar button", navbarBtn)
navbarBtn.addEventListener("click",()=>{
    const sidebar = document.getElementById("sidebar")
    // console.log("sidebar", sidebar)
    if(sidebar.classList.contains("show")){
        sidebar.classList.remove("show");
    }
        else{
            sidebar.classList.add("show")
        }
    }
)

const sidebar = document.querySelector('#sidebar')

document.getElementById("close-btn").addEventListener
("click", ()=>{
    sidebar.classList.remove("show")
})


