import logoWhite from "../../assets/images/logos/logo-blanc.svg";

function Footer() {
  return (
    <div className="footer">
      <img className="footer__logo" src={logoWhite} alt="Logo Blanc" />
      <p className="footer__text">
        © 2020 Kasa. All <span className="move-down">rights reserved</span>
      </p>
    </div>
  );
}

export default Footer;
