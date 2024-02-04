"use client";
import { useState } from 'react';
import Footer from './Footer';
import Note from './Note';
import '../globals.css';
import Notes from '../notes.js';
import CreateArea from './CreateArea';


export default function App() {
    let [items, setItems] = useState([]);

    // To catch nid in lower scopes, cannot simply declare
    let [nid, setNid] = useState(Number(0));

    let addItem = (item) => {
        setNid(++nid); // Postfix returns original value before increment
        item.nid = nid;
        setItems(old => [...old, item]);
    }

    let delNote = (event) => {
        let sid = event.target.id;
        setItems(old => old.filter(({nid}) => nid != sid));
        console.log(sid, nid);
    }


    return (
        <div>
            <CreateArea 
                onAdd={addItem}
            />
            {items.map((item, index) => { 
                return(
                    <Note
                        key={index}
                        id={item.nid}
                        title={item.title}
                        content={item.content}
                        onClicked={delNote}
                    />
                )
            })}
            <Footer />
        </div>
    );
}
