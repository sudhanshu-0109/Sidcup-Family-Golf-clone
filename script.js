var crsr = document.querySelector("#cursor")
var crsr2 = document.querySelector("#cursor-blur")

var mouseX = 0
var mouseY = 0
var cursorX = 0
var cursorY = 0

document.addEventListener("mousemove", function (e) {
  mouseX = e.clientX
  mouseY = e.clientY
})

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.12
  cursorY += (mouseY - cursorY) * 0.12

  crsr.style.left = cursorX + "px"
  crsr.style.top = cursorY + "px"

  crsr2.style.left = cursorX + "px"
  crsr2.style.top = cursorY + "px"

  requestAnimationFrame(animateCursor)
}
animateCursor()

var h4all = document.querySelectorAll("#nav h4")

h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.transform = "translate(-50%, -50%) scale(4)"
    crsr.style.backgroundColor = "transparent"
    crsr.style.border = "1px solid #fff"
  })

  elem.addEventListener("mouseleave", function () {
    crsr.style.transform = "translate(-50%, -50%) scale(1)"
    crsr.style.backgroundColor = "#95C11E"
    crsr.style.border = "0px solid transparent"
  })
})

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1
  }
})

gsap.to("#main", {
  backgroundColor: "#000000ff",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2
  }
})

gsap.from("#about-us img, #about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 3
  }
})

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4
  }
})

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4
  }
})

gsap.from("#page4 h1", {
  y: 70,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 80%",
    end: "top 50%",
    scrub: 2
  }
})
