export default function Recommendations() {
    return (
      <section className="recommendations">
        <h2>Ces produits pourraient vous intéresser</h2>
        <div className="products">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="product-card">
              <img src="/images/table.jpg" alt="Product" />
              <p>Title</p>
              <p>0€</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  