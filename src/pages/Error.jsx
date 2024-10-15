function Error() {
  return (
    <div className="error">
      <h2 className="error__numbers">404</h2>
      <p className="error__text">
        Oups! La page que{" "}
        <span className="move-down">vous demandez n'existe pas.</span>
      </p>
      <p className="error__toHome">Retourner sur la page d'accueil</p>
    </div>
  );
}

export default Error;
