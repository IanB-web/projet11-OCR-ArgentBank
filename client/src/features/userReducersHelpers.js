/**
 * gestion de la mise à jour du message d'état du nom utilisateur rejeté / réussi
 */
export const handleUpdateUserNameRejected = (state, action) => {
    state.statusMessage = action.payload.message;
  };
  
  export const handleUpdateUserNameFullfilled = (state, action) => {
    state.userInfo = action.payload.body;
    state.statusMessage = action.payload.message;
  };
  
/**
*   met à jour le message d'état pour indiquer que la requete de mise a jour du nom utilisateur est en cours d'envoi
*/ 
  export const handleUpdateUserNamePending = (state) => {
    state.statusMessage = "Sending request...";
  };
  
/**
  * Lorsqu'une demande de profil d'utilisateur est réussie, cette fonction met à jour l'état du magasin pour indiquer que l'utilisateur est connecté et met à jour les informations de l'utilisateur avec les données fournies dans l'action.
*/ 
  export const handleGetUserProfileFullfilled = (state, action) => {
    state.isLogged = true;
    state.userInfo = action.payload.body;
  };

/*
*  met à jour le message d'état avec le message d'erreur reçu lorsqu'une tentative de connexion d'utilisateur échoue.
*/
  export const handleFetchUserByEmailRejected = (state, action) => {
    state.statusMessage = action.payload.message;
  };
  
/**
 * si la connexion d'utilisateur est réussie, cette fonction met à jour l'état du magasin pour indiquer que l'utilisateur est connecté, stocke éventuellement le jeton dans le stockage local ou de session en fonction de l'option "rememberMe", et met à jour le message d'état avec un message de succès ou un autre message fourni dans l'action.
 */
  export const handleFetchUserByEmailFullfilled = (state, action) => {
    const storage = action.meta.arg.rememberMe ? localStorage : sessionStorage;
    state.isLogged = true;
    storage.setItem("token", action.payload.body.token);
    state.statusMessage = action.payload.message;
  };
  
  /**
   * met à jour le message d'état pour indiquer que la connexion de l'utilisateur est en cours.
   */
  export const handleFetchUserByEmailPending = (state) => {
    state.statusMessage = "Logging in...";
  };