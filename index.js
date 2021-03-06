class Accordeon {
  constructor(container) {
    this.container = container;
    this.bodys = [];
    this.init();
    this.createEventListener();
    this.hideBlock();
  }
  init() {
    const bodys = this.container.querySelectorAll(".body");
    for (let i = 0; i < bodys.length; i++) {
      bodys[i].dataset.id = i;
    }
    this.currentBodyId = 0;
    this.bodys = bodys;
  }
  createEventListener() {
    this.container.addEventListener("click", (event) => {
      if (event.target.classList.contains("title")) {
        const bodyId = event.target.nextElementSibling.dataset.id;
        const currentBody = this.container.querySelector(`.body[data-id="${bodyId}"]`);
        currentBody.classList.toggle("active");
        this.hideBlock(currentBody);
      }
    });
  }
  hideBlock(currentBody) {
    for (let i = 0; i < this.bodys.length; i++) {
      if (this.bodys[i] === currentBody) {
        continue;
      }
      this.bodys[i].classList.remove("active");
    }
  }
}
new Accordeon(document.getElementById("list"));
