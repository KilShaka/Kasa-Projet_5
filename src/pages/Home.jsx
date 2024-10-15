import Rentings from "../components/ui/Rentings";
import Banner from "../components/ui/Banner";
import falaises from "../assets/images/falaises.png";

function Home() {
  return (
    <div>
      <Banner
        backgroundImage={falaises}
        text={
          <>
            Chez vous, <span className="move-down">partout et ailleurs</span>
          </>
        }
      />
      <Rentings />
    </div>
  );
}

export default Home;
