class Header extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    this.innerHTML = `
    <nav>
    <a href="home.html">Home</a>
    <a href="doctors.html">Doctors</a>
    <a href="#" class="current">Gallery</a>
    <a href="departaments.html">Departaments</a>
    <a href="#">Contact</a>
    <div class="nav-underline"></div>
    <div class="nav-underline2"></div>
</nav>
    `;
  }
}


customElements.define('header-component', Header);