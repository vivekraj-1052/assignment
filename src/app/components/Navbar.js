import Link from "next/link";

export default function Navbar() {
  return (
    <header className="header-container">
      
      <div className="top-section">
        
        <div className="logo">
          <img
            src="/weframetechcom_logo.jpeg"
            alt="weFrame Tech"
            className="logo-image"
          />
        </div>

        
        <input className="search-bar" placeholder="Search" />

        
        <nav className="nav-links primary-nav">
          <Link href="/inspirations" className="cart">
            Inspirations
          </Link>
          <Link href="/Mes favoris" className="cart">
            Favoris
          </Link>
        </nav>

        
        <div className="controls">
          <button className="blue-button">Painer</button>
          <select className="dropdown">
            <option>Fr</option>
          </select>
        </div>
      </div>

      
      <div className="secondary-nav">
        <nav className="nav-links secondary-links">
          <Link href="/art-de-la-table" className="nav-item">
           ART-DE-LA-TABLE
          </Link>
          <Link href="/mobilier" className="nav-item">
            MOBILIER
          </Link>
          <Link href="/nappage" className="nav-item">
            NAPPAGE
          </Link>
          <Link href="/materiel-de-salle" className="nav-item">
            MATERIAL DE SALLE 
          </Link>
          <Link href="/cuisine" className="nav-item">
            Cuisine
          </Link>
          <Link href="/Barbecue" className="nav-item">
           BARBECUE
          </Link>
          <Link href="/Tente" className="nav-item">
             TENTE
          </Link>
          <Link href="/Chauffage" className="nav-item">
              CHAUFFAGE
          </Link>
          <Link href="/Podium Piste de Danse" className="nav-item">
             PODIUM-PISTE DE DANSE
          </Link>
          <Link href="/Son et Lumière" className="nav-item">
             SON ET LUMIERE
          </Link>
          <Link href="/Packs" className="nav-item">
             PACKS
          </Link>
          <Link href="/Consommables" className="nav-item">
             CONSOMMABLES
          </Link>
        </nav>
      </div>
    </header>
  );
}
