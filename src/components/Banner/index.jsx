import "./index.css";

function Banner({ img, style, text }) {
  return (
    <div className={style}>
      <img src={img} alt="Bannière kasa" />
      <p>{text}</p>
    </div>
  );
}

export default Banner;
