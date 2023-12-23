const Greetings = (props) => {
    const styles = {
        color: "purple",
        border: '5px solid purple'
    }

    const styles2 = {
        color: "cyan",
    }

    return ( 
        <div >
            <h1 style={styles}>Hello, {props.name}!</h1>
            <h1 style={styles2}>Welcome To React Project!</h1>
        </div>
     );
}
 
export default Greetings;