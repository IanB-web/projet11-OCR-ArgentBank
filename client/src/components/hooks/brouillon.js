 // état pour stocker le token utilisateur
  const [userToken, setUserToken] = useState();

  // Fonction pour gérer la connection de l'utilisateur et stocker le token
  const handleLogin = () => {
    // ici je rajoute la requete au backend pour vérifier les infos et obtenir le token

    const token = "token_utilisateur"; // mettre ici la logique de génération du token

    // Stockage du token dans le localStorage
    localStorage.setItem("userToken", token);
    setUserToken(token);
  };

  // Fonction pour gérer la déconnection de l'utilisateur
  const HandleLogout = () => {
    // suppression du token dans le localStorage
    localStorage.removeItem("userToken");
    setUserToken("");
  };