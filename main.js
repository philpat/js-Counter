const btnEl = document.querySelector(".buttons")
const countEl = document.querySelector(".count")

btnEl.addEventListener("click", (e)=>{
    if(e.target.classList.contains("add")){
        countEl.innerHTML++
    }
    if(e.target.classList.contains("reset")){
        countEl.innerHTML =0
    }
    if(e.target.classList.contains("subtract")){
        countEl.innerHTML--
    }
    setColor()
})

function setColor(){
    if(countEl.innerHTML > 0){
        countEl.style.color = "yellow"
    } else if(countEl.innerHTML < 0){
        countEl.style.color = "orangered"
    } else {
        countEl.style.color = "white"
    }
}
//generate random color

const colorEl = document.querySelector(".color")
const generateBtn = document.querySelector(".generate")

generateBtn.addEventListener("click", ()=>{
    const randomColor = Math.random().toString(16).substring(2, 8)
    document.body.style.backgroundColor = "#" + randomColor
    colorEl.innerHTML = "#" + randomColor
})


