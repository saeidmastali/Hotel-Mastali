import img1 from "../../Assets/Images/hotelpics/1.webp";
import img2 from "../../Assets/Images/hotelpics/2.webp";
import img3 from "../../Assets/Images/hotelpics/2.webp";
import img4 from "../../Assets/Images/hotelpics/4.webp";
import img5 from "../../Assets/Images/hotelpics/8.webp";
import img6 from "../../Assets/Images/hotelpics/5.webp";
import img7 from "../../Assets/Images/hotelpics/6.webp";
import img8 from "../../Assets/Images/hotelpics/7.webp";
import img9 from "../../Assets/Images/hotelpics/9.jpg";




const Section9 = () =>{
    return (
        <section className="container-fluid gallery wow fadeInLeftBig" data-wow-duration="3s">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="gallery-images">
                        <i className="fas fa-search-plus"></i>
                        <img className="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#image-1"
                            src={img1} alt="1"/>
                    </div>
                    {/* <!-- MODAL IMAGE START --> */}
                    <div className="modal fade" id="image-1" tabindex="-1" aria-labelledby="image-1-header"
                        aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="image-1-header">Image - 1</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                <div className="modal-footer">
                                    <img className="img-fluid rounded w-100" src={img1} alt="1"/>
                                </div>
                                    <button type="button" className="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- MODAL IMAGE END --> */}
                </div>
                <div className="col-md-4">
                    <div className="gallery-images">
                        <i className="fas fa-search-plus"></i>
                        <img className="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#image-2"
                            src={img2} alt="2"/>
                    </div>
                    {/* <!-- MODAL IMAGE START --> */}
                    <div className="modal fade" id="image-2" tabindex="-1" aria-labelledby="image-2-header"
                        aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="image-2-header">Image - 2</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <img className="img-fluid rounded w-100" src={img2} alt="2"/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- MODAL IMAGE END --> */}
                </div>
                <div className="col-md-4">
                    <div className="gallery-images">
                        <i className="fas fa-search-plus"></i>
                        <img className="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#image-3"
                            src={img3} alt="3"/>
                    </div>
                    {/* <!-- MODAL IMAGE START --> */}
                    <div className="modal fade" id="image-3" tabindex="-1" aria-labelledby="image-3-header"
                        aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="image-3-header">Image - 3</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <img className="img-fluid rounded w-100" src={img3} alt="3"/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- MODAL IMAGE END --> */}
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="gallery-images">
                        <i className="fas fa-search-plus"></i>
                        <img className="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#image-4"
                            src={img4} alt="4"/>
                    </div>
                    {/* <!-- MODAL IMAGE START --> */}
                    <div className="modal fade" id="image-4" tabindex="-1" aria-labelledby="image-4-header"
                        aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="image-4-header">Image - 4</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <img className="img-fluid rounded w-100" src={img4} alt="4"/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- MODAL IMAGE END --> */}
                </div>
                <div className="col-md-4">
                    {/* <div className="gallery-images">
                        <i className="fas fa-search-plus"></i>
                        <img className="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#image-5"
                            src={img5} alt="5"/>
                    </div> */}
                    <div className="gallery-images">
                        <i className="fas fa-search-plus"></i>
                        <img className="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#image-9"
                            src={img9} alt="5"/>
                    </div>
                    {/* <!-- MODAL IMAGE START --> */}
                    {/* <div className="modal fade" id="image-5" tabindex="-1" aria-labelledby="image-5-header"
                        aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="image-5-header">Image - 5</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <img className="img-fluid rounded w-100" src={img5} alt="5"/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="modal fade" id="image-9" tabindex="-1" aria-labelledby="image-5-header"
                        aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="image-5-header">Image - 5</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <img className="img-fluid rounded w-100" src={img9} alt="5"/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- MODAL IMAGE END --> */}
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="gallery-images">
                        <i className="fas fa-search-plus"></i>
                        <img className="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#image-6"
                            src={img6} alt="6"/>
                    </div>
                    {/* <!-- MODAL IMAGE START --> */}
                    <div className="modal fade" id="image-6" tabindex="-1" aria-labelledby="image-6-header"
                        aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="image-6-header">Image - 6</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <img className="img-fluid rounded w-100" src={img6} alt="6"/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- MODAL IMAGE END --> */}
                </div>
                <div className="col-md-4">
                    <div className="gallery-images">
                        <i className="fas fa-search-plus"></i>
                        <img className="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#image-7"
                            src={img7} alt="7"/>
                    </div>
                    {/* <!-- MODAL IMAGE START --> */}
                    <div className="modal fade" id="image-7" tabindex="-1" aria-labelledby="image-7-header"
                        aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="image-7-header">Image - 7</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <img className="img-fluid rounded w-100" src={img7} alt="7"/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- MODAL IMAGE END --> */}
                </div>
                <div className="col-md-4">
                    <div className="gallery-images">
                        <i className="fas fa-search-plus"></i>
                        <img className="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#image-8"
                            src={img8} alt="8"/>
                    </div>
                    {/* <!-- MODAL IMAGE START --> */}
                    <div className="modal fade" id="image-8" tabindex="-1" aria-labelledby="image-8-header"
                        aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                            <div className="modal-content">``
                                <div className="modal-header">
                                    <h5 className="modal-title" id="image-8-header">Image - 8</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <img className="img-fluid rounded w-100" src={img8} alt="8"/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- MODAL IMAGE END --> */}
                </div>
                
            </div>
        </div>
    </section>
    )
}

export default Section9;