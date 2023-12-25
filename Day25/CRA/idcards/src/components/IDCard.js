const IDCard = (props) => {
    const colors = ["bg-warning", "bg-secondary",  "bg-primary", "bg-success", "bg-info", "bg-danger"];

    let colorIndx = props.key;

    return ( <div>
        <div className={`card w-25 float-start my-1 mx-1 ${colors[colorIndx]}`}>
            <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text">{props.state}</p>
                <p className="card-text">{props.age}</p>
            </div>
        </div>
        
    </div> );
}
 
export default IDCard;