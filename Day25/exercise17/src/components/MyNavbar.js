import { Link } from "react-router-dom";

const MyNavBar = () => {
    return ( 
    <div>
        <h5 className="bg-secondary">New Arrivals</h5>
        <nav className="navbar navbar-expand-sm" id="navId">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"><h5>Good Greens.</h5></Link>
                <button className="navbar-toggler navbar-toggler-icon d-lg-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page"><i className="fa-solid fa-house"></i>Home<span className="visually-hidden">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-us" className="nav-link active"><i className="fa-solid fa-rectangle-list"></i>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link active"><i className="fa-solid fa-info"></i>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact-us" className="nav-link active"  ><i className="fa-solid fa-address-card"></i>Contact Us</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button type="button" data-bs-toggle="modal" data-bs-target="#modalId">
                                <i className="fa-solid fa-right-to-bracket"></i>Log In
                            </button>
                        </li>
                    </ul>
                    <div className="modal fade" id="modalId" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalTitleId">Welcome</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email: </label>
                                            <input type="email" className="form-control" name="email" id="email" rows="3" required/>
                                    
                                            <label htmlFor="email" className="form-label">Password: </label>
                                            <input type="password" className="form-control" name="password" id="password" rows="3" required/>
                                    
                                            <div className="mb-3">
                                                <button type="submit" className="btn btn-primary modalBtn">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    )
}
 
export default MyNavBar;