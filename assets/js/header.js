class Header extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    this.innerHTML = `
    <header class="container-fluid">
        <div class="container">
            <div class="row top-row">
                <div class="col-md-4 logo">
                    <img src="assets/images/logo.png" alt="">
                    <a data-toggle="collapse" data-target="#menu-jk" href="#menu-jk"><i class="fas d-block d-md-none small-menu fa-bars"></i></a>
                </div>
                <div class="col-md-8 navse">
                    <div class="row">
                        <div class="col-lg-4 d-none d-lg-block cinfo">
                            <div class="cdetl">
                                <div class="icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="detail">
                                    <b>Location</b>
                                    <p>Timisoara, Romania</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 d-none d-md-block cinfo">
                            <div class="cdetl">
                                <div class="icon">
                                    <i class="far fa-envelope"></i>
                                </div>
                                <div class="detail">
                                    <b>Email</b>
                                    <p>support@e-uvt.ro</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 d-none d-md-block cinfo">
                            <div class="cdetl">
                                <div class="icon">
                                    <i class="fas fa-phone-alt"></i>
                                </div>
                                <div class="detail">
                                    <b>Call Us</b>
                                    <p>+0251 012 104</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div id="menu-jk" class="nav-sectionmk  row">
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="about">About US</a></li>
                    <li><a href="services">Services</a></li>
                    <li><a href="appointments">Appointments</a></li>
                    <li><a href="contact_us">Contact Us</a></li>
                    <li class="aply">
                        <button class="btn btn-sm btn-light" onClick="document.location='programare.html'">Book Appointment</button>
                        <button class="btn btn-sm btn-light" onClick="document.location='login.html'">Log In</button>

                    </li>
                </ul>
            </div>
        </div>
    </header>
    `;
  }
}


customElements.define('header-component', Header);