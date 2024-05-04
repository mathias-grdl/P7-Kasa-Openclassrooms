import Banner from "../../components/Banner";
import bannerImg from "../../asset/images/bannerHome.svg";
import Cards from "../../components/Cards";

function Home() {
  const banner = {
    img: bannerImg,
    style: "banner",
    text: "Chez vous, partout et ailleurs",
  };

  return (
    <div>
      {Banner(banner)}
      <Cards />
    </div>
  );
}

export default Home;
