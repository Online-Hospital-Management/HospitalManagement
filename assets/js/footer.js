class Footer extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <h2>About Us</h2>
                    <p>We focus on technologies that promise to reduce costs, streamline processes and speed time-to-market, Backed by our strong quality processes and rich experience managing global... </p>
                </div>
                <div class="col-md-4 col-sm-12">
                    <h2>Useful Links</h2>
                    <ul class="list-unstyled link-list">
                        <li><a ui-sref="about" href="about">About us</a><i class="fa fa-angle-right"></i></li>
                        <li><a ui-sref="contact" href="contact_us">Contact us</a><i class="fa fa-angle-right"></i></li>
                    </ul>
                </div>
                <div class="col-md-4 col-sm-12 map-img">
                    <h2>Contact Us</h2>
                    <address class="md-margin-bottom-40">
                    Bld. Vasile Pârvan, <br>
                    NR. 4<br>
                    Phone: +0251 341 302<br>
                    Email: support@e-uvt.ro<br>
                    </address>

                </div>
            </div>
        </div>
        

    </footer>
    `;
  }
}


customElements.define('footer-component', Footer);