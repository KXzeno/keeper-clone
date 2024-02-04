"use client";
import Footer from './Footer';
import Note from './Note';
import '../globals.css';
import Notes from '../notes.js';

export default function App() {
    return (
        <div>
            {Notes.map(p => 
            <Note 
                key={p.key}
                title={p.title}
                content={p.content}
            />
            )}
            <Footer />
            <script src=".\index.js" type="text/jsx"></script>
        </div>
    );
}
