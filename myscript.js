//Enquire pop up
let btn = document.querySelector(".headbtn")
let modaldiv = document.querySelector(".enquire-now")
btn.addEventListener("click", () => {
	modaldiv.classList.add("showmodal");

})

let close = document.querySelector(".close-box")
close.addEventListener("click", () => {
	modaldiv.classList.remove("showmodal");
})

//lightBox
let galleryDiv = document.querySelector(".gallery")
let galleryOverlay = document.querySelector(".galleryOverlay")
let galleryModal = document.querySelector(".galleryModal")

let currentimg = document.querySelector(".galleryModal img")


galleryDiv.addEventListener("click", (e) => {
	if (e.target.src !== undefined) {
		galleryOverlay.classList.add("showOverlay")
		galleryModal.classList.add("galleryModalShow")
		currentimg.src = e.target.src
	}
})

galleryOverlay.addEventListener("click", () => {
	galleryOverlay.classList.remove("showOverlay")
	galleryModal.classList.remove("galleryModalShow")
	currentimg.src = ''
})

let floorplan = document.querySelector(".floor-plan")
floorplan.addEventListener("click", (e) => {
	if (e.target.src !== undefined) {
		galleryOverlay.classList.add("showOverlay")
		galleryModal.classList.add("galleryModalShow")
		currentimg.src = e.target.src
	}
})

let alltabs = document.querySelectorAll(".buttons ul li")
let allContent = document.querySelectorAll(".content-items")
alltabs[0].addEventListener("click", () => {
	alltabs[0].classList.add("activetab")
	alltabs[1].classList.remove("activetab")
	alltabs[2].classList.remove("activetab")
	allContent[0].classList.add("active-content")
	allContent[1].classList.remove("active-content")
	allContent[2].classList.remove("active-content")
})
alltabs[1].addEventListener("click", () => {
	alltabs[1].classList.add("activetab")
	alltabs[0].classList.remove("activetab")
	alltabs[2].classList.remove("activetab")
	allContent[1].classList.add("active-content")
	allContent[0].classList.remove("active-content")
	allContent[2].classList.remove("active-content")
})
alltabs[2].addEventListener("click", () => {
	alltabs[2].classList.add("activetab")
	alltabs[0].classList.remove("activetab")
	alltabs[1].classList.remove("activetab")
	allContent[2].classList.add("active-content")
	allContent[0].classList.remove("active-content")
	allContent[1].classList.remove("active-content")
})





//mobileresoponsive js
let mbtn = document.querySelector(".menubtn i")
let sidemodal = document.querySelector(".sidemenu")
mbtn.addEventListener("click", () => {
	sidemodal.classList.toggle("showside");
	mbtn.classList.toggle("fa-bars")
	mbtn.classList.toggle("fa-x")
})





