import { INote } from '../Note'

import '../Styles/Explorer.css'

interface IExplorerItemProperties {
    note: INote;
    onNoteOpen(note: INote): void;
    onDeleteNote(note: INote): void;
}

function ExplorerItem({ note, onNoteOpen, onDeleteNote }: IExplorerItemProperties) {
    return <div className='explorer-item'>
       <button className='explorer-item note__open' onClick={() => onNoteOpen(note)}>{note.content.title || 'Untitled Note'}</button>
        <button className='explorer-item note__delete' onClick={() => onDeleteNote(note)}>X</button>
    </div>
}

interface IExplorerProperties {
    notes: INote[];
    onNoteOpen(note: INote): void;
    onDeleteNote(note: INote): void;
};

export const Explorer = ({ notes, onNoteOpen, onDeleteNote }: IExplorerProperties) => {
    const sortedNotes = notes.sort((a, b) => a.content.title.localeCompare(b.content.title));
    
    return <div className='explorer'>
        <h1><a href='https://github.com/meta-table/open-note'>open-note</a></h1>
        <p>open-source note-taking</p>
        <ul className='list explorer-items'>
            {sortedNotes.map((n, i) => <li key={i}>
                <ExplorerItem note={n} onNoteOpen={onNoteOpen} onDeleteNote={onDeleteNote}/>
            </li>)}
        </ul>
    </div>
};