import Hero from '../components/Hero.jsx';
import BrandStrip from '../components/BrandStrip.jsx';
import ProductRail from '../components/ProductRail.jsx';
import BrowseStyle from '../components/BrowseStyle.jsx';
import Testimonials from '../components/Testimonials.jsx';
import { PRODUCTS } from '../data/products.js';

export default function Home() {
  const newArrivals = PRODUCTS.filter((p) => p.section === 'new');
  const topSelling = PRODUCTS.filter((p) => p.section === 'top');

  return (
    <>
      <Hero />
      <BrandStrip />
      <ProductRail title="NEW ARRIVALS" products={newArrivals} viewAllTo="/shop?filter=new" />
      <hr className="divider container" />
      <ProductRail title="TOP SELLING" products={topSelling} viewAllTo="/shop?filter=top" />
      <BrowseStyle />
      <Testimonials />
    </>
  );
}
