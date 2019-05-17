import React, { useState } from 'react';
import Sidebar from './Sidebar';
import styles from './App.css';

export default function App() {
  const [selected, updateSelected] = useState('home');

  const content = {
    home: 'Home',
    about: 'About section',
    blog: 'No Blog Posts Yet...',
    contact: 'Nah..'
  };

  return (
    <section className={styles.app}>
      <Sidebar>
        <a onClick={() => updateSelected('home')} href="#">Home</a>
        <a onClick={() => updateSelected('about')} href="#">About</a>
        <a onClick={() => updateSelected('blog')} href="#">Blog</a>
        <a onClick={() => updateSelected('contact')} href="#">Contact</a>
      </Sidebar>
      <p>{content[selected]}</p>
    </section>

  );
}
