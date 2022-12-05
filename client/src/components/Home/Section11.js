import colorSeperator from"../../Assets/Images/Icons/color-seperator.png";

const Section11 = () =>{
    return (
        <section className="container-fluid reservation-info wow fadeInRightBig" data-wow-duration="3s">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="reservation-info-title">
                        <h3>Reservation Info</h3>
                        <center>
                            <img className="my-3" src={colorSeperator} alt="color seperator"/>
                        </center>
                        <br/>
                        <p>Numerous commentators have also referred to the supposed restaurant owner's eccentric
                            habit of touting for custom outside his establishment, dressed in aristocratic fashion
                            and brandishing a sword.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-header text-start mb-4">
                                <h4>BOOK A TABLE</h4>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="reservation-form">
                                <form className="form-control mb-5">
                                    <label className="mb-2" for="date">Date</label>
                                    <input className="form-control mb-3" aria-label="form_date" type="date" name="date"
                                        id="date" required/>
                                    <label className="mb-2" for="time">Time</label>
                                    <select name="time" id="time" className="form-select mb-3" aria-label="form_select"
                                        required>
                                        <option selected>Choose Your Suitable Time</option>
                                        <option value="0">5.00 A.M.</option>
                                        <option value="1">5.30 A.M.</option>
                                        <option value="2">6.00 A.M.</option>
                                        <option value="3">6.30 A.M.</option>
                                        <option value="4">7.00 A.M.</option>
                                        <option value="5">7.30 A.M.</option>
                                        <option value="6">8.00 A.M.</option>
                                        <option value="7">8.30 A.M.</option>
                                        <option value="8">9.00 A.M.</option>
                                        <option value="9">9.30 A.M.</option>
                                        <option value="10">10.00 A.M.</option>
                                        <option value="11">10.30 A.M.</option>
                                        <option value="12">11.00 A.M.</option>
                                        <option value="13">11.30 A.M.</option>
                                        <option value="14">12.00 P.M.</option>
                                        <option value="15">12.30 P.M.</option>
                                        <option value="16">1.00 P.M.</option>
                                        <option value="17">1.30 P.M.</option>
                                        <option value="18">2.00 P.M.</option>
                                        <option value="19">2.30 P.M.</option>
                                        <option value="20">3.00 P.M.</option>
                                        <option value="21">3.30 P.M.</option>
                                        <option value="22">4.00 P.M.</option>
                                        <option value="23">4.30 P.M.</option>
                                        <option value="24">5.00 P.M.</option>
                                        <option value="25">5.30 P.M.</option>
                                        <option value="26">6.00 P.M.</option>
                                        <option value="27">6.30 P.M.</option>
                                        <option value="28">7.00 P.M.</option>
                                        <option value="29">7.30 P.M.</option>
                                        <option value="30">8.00 P.M.</option>
                                        <option value="31">8.30 P.M.</option>
                                        <option value="32">9.00 P.M.</option>
                                        <option value="33">9.30 P.M.</option>
                                        <option value="34">10.00 P.M.</option>
                                        <option value="35">10.30 P.M.</option>
                                        <option value="36">11.00 P.M.</option>
                                        <option value="37">11.30 P.M.</option>
                                    </select>
                                    <label className="mb-2" for="location">Location</label>
                                    <select name="location" id="location" className="form-select mb-3" required>
                                        <option value="0" selected>Choose Your Convenient Location</option>
                                        <option value="3">Mastali Hotel - Tehran</option>
                                        <option value="1">Mastali Hotel - Montreal</option>
                                        <option value="6">Mastali Hotel - Vancover</option>
                                        <option value="5">Mastali Hotel - Torento</option>
                                        <option value="2">Mastali Hotel - Washington D.C.</option>
                                        <option value="4">Mastali Hotel - Florida</option>
                                        <option value="7">Mastali Hotel - Maryland</option>
                                        <option value="8">Mastali Hotel - Missouri</option>
                                        <option value="9">Mastali Hotel - Mississippi</option>
                                        <option value="10">Mastali Hotel - West Virginia</option>
                                        <option value="11">Mastali Hotel - Pennsylvania</option>
                                        <option value="12">Mastali Hotel - Colorado</option>
                                        <option value="13">Mastali Hotel - New Mexico</option>
                                        <option value="14">Mastali Hotel - New Jersey</option>
                                        <option value="15">Mastali Hotel - California (San Francisco)</option>
                                        <option value="16">Mastali Hotel - California (Las Vegas)</option>
                                        <option value="17">Mastali Hotel - Massachusetts</option>
                                        <option value="18">Mastali Hotel - Boston</option>
                                    </select>
                                    <label className="mb-2" for="booking">Reservation</label>
                                    <select name="booking" id="booking" className="form-select mb-3" required>
                                        <option value="0" selected>Choose Your Reservation Space</option>
                                        <option value="1">1 Person</option>
                                        <option value="2">2 Persons</option>
                                        <option value="3">3 Persons</option>
                                        <option value="4">4 Persons</option>
                                        <option value="5">5 Persons</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-header text-start mb-4">
                                <h4>CONTACT DETAILS</h4>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="reservation-form">
                                <form className="form-control mb-5" >
                                    <label className="mb-2" for="name">Name</label>
                                    <input className="form-control mb-3" type="text" name="text" id="name"
                                        placeholder="Your Name" required/>
                                    <label className="mb-2" for="email">E-mail</label>
                                    <input className="form-control mb-3" type="email" name="email" id="email"
                                        placeholder="Your E-mail" required/>
                                    <label className="mb-2" for="cell">Phone</label>
                                    <input className="form-control mb-3" type="text" name="cell" id="cell"
                                        placeholder="Your Cell No" required/>
                                    <label className="mb-2" for="message">Reservation Info <small className="text-muted"
                                            style={{fontSize: '0.795em'}}>(Optional)</small></label>
                                    <textarea className="form-control mb-3" name="Reservation Info"
                                        id="Reservation Info" cols="1" rows="1" style={{resize: 'none'}}
                                        placeholder="Reservation Info"></textarea>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="reservation-button mb-5">
                        <form >
                            <button type="submit" className="btn-lg reservation-btn w-100" disabled>Make a
                                reservation</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Section11;