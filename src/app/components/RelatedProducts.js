export default function RelatedProducts() {
    return (
      <section className="related-products">
        <h2>Articles Similaires</h2>
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
  