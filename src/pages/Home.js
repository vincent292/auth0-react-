import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';

function Home() {
    const { isAuthenticated,} = useAuth0();
  
  
    const buttonStyle = {
      fontSize: isAuthenticated ? '14px' : '16px',
    };


return (
    <div className="App">
      <header>
      
        <div className="contain">
          <p className="logo">Programma ya </p>
          <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <a href="#somos-proya">sobre nosotros</a>
              <a href="#nuestros-programas">nuestros programas</a>
              <a href="#caracteristicas1">caracteristicas</a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              {isAuthenticated ? (
                <>
                  <LogoutButton style={buttonStyle} />
                  <Profile style={buttonStyle} />
                 
                </>
              ) : (
                <LoginButton style={buttonStyle} />
               
              )}
            </div>
          </nav>
        </div>
      </header>
      <section id="hero">
        <h1>Aprende a programar <br /> con los mejores </h1>
        <button>aplica ya </button>
      </section>

      <section id="somos-proya">
        <div className="container">
          <div className="texto">
            <div className="img-container"></div>
            <h2>somos <span className="color-acento">programma ya!</span></h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium autem quidem rem ullam, ab temporibus delectus maiores natus quos provident hic commodi animi aspernatur sint quis deserunt voluptate! Excepturi, laborum.</p>
          </div>
        </div>
      </section>

      <section id="nuestros-programas">
        <div className="container">
          <h2>Nuestros programas </h2>
          <div className="programas">
            <div className="carta">
              <h3>programador front end</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, blanditiis! Magni asperiores quibusdam reiciendis cumque maxime ex, nihil quis consequatur, culpa doloremque eum delectus libero? Quod laudantium voluptatem officia magnam!</p>
              <button>+info</button>
            </div>
            <div className="carta">
              <h3>programador backend</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, blanditiis! Magni asperiores quibusdam reiciendis cumque maxime ex, nihil quis consequatur, culpa doloremque eum delectus libero? Quod laudantium voluptatem officia magnam!</p>
              <button>+info</button>
            </div>
            <div className="carta">
              <h3>programador fullstack</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, blanditiis! Magni asperiores quibusdam reiciendis cumque maxime ex, nihil quis consequatur, culpa doloremque eum delectus libero? Quod laudantium voluptatem officia magnam!</p>
              <button>+info</button>
            </div>
          </div>
        </div>
      </section>

      <h3 id="caracteristicas1">Caracteristicas</h3>
      <section id="caracteristicas">
        <div className="container">
          <ul>
            <li style={{ '--i': 6 }} data-icon="&#xf015">
              <a href="#">programas</a>
            </li>
            <li style={{ '--i': 5 }} data-icon="&#xf2bb">
              <a href="#">horarios</a>
            </li>
            <li style={{ '--i': 4 }} data-icon="&#xf03a">
              <a href="#">categorias</a>
            </li>
            <li style={{ '--i': 3 }} data-icon="&#xf07">
              <a href="#">horarios</a>
            </li>
            <li style={{ '--i': 2 }} data-icon="&#xe533">
              <a href="#">caracteristicas</a>
            </li>
            <li style={{ '--i': 1 }} data-icon="&#x40">
              <a href="#">contactos</a>
            </li>
          </ul>
        </div>
      </section>

      <section id="final">
        <h2>Listo para programar</h2>
        <button>Aplica ya</button>
      </section>

      <footer>
        <div className="container">
          <ul>
            <li>
              <a href="#" style={{ '--clr0': '#ff0050', '--clr1': '#9990030', '--clr2': '#ff266a' }}>
                <i className="fa-brands fa-x-tiktok"></i>
              </a>
            </li>
            <li>
              <a href="#" style={{ '--clr0': '#4267b2', '--clr1': '#283e6b', '--clr2': '#5a7cc2' }}>
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" style={{ '--clr0': '#cd201f', '--clr1': '#7b1313', '--clr2': '#' }}>
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" style={{ '--clr0': '#1da1f2', '--clr1': '#09639a', '--clr2': '#3faff4' }}>
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </li>
          </ul>
          <p>&copy;programaya 2021</p>
        </div>
      </footer>

      
    </div>
  );
              }
export default Home;