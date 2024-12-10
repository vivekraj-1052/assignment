export default function ProductDetails() {
    return (
      <section className="product-details">
        <div className="product-images">
          <img src="/images/product.jpg" alt="Product" />
        </div>
        <div className="product-info">
          <h1>Cheese – appareil à raclette 1/2 roue</h1>
          <p>39,50€ / pièce</p>
          <p>Description du produit...</p>
          <button>Ajouter au panier</button>
        </div>
      </section>
    );
  }
  