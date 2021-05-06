import './StickyNote.css'

export default function StickyNote() {

    return (
        <article className="sticky-note-container">

            <div className="sticky-note">
                <li className="pin"></li>
                <div className="sticky-note-top"></div>
                <p>
                    Type <b> 'open about'</b> to read my bio  
                </p>
                <p>
                    Type <b> 'open projects'</b> to see some projects
                </p>
                <p>
                    Click the folder to see github repos
                </p>
                <p>
                    Drag to move // 🔴 to close
                </p>
                <p>
                   *** better on desktop ***
                </p>
            </div>
        </article>
    )
}