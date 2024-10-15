function Banner({ text, backgroundImage }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Chez vous, <span className="move-down">partout et ailleurs</span> */}
      {text}
    </div>
  );
}

export default Banner;
