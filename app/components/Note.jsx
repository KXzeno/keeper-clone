"use client";
import { useState } from 'react';

export default function Note(Note) {
    return(
        <div className="note">
            <h1>{Note.title}</h1>
            <p>{Note.content}</p>
            <button id={Note.id} onClick={Note.onClicked}>DELETE</button>
        </div>
    );
}
