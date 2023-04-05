window.onscroll = () => {
  if(scrollY > 200) {
    document.querySelector(".goTop").style.right = '10%'
  }else{
    document.querySelector(".goTop").style.right = '-100%'
  }
}
document.querySelector(".goTop").addEventListener("click", () => {
  scroll({
    top: 0
  })
})

let data = document.querySelector("nav").offsetHeight
document.getElementById("first").style.paddingTop = toString(data) + "px"