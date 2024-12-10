import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import RelatedProducts from './components/RelatedProducts';
import Recommendations from './components/Recommendations';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main>
        <ProductDetails />
        <RelatedProducts />
        <Recommendations />
      </main>
      <Footer />
    </div>
  );
}
