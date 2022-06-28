import { INote } from '../Note'
import '../Styles/Navbar.css'

interface INavbarItemProperties {
    index: number;
    note: INote;
    onChangeNoteState(type: string, note:INote): void;
}

function NavbarItem({ index, note, onChangeNoteState }: INavbarItemProperties) {
    return <div className={`navbar-item${index === 0 ? ' item--active' : ' item--inactive'}`}>
        <button className='navbar-item note__select' onClick={() => onChangeNoteState('add', note)}>{note.content.title || 'Untitled Note'}</button>
        <button className='navbar-item note__close' onClick={() => onChangeNoteState('remove', note)}>X</button>
    </div>
}

interface INavbarProperties {
    activeNotes: INote[];
    onAddNote(): void;
    onChangeNoteState(type: string, note:INote): void;
    onChangePermission(): void;
}

function Navbar({ activeNotes, onAddNote, onChangeNoteState, onChangePermission }: INavbarProperties) {
    return <nav className='navbar'>
        <ul className='list navbar-items'>
            {activeNotes.map((n, i) => <li key={i}>
                <NavbarItem index={i} note={n} onChangeNoteState={onChangeNoteState}/>
            </li>)}
        </ul>
        <button className='navbar note__add' onClick={onAddNote}>+</button>
    </nav>
}

export default Navbar;