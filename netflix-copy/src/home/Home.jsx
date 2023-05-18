import Featured from "../components/featured/Featured";
import NavBar from "../components/navBar/NavBar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Featured type="series" />
    </div>
  );
};

export default Home;
