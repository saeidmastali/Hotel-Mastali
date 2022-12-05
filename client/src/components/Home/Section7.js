import colorseperator from "../../Assets/Images/Icons/color-seperator.png";
import ToroPie from "../../Assets/Images/Modal Images/Toro Pie.jpg";
import CremeBrowlee from "../../Assets/Images/Modal Images/Creme Browlee.jpg";
import TarteTatin from "../../Assets/Images/Modal Images/Tarte Tatin.jpg";
import CheeseBoard from "../../Assets/Images/Modal Images/Cheese Board.jpg";
import ChocolateBrownee from "../../Assets/Images/Modal Images/Chocolate Brownee.jpg";
import LemonMeringue from "../../Assets/Images/Modal Images/Lemon Meringue.jpg";
import Wildberry from "../../Assets/Images/Modal Images/Wildberry.jpg";
import BananaCream from "../../Assets/Images/Modal Images/Banana Cream.jpg";

const Section7 = () =>{
    return (
        <section className="container-fluid full-menu wow slideInRight" data-wow-duration="3s">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="full-menu-title">
                            <h1>Dessert</h1>
                            <h4>AENEAN ULTRICIES MI VITAE EST</h4>
                            <img src={colorseperator} alt="color seperator"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="menu-items">
                            <span data-bs-toggle="modal" data-bs-target="#modalImages_9">
                                <a data-bs-container="body" data-bs-toggle="tooltip" data-bs-placement="top"
                                    data-bs-delay="100" data-bs-html="true"
                                    title="<b><em>Click To View The Image</em></b>">Toro pie</a>
                            </span>
                            <span className="custom-rounded-dots"></span>
                            <span>$23</span>
                            <p>Sed quia non numquam eius modi tempora</p>
                        </div>
                        {/* <!-- FOR MODAL IMAGE START--> */}
                        <div className="modal fade" id="modalImages_9" tabindex="-1" aria-labelledby="ModalImages_9"
                            aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="ModalImages_9">Toro Pie</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <img className="img-fluid w-100" src={ToroPie}
                                            alt="Toro pie"/>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- FOR MODAL IMAGE END--> */}
                    </div>
                    <div className="col-md-6">
                        <div className="menu-items">
                            <span data-bs-toggle="modal" data-bs-target="#modalImages_10">
                                <a data-bs-container="body" data-bs-toggle="tooltip" data-bs-placement="top"
                                    data-bs-delay="100" data-bs-html="true"
                                    title="<b><em>Click To View The Image</em></b>">Creme Brulee</a>
                            </span>
                            <span className="custom-rounded-dots"></span>
                            <span>$26</span>
                            <p>Fingerling Potatoes, Ossetra Caviar</p>
                        </div>
                        {/* <!-- FOR MODAL IMAGE START--> */}
                        <div className="modal fade" id="modalImages_10" tabindex="-1" aria-labelledby="ModalImages_10"
                            aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="ModalImages_10">Creme Brulee</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <img className="img-fluid w-100" src={CremeBrowlee}
                                            alt="Creme Brulee"/>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- FOR MODAL IMAGE END--> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="menu-items">
                            <span data-bs-toggle="modal" data-bs-target="#modalImages_11">
                                <a data-bs-container="body" data-bs-toggle="tooltip" data-bs-placement="top"
                                    data-bs-delay="100" data-bs-html="true"
                                    title="<b><em>Click To View The Image</em></b>">Tarte Tatin</a>
                            </span>
                            <span className="custom-rounded-dots"></span>
                            <span>$153</span>
                            <p>Sed quia non numquam eius modi tempora</p>
                        </div>
                        {/* <!-- FOR MODAL IMAGE START--> */}
                        <div className="modal fade" id="modalImages_11" tabindex="-1" aria-labelledby="ModalImages_11"
                            aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="ModalImages_11">Tarte Tatin</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <img className="img-fluid w-100" src={TarteTatin}
                                            alt="Tarte Tatin"/>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- FOR MODAL IMAGE END--> */}
                    </div>
                    <div className="col-md-6">
                        <div className="menu-items">
                            <span data-bs-toggle="modal" data-bs-target="#modalImages_12">
                                <a data-bs-container="body" data-bs-toggle="tooltip" data-bs-placement="top"
                                    data-bs-delay="100" data-bs-html="true"
                                    title="<b><em>Click To View The Image</em></b>">Cheese Board</a>
                            </span>
                            <span className="custom-rounded-dots"></span>
                            <span>$45</span>
                            <p>Nemo enim ipam voluptatem voluptas</p>
                        </div>
                        {/* <!-- FOR MODAL IMAGE START--> */}
                        <div className="modal fade" id="modalImages_12" tabindex="-1" aria-labelledby="ModalImages_12"
                            aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="ModalImages_12">Cheese Board</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <img className="img-fluid w-100" src={CheeseBoard}
                                            alt="Cheese Board"/>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- FOR MODAL IMAGE END--> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="menu-items">
                            <span data-bs-toggle="modal" data-bs-target="#modalImages_13">
                                <a data-bs-container="body" data-bs-toggle="tooltip" data-bs-placement="top"
                                    data-bs-delay="100" data-bs-html="true"
                                    title="<b><em>Click To View The Image</em></b>">Chocolate brownie</a>
                            </span>
                            <span className="custom-rounded-dots"></span>
                            <span>$87</span>
                            <p>Fingerling Potatoes, Ossetra Caviar</p>
                        </div>
                        {/* <!-- FOR MODAL IMAGE START--> */}
                        <div className="modal fade" id="modalImages_13" tabindex="-1" aria-labelledby="ModalImages_13"
                            aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="ModalImages_13">Chocolate Brownie</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <img className="img-fluid w-100" src={ChocolateBrownee}
                                            alt="Chocolate brownie"/>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- FOR MODAL IMAGE END--> */}
                    </div>
                    <div className="col-md-6">
                        <div className="menu-items chef-selection-item">
                            <div className="chef-selection"><span>Sale 20%</span></div>
                            <br/>
                            <span data-bs-toggle="modal" data-bs-target="#modalImages_14">
                                <a data-bs-container="body" data-bs-toggle="tooltip" data-bs-placement="top"
                                    data-bs-delay="100" data-bs-html="true"
                                    title="<b><em>Click To View The Image</em></b>">Lemon Meringue</a>
                            </span>
                            <span className="custom-rounded-dots"></span>
                            <span>$211</span>
                            <p>Sed quia non numquam eius modi tempora</p>
                        </div>
                        {/* <!-- FOR MODAL IMAGE START--> */}
                        <div className="modal fade" id="modalImages_14" tabindex="-1" aria-labelledby="ModalImages_14"
                            aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="ModalImages_14">Lemon Meringue</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <img className="img-fluid w-100" src={LemonMeringue}
                                            alt="Lemon Meringue"/>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- FOR MODAL IMAGE END--> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="menu-items">
                            <span data-bs-toggle="modal" data-bs-target="#modalImages_15">
                                <a data-bs-container="body" data-bs-toggle="tooltip" data-bs-placement="top"
                                    data-bs-delay="100" data-bs-html="true"
                                    title="<b><em>Click To View The Image</em></b>">Banana Cream</a>
                            </span>
                            <span className="custom-rounded-dots"></span>
                            <span>$30</span>
                            <p>Nemo enim ipam voluptatem voluptas</p>
                        </div>
                        {/* <!-- FOR MODAL IMAGE START--> */}
                        <div className="modal fade" id="modalImages_15" tabindex="-1" aria-labelledby="ModalImages_15"
                            aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="ModalImages_15">Banana Cream</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <img className="img-fluid w-100" src={BananaCream}
                                            alt="Banana Cream"/>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- FOR MODAL IMAGE END--> */}
                    </div>
                    <div className="col-md-6">
                        <div className="menu-items">
                            <span data-bs-toggle="modal" data-bs-target="#modalImages_16">
                                <a data-bs-container="body" data-bs-toggle="tooltip" data-bs-placement="top"
                                    data-bs-delay="100" data-bs-html="true"
                                    title="<b><em>Click To View The Image</em></b>">Wildberry</a>
                            </span>
                            <span className="custom-rounded-dots"></span>
                            <span>$180</span>
                            <p>Excepteur sint occaecat cupidatat</p>
                        </div>
                        {/* <!-- FOR MODAL IMAGE START--> */}
                        <div className="modal fade" id="modalImages_16" tabindex="-1" aria-labelledby="ModalImages_16"
                            aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="ModalImages_16">Wildberry</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <img className="img-fluid w-100" src={Wildberry}
                                            alt="Wildberry"/>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- FOR MODAL IMAGE END--> */}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Section7;