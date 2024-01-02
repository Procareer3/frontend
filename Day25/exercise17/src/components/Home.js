const Home = () => {
    return ( 
        <div id="main-div">
            <div className="card text-center">
                <div className="card-body">
                    <i className="fa-solid fa-seedling fa-2xl"></i>
                    <p className="card-title">Good Greens.</p>
                    <hr></hr>
                    <p className="card-text">"A beautiful plant is like having a friend around the house." -Beth Ditto</p>
                    <hr></hr>
                    <button className="btn btn-outline-secondary"><a href="/products">Shop Now</a></button>
                </div>
            </div>
        </div>
        
    );
}
 
export default Home;