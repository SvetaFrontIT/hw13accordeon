class Accordeon {
    constructor (container) {
        this.container = container;
        this.setHeight()
    }
    setHeight() {
        const titles = this.container.querySelectorAll('.title');
        for (let i = 0; i < titles.length; i++) {
            titles[i].addEventListener("click", (event) => {
                event.target.classList.toggle("active");
                const body = titles[i].nextElementSibling;
            if (body.style.maxHeight){
                body.style.maxHeight = null;
              } else {
                body.style.maxHeight = body.scrollHeight + "px";
            } 
            });
            
        }
    }
}
new Accordeon(document.getElementById('list'));
        