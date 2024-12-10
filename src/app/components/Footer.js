export default function Footer() {
    return (
      <footer className="footer">
        <div className="info">
          <p>Livraison & Reprise</p>
          <p>Commandes Illimitées</p>
          <i className="fa-solid fa-cart-shopping"></i>
          
        </div>
        <form>
          <label>S'inscrire & économiser 10%</label>
          <input type="email" placeholder="email@example.com" />
          <button>S'inscrire</button>
        </form>
      </footer>
    );
  }
  