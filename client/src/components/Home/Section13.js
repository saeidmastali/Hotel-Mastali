
const Section13 = () =>{
    return(
        <section class="container-fluid location_info d-flex align-items-center justify-content-center wow bounceIn"
        data-wow-duration="3s" id="LOCATION">
        <div class="container">
            <div class="row">
                <div class="location_header text-center my-5">
                    <h1>Our Location</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div id="map" class="me-3"></div>
                </div>
                <div class="col-md-6 me-auto">
                    <div class="row">
                        <div class="col-md-6 location-content">
                            <div class="location-heading">
                                <h6>Mastali Hotel - MONTREAL</h6>
                            </div>
                            <div class="location-info">
                                <span>
                                    500 Abelard, Verdun, Montreal, QC, Canada H3E 1B7
                                </span><br/>
                                <span>+1(438)1234567</span><br/>
                                <span>Mastali-Hotel@domain.com</span>
                            </div>
                        </div>
                        <div class="col-md-6 location-content">
                            <div class="location-heading">
                                <h6>Mastali Hotel - TEHRAN</h6>
                            </div>
                            <div class="location-info">
                                <span>
                                    600 S Rose St, Baltimore, MD 21224
                                </span><br/>
                                <span>+98(912)1234567</span><br/>
                                <span>Mastali-Hotel@domain.com</span>
                            </div>
                        </div>
                    </div>
                    <div class="row margin-top-0 mt-5">
                        <div class="col-md-6 location-content">
                            <div class="location-heading">
                                <h6>Mastali Hotel - Vancover</h6>
                            </div>
                            <div class="location-info">
                                <span>
                                    64 Bayberry, BR
                                </span><br/>
                                <span>+1(438)1234567</span><br/>
                                <span>Mastali-Hotel@domain.com</span>
                            </div>
                        </div>
                        <div class="col-md-6 location-content">
                            <div class="location-heading">
                                <h6>Mastali Hotel - TORENTO</h6>
                            </div>
                            <div class="location-info">
                                <span>
                                    6795 W 19th Pl
                                    Denver, ONTORI
                                </span><br/>
                                <span>+1(438)1234567</span><br/>
                                <span>Mastali-Hotel@domain.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="newsletter-title">
                        <h6>NEWSLETTER</h6>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="newsletter">
                                <form class="form-control pt-3" 
                                    style={{backgroundColor: '#191919',borderColor:'var(--primaryColor)'}}>
                                    <label for="n_name" class="mb-2"
                                        style={{color:'var(--primaryColor)', fontWeight:'700'}}>Name</label>
                                    <input class="form-control mb-2" type="text" name="n_name" id="n_name"
                                        placeholder="Your Name" required/>
                                    <label for="n_email" class="mb-2"
                                        style={{color:'var(--primaryColor)', fontWeight:'700'}}>E-mail</label>
                                    <input class="form-control" type="n_email" name="n_email" id="n_email"
                                        placeholder="Your E-mail" required/>
                                    <button type="submit" class="btn btn-newsletter w-100 my-3">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="social-icons text-center my-5">
                        <i class="fab fa-facebook-f me-4"></i>
                        <i class="fab fa-twitter me-4"></i>
                        <i class="fab fa-instagram me-4"></i>
                        <i class="fab fa-pinterest me-4"></i>
                        <i class="fab fa-tumblr me-4"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Section13;