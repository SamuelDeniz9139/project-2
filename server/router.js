const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  app.get('/getToken', mid.requiresSecure, controllers.Account.getToken);
  app.get('/getAnimes', mid.requiresLogin, controllers.Anime.getAnimes);
  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);
  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
  app.post('/change', mid.requiresSecure, mid.requiresLogout, controllers.Account.change);
  app.get('/logout', mid.requiresLogin, controllers.Account.logout);
  app.get('/premium', mid.requiresLogin, controllers.Anime.premiumMode);
  app.get('/maker', mid.requiresLogin, controllers.Anime.makerPage);
  app.post('/maker', mid.requiresLogin, controllers.Anime.makeAnime);
  app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
};
module.exports = router;
