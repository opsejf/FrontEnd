import React from 'react';
import Navbar from './navComponent.js';
import Footer from './Footer.js';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <>
    <header className="layoutHeader" id="layoutHeader">
        <Navbar/>
    </header>
    <main>
        <section className="sectionOne">
            <Outlet/>
        </section>
    </main>
    <footer>
        <Footer />
    </footer>
    </>
  )
}

export default Layout;