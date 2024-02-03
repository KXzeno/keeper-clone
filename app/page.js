"use client";
// Global Imports
import Image from "next/image";

// Local Imports
import App from './components/App';
import Footer from './components/Footer';

const year = new Date().getFullYear();

export default function Home() {

  return (
    <App />
  );
}
