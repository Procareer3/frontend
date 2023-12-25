const NavBar = () => {
    return ( 
        <div data-bs-spy="scroll" data-bs-root-margin="0px 0px -40%" data-bs-target="/navId" data-bs-smooth-scroll="true" tabindex="0" >

            <ul className="nav sticky-top nav-tabs flex-column flex-sm-row" id="navId" role="tablist">
                <li className="nav-item" role="presentation">
                    <a href="/avatar" className="nav-link active" data-toggle="tab" aria-current="page">Home</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">Tech</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="/tech" >Technology Summary</a>
                        <a className="dropdown-item" href="/expertise">Expertise</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item text-info" href="/contact">Send Message</a>
                    </div>
                </li>
                <li className="nav-item" role="presentation">
                    <a href="/experience" className="nav-link" data-target="/experience" data-toggle="tab">Experience</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a href="/accomplish" className="nav-link" data-toggle="tab">Accomplishments</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a href="/education" className="nav-link" data-toggle="tab">Education</a>
                </li>
            </ul>
            
            <div className="tab-content anchor" id="myTabContent">
                <div className="tab-pane fade show active" id="tab1Id" role="tabpanel"></div>
                <div className="tab-pane fade" id="tab2Id" role="tabpanel"></div>
                <div className="tab-pane fade" id="tab3Id" role="tabpanel"></div>
                <div className="tab-pane fade" id="tab4Id" role="tabpanel"></div>
                <div className="tab-pane fade" id="tab5Id" role="tabpanel"></div>
            </div>
        </div>
     );
}
 
export default NavBar;