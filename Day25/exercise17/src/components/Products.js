const Products = () => {
    return ( 
        <div>
            <h1 style={{textAlign:"center"}} className="inventory">Plants Inventory</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4 mb-0">
                        <img src={require('../images/plant1.jpg')}
                            className="img-fluid img-thumbnail w-100 h-75" alt="product1"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={require('../images/plant2.jpg')} className="img-fluid img-thumbnail w-100 h-75"
                            alt="product2"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={require('../images/plant3.jpg')} className="img-fluid img-thumbnail w-100 h-75"
                            alt="product3"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <img src={require('../images/plant4.jpg')} className="img-fluid img-thumbnail w-100 h-75" alt="product4"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={require('../images/plant5.jpg')} className="img-fluid img-thumbnail w-100 h-75" alt="product5"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={require('../images/plant6.jpg')} className="img-fluid img-thumbnail w-100 h-75" alt="product6"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <img src={require('../images/plant7.jpg')} className="img-fluid img-thumbnail w-100 h-75" alt="product7"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={require('../images/plant8.jpg')} className="img-fluid img-thumbnail w-100 h-75" alt="product8"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={require('../images/plant9.jpg')} className="img-fluid img-thumbnail w-100 h-75" alt="product9"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={require('../images/plant10.jpg')}className="img-fluid img-thumbnail w-100 h-75" alt="product10"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Products;