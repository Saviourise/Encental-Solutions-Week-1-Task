let menu = document.querySelector("#navBarRes")

const leftScroll = () => {
  const left = document.querySelector(".scroll-images");
  left.scrollBy(-450, 0);
};
function rightScroll() {
  const right = document.querySelector(".scroll-images");
  right.scrollBy(450, 0);
}

document.querySelector(".hr").getElementsByClassName.width = window.screen.innerWidth;

const linkChange = (self) => {
  document.querySelectorAll(".link").forEach((el) => {
    el.classList.remove("active")
  })
  self.classList.add("active")

  menu.style.top = "-300px"
  menuBar.style.transform = "rotate(0deg)"
}

const menuBar = document.querySelector("#menuBar")

menuBar.addEventListener("click", () => {
  if (!menu.style.top || menu.style.top === "-300px") {
    menu.style.top = "80px"
    menuBar.style.transform = "rotate(90deg)"
  } else {
    menu.style.top = "-300px"
    menuBar.style.transform = "rotate(0deg)"
  }
})

const myNav = document.querySelector("#navBar")

window.onscroll = () => {
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50 ) {
        myNav.classList.add("nav-colored");
    } 
    else {
        myNav.classList.remove("nav-colored");
    }
};