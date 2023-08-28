class NavBar{
    constructor(mobile,navlist,navlinks){
        this.menu = document.querySelector(mobile)
        this.navlist = document.querySelector(navlist)
        this.navLinks = document.querySelectorAll(navlinks)


    }

    animacao(){
        this.navLinks.forEach(element => {
            element.style.animation?(element.style.animation="") :(element.style.animation ="FadeLink 0.4s ease forwards 0.3s")
        });
    }

    addClickEvent(){

        this.menu.addEventListener("click",()=>{
            this.navlist.classList.toggle("active")
            this.animacao()
        })
    }
    init(){
        if(this.menu){

            this.addClickEvent()
        }
        return this
    }
}
const mobeileNav = new NavBar(".mobile",".nav-list",".nav-list li")
mobeileNav.init()
