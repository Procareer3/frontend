import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return ( 
        <h1>Hello World, this is React Without CRA!</h1>
     );
}

//create root
 let root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>);
 
export default App;