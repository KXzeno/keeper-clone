"use client";
import { useState } from 'react';

export default function Note({ title, content, id, onClicked }) {
    return(
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button id={id} onClick={onClicked}>DELETE</button>
        </div>
    );
}
