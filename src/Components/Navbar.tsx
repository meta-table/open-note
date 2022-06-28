import React from 'react';

export default class Navbar extends React.PureComponent {
    #activeNotes = []

    NavbarItem = () => {
        return <div></div>
    }

    render () {
        return <nav className='navbar'>
            <button className='navbar inline-button'>R/W</button>
            <ul className='active-notes'>
                {this.#activeNotes.map((n, i) => <li key={i}>
                    <this.NavbarItem/>
                </li>)}
            </ul>
            <button className='navbar inline-button'>Add</button>
        </nav>
    }
}