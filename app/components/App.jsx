"use client";
import Footer from './Footer';
import Note from './Note';
import '../globals.css';
import Notes from '../notes.js';
import CreateArea from './CreateArea';

export default function App() {
    let [items, setItems] = React.useState([]);

    // To catch nid in lower scopes, cannot simply declare
    let [nid, setNid] = React.useState(Number(0));

    let addItem = (item) => {
        setNid(nid + 1); // Postfix returns original value before increment
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
            {items.map(({ nid, title, content }, index) => { 
                return(
                    <Note
                        key={index}
                        id={nid}
                        title={title}
                        content={content}
                        onClicked={delNote}
                    />
                )
            })}
            <Footer />
        </div>
    );
}
