import React from 'react';
import Navbar from './Components/Navbar';

const App = () => {

    
    return <div className='nexus'>
        <div className='navbar-container'>
            <Navbar activeNotes={[{}, {}, {}]}/>
        </div>
    </div>
}

export default App;