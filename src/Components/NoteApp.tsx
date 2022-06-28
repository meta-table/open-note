import { INote } from '../Note'
import '../Styles/NoteApp.css'


interface INoteViewerProperties {
    activeNote: INote;
    onNoteModify(type: string, data:string): void;
}

function NoteAppViewer({ activeNote, onNoteModify }: INoteViewerProperties) {
    return (
        <div className='note-app-viewer' id={activeNote.id}>
            <input
                type='text'
                className='note-app-viewer__input'
                placeholder='Untitled Note'
                onChange={e => onNoteModify('title', e.target.value)}
                value={activeNote.content.title}
            />
            <br/>
            <textarea
                className='note-app-viewer__input'
                placeholder='Type something here...'
                onChange={e => onNoteModify('body', e.target.value)}
                value={activeNote.content.body}
            />
        </div>
    )
}

interface INoteAppProperties {
    activeNote?: INote;
    onNoteModify(type: string, data:string): void;
}

function NoteApp({ activeNote, onNoteModify }: INoteAppProperties) {
    return (
        <div className='note-app'>
            {activeNote ? <NoteAppViewer activeNote={activeNote} onNoteModify={onNoteModify}/> : <span/>}
        </div>
    )
}

export { NoteApp };