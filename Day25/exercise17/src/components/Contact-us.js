const ContactUs = () => {
    return ( 
        <div>
            <h1 className="mb-3" style={{textAlign: "center"}}>Contact Us</h1>
            <div className="mb-3 d-flex w-100 justify-content-center">
                <form className="w-50" onsubmit="formValidation()">
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
                            <button type="submit" className="btn contactBtn">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default ContactUs;