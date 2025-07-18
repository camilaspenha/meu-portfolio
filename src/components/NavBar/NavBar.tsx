import { useEffect } from 'react';
import { Offcanvas } from 'bootstrap';

import styles from "./NavBar.module.css"

const NavBar = () => {
    useEffect(() => {
      const offcanvasElement = document.getElementById('offcanvasExample');
      if (!offcanvasElement) return;

      const instance = Offcanvas.getOrCreateInstance(offcanvasElement);

      document.querySelectorAll('#offcanvasExample .nav-link').forEach(link => {
        link.addEventListener('click', () => {
          instance.hide();
        });
      });
    }, []);

  return (
    <>
      <nav className="navbar position-fixed w-100" style={{zIndex: "999"}} data-bs-theme="light">
          <div className="container justify-content-end">
            
            <button className={`navbar-toggler ${styles.btnTogglerCustomizado}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>

        <div className={`offcanvas offcanvas-end px-3 ${styles.offcanvasPersonalizado}`}  id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" data-bs-scroll="true" data-bs-backdrop="false">
            <div className="offcanvas-header" style={{zIndex: "1000",borderBottom: "1px solid grey"}}>
              <div>
                <h5 className='mb-0 mt-3'>Camila Penha</h5>
                <h6 className='mt-2 accent-color'>Portfólio</h6>
              </div>
              <button type="button" className="btn-close mt-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <nav className="navbar">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#hero">Início</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio">Portfólio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">Sobre</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#resume">Currículo</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contato</a>
                  </li>
                </ul>
              </nav>
            </div>
        </div>
    </>
  )
}

export default NavBar
