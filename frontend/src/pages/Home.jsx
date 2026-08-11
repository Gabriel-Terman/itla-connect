import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <h1>Muro Interactivo</h1>

        <PostCard />
        <PostCard />
        <PostCard />
      </main>

      <Footer />
    </>
  );
}

export default Home;