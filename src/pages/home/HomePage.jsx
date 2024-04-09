import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ProductsList from "../../components/products/ProductsList";

function HomePage() {
  return (
    <>
      <Navbar  />
      <ProductsList />
      <Footer />
    </>
  );
}

export default HomePage;
