import { useState } from 'react';
import { Explorer } from './Components/Explorer'
import Navbar from './Components/Navbar'
import { NoteApp } from './Components/NoteApp'
import { INote } from './Note'

import './Styles/App.css'

const App = () => {
    const [notes, setNotes] = useState<INote[]>([]);
    const [activeNotes, setActiveNotes] = useState<INote[]>([]);

    const updateActiveNotes = (type: string, note: INote) => {
        let newActiveNotes: INote[] = [...activeNotes];
        let indexOfNote: number = -1;

        newActiveNotes.forEach((n, i) => {
            if (n.id !== note.id)
                return;

            indexOfNote = i;
        });

        if (indexOfNote !== -1)
            newActiveNotes.splice(indexOfNote, 1);

        if (type === 'add')
            setActiveNotes([note, ...newActiveNotes]);
        if (type === 'remove')
            setActiveNotes(newActiveNotes);
    }

    const addNote = () => {
        const currentDate:number = Date.now();
        let newNote:INote = {
            id: (~~(Math.random() * 1E8)).toString(),
            content: {title: '', body: ''},
            date: {created: currentDate, updated: currentDate},
            meta: {parent: [], permission: 'writable'}
        };

        setNotes([...notes, newNote]);
        updateActiveNotes('add', newNote);
    }

    const onDeleteNote = (note: INote) => {
        activeNotes.indexOf(note) !== -1 && updateActiveNotes('remove', note);

        let newNotes: INote[] = [...notes];
        let indexOfNote: number = newNotes.indexOf(note);

        newNotes.splice(indexOfNote, 1);

        setNotes(newNotes);
    }

    const changeNotePermission = () => {
        let newNote: INote = Object.assign({}, activeNotes[0]);
        let permission: string = newNote.meta.permission;

        if (permission === 'writable')
            permission = 'read_only';
        else if (permission === 'read_only')
            permission = 'writable';

        newNote.meta.permission = permission;
        updateActiveNotes('add', newNote);
    }

    const modifyNoteContent = (type:string, data:string, index: (number | void)) => {
        let newNotes = [...notes];
        let indexOfNote: number = index || newNotes.indexOf(activeNotes[0]);

        if (indexOfNote === -1)
            return;

        if (type === 'title')
            newNotes[indexOfNote].content.title = data;
        else if (type === 'body')
            newNotes[indexOfNote].content.body = data;
            
        setNotes(newNotes);
    }

    const onNoteOpen = (note:INote) => {
        updateActiveNotes('add', note);
    }

    return (
        <div className='App'>
            <div className='explorer-container'>
                <Explorer notes={notes} onNoteOpen={onNoteOpen} onDeleteNote={onDeleteNote}/>
            </div>
            <div className='main-container'>
                <div className='nav-container'>
                    <Navbar
                        activeNotes={activeNotes}
                        onAddNote={addNote}
                        onChangeNoteState={updateActiveNotes}
                        onChangePermission={changeNotePermission}
                    />
                </div>
                <div className='note-container'>
                    <NoteApp activeNote={activeNotes[0]} onNoteModify={modifyNoteContent}/>
                </div>
            </div>
        </div>
    );
}


//<Note activeNotes={activeNotes} onAddNote={onAddNote} onModifyContent={onModifyContent}/>
export default App;