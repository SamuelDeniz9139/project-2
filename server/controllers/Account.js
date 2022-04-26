const models = require('../models');

const { Account } = models;
const loginPage = (req, res) => {//sends the user to the login page
  res.render('login', { csrfToken: req.csrfToken() });
};
const logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};
const login = (req, res) => {//logs the user in
  const username = `${req.body.username}`;
  const pass = `${req.body.pass}`;
  if (!username || !pass) {//if the user didn't enter a field
    return res.status(400).json({ error: 'Requires all fields.' });
  }
  return Account.authenticate(username, pass, (err, account) => {
    if (err || !account) {//if the username and password don't match
      return res.status(401).json({ error: 'Wrong username or password.' });
    }
    req.session.account = Account.toAPI(account);
    return res.json({ redirect: '/maker' });
  });
};
const premiumMode = async (req,res) => {//activates premium mode; not done yet
  return res.json({ redirect: '/maker' });
};
const change = (req, res) => {//should change the password of the user; not done yet
  const username = `${req.body.username}`;
  const pass = `${req.body.pass}`;
  if (!username || !pass) {//if one of the fields isn't added
    return res.status(400).json({ error: 'Requires all fields.' });
  }
  return Account.authenticate(username, pass, (err, account) => {
    if (err || !account) {//if there's an error
      return res.status(401).json({ error: 'Wrong username or password.' });
    }
    req.session.account = Account.toAPI(account);
    return res.json({ redirect: '/' });
  });
};
const signup = async (req, res) => {//signs the user up
  const username = `${req.body.username}`;
  const pass = `${req.body.pass}`;
  const pass2 = `${req.body.pass2}`;
  if (!username || !pass || !pass2) {//if one of the fields is emptty
    return res.status(400).json({ error: 'Requires all fields.' });
  }
  if (pass !== pass2) {//if the passwords don't match
    return res.status(400).json({ error: 'Passwords must match.' });
  }
  try {//tries to create a new account
    const hash = await Account.generateHash(pass);
    const newAccount = new Account({ username, password: hash });
    await newAccount.save();
    req.session.account = Account.toAPI(newAccount);
    return res.json({ redirect: '/maker' });
  } catch (err) {
    if (err.code === 11000) {//if somebody else has the user's username
      return res.status(400).json({ error: 'Somebody else has that username.' });
    }
    return res.status(400).json({ error: 'An error occurred.' });
  }
};
const getToken = (req, res) => res.json({ csrfToken: req.csrfToken() });
module.exports = {
  loginPage,
  login,
  logout,
  change,
  signup,
  premiumMode,
  getToken,
};
