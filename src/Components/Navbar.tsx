import React from 'react';

const getItemStatus = (index: number): string => {
    if (index === 0)
        return 'active';
    else if (index === 1)
        return 'neighbor';
    
    return '';
}

interface NavebarItemProps {
    index:number;
}

const NavbarItem = ({ index }: NavebarItemProps) => {
    return <div>
        <button className='navbar-item item__open'>Name</button>
        <button className='navbar-item item__close'>Close</button>
    </div>
}




interface NavbarProps {
    activeNotes: {}[];
}

const Navbar = ({ activeNotes }: NavbarProps) => {
    return <nav className='navbar'>
        <button className='navbar inline-button'>R/W</button>
        <ul className='active-notes'>
            {activeNotes.map((n, i) => <li className={getItemStatus(i)} key={i}>
                <NavbarItem index={i} />
            </li>)}
        </ul>
        <button className='navbar inline-button'>Add</button>
    </nav>
}

export default Navbar;