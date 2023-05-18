import Featured from "../components/featured/Featured";
import NavBar from "../components/navBar/NavBar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <NavBar/>
      <img
        src="https://storage.prompt-hunt.workers.dev/clhjbthwp001bmb08yu6h641s_1"
        alt=""
        width="100%"
      />
      <Featured />
    </div>
  );
};

export default Home;
