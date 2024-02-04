"use client";
export default function Note(Note) {
    return(
        <div className="note">
            <h1>{Note.title}</h1>
            <p>{Note.content}</p>
        </div>
    );
}
