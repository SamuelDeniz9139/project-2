const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  app.get('/getToken', mid.requiresSecure, controllers.Account.getToken);
  app.get('/getAnimes', mid.requiresLogin, controllers.Anime.getAnimes);
  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);
  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
  app.get('/logout', mid.requiresLogin, controllers.Account.logout);
  app.post('/premium', mid.requiresLogin, controllers.Account.premiumMode);
  app.post('/viewStats', mid.requiresLogin, controllers.Anime.viewStats);
  app.get('/maker', mid.requiresLogin, controllers.Anime.makerPage);
  app.post('/maker', mid.requiresLogin, controllers.Anime.makeAnime);
  app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
};
module.exports = router;
