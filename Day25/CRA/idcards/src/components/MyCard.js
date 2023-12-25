import data from "../data.json";
import IDCard from "./IDCard";

const MyCard = () => {
    console.log(data)
    
    return ( 
        <div>
            <h4>
                Card
            </h4>
            {
                data.data.map((elem, i) => {
                    return <IDCard key={elem.id} name={elem.name} state={elem.des} age={elem.age}/>
                })
            }
        </div>
    );
}
 
export default MyCard;