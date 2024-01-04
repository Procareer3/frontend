import {Outlet} from 'react-router-dom';

const Contact = () => {
    return ( 
        <div>
            <div className="d-flex justify-content-center align-items-center mb-3 w-100">
                <form className="w-50 py-5" onsubmit="formValidation()">
                    <div className="mb-3">
                        <label for="name" className="form-label">Name: </label>
                        <input type="text" className="form-control" name="" id="name" rows="3" required/>
                    </div>
            
                    <div className="mb-3">
                        <label for="email" className="form-label">Email: </label>
                        <input type="email" className="form-control" name="email" id="email" rows="3" required/>
            
                        <div className="mb-3">
                            <label for="remarks" className="form-label">Message:</label>
                            <textarea placeholder="Please enter text..." className="form-control" rows="5" required/>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary contactBtn">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <Outlet/>
        </div>
    );
}
 
export default Contact;
