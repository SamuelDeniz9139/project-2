const helper=require('./helper.js');
const handleLogin=(e)=>{//handles when you want to log in normally
    e.preventDefault();
    helper.hideError();
    const username=e.target.querySelector('#username').value;
    const pass=e.target.querySelector('#pass').value;
    const _csrf=e.target.querySelector('#_csrf').value;
    if(!username||!pass){
        helper.handleError('All fields are required.');
        return false;
    }
    helper.sendPost(e.target.action,{username,pass,_csrf});
    return false;
}
const handleChange=(e)=>{//handles when you change your password
    e.preventDefault();
    helper.hideError();
    const username=e.target.querySelector('#username').value;
    const oldpass=e.target.querySelector('#oldpass').value;
    const newpass=e.target.querySelector('#oldpass').value;
    const noopass=e.target.querySelector('#oldpass').value;
    const _csrf=e.target.querySelector('#_csrf').value;
    if(!username||!oldpass||!newpass||!noopass){
        helper.handleError('All fields are required.');
        return false;
    }
    if(newpass!==noopass){
        helper.handleError('Passwords must match.');
        return false;
    }
    helper.sendPost(e.target.action,{username,oldpass,newpass,noopass,_csrf});
    return false;
}
const handleSignup=(e)=>{//handles when you want to sign up
    e.preventDefault();
    helper.hideError();
    const username=e.target.querySelector('#username').value;
    const pass=e.target.querySelector('#pass').value;
    const pass2=e.target.querySelector('#pass2').value;
    const _csrf=e.target.querySelector('#_csrf').value;
    if(!username||!pass||!pass2){
        helper.handleError('All fields are required.');
        return false;
    }
    if(pass!==pass2){
        helper.handleError('Passwords must match.');
        return false;
    }
    helper.sendPost(e.target.action,{username,pass,pass2,_csrf});
    return false;
}
const LoginWindow=(props)=>{
    return(//serves as the menu for when you want to log in
        <form id="loginForm" name="loginForm" onSubmit={handleLogin}
        action="/login" method="POST" className="mainForm">
            <input className="enterForm" id="username" type="text" name="username" placeholder="Username" />
            <input className="enterForm" id="pass" type="password" name="pass" placeholder="Password" />
            <input id="_csrf" type="hidden" name="_csrf" value={props.csrf} />
            <input className="formSubmit" type="submit" value="Sign In!" />
        </form>
    );
};
const SignupWindow=(props)=>{
    return(//serves as the menu for when you want to sign up
        <form id="signupForm" name="signupForm" onSubmit={handleSignup}
        action="/signup" method="POST" className="mainForm">
            <input className="enterForm" id="username" type="text" name="username" placeholder="Username" />
            <input className="enterForm" id="pass" type="password" name="pass" placeholder="Password" />
            <input className="enterForm" id="pass2" type="password" name="pass2" placeholder="Retype Password" />
            <input id="_csrf" type="hidden" name="_csrf" value={props.csrf} />
            <input className="formSubmit" type="submit" value="Sign Up!" />
        </form>
    );
};
const ChangeWindow=(props)=>{
    return(//serves as the menu for when you want to change your password
        <form id="changeForm" name="changeForm" onSubmit={handleChange}
        action="/change" method="POST" className="mainForm">
            <input className="enterForm" id="username" type="text" name="username" placeholder="Username" />
            <input className="enterForm" id="oldpass" type="password" name="oldpass" placeholder="Old Password" />
            <input className="enterForm" id="newpass" type="password" name="newpass" placeholder="New Password" />
            <input className="enterForm" id="noopass" type="password" name="noopass" placeholder="Repeat New Password" />
            <input id="_csrf" type="hidden" name="_csrf" value={props.csrf} />
            <input className="formSubmit" type="submit" value="Change Password" />
        </form>
    );
};
const init=async()=>{//initializes content on the page
    const response=await fetch('/getToken');
    const data=await response.json();
    document.getElementById('title').innerHTML="Welcome to Anime Backlogger!"
    document.getElementById('loginButton').addEventListener('click',(e)=>{
        e.preventDefault();
        document.getElementById('title').innerHTML="Welcome to Anime Backlogger!"
        ReactDOM.render(<LoginWindow csrf={data.csrfToken} />, document.getElementById('content'));
        return false;
    });
    document.getElementById('signupButton').addEventListener('click',(e)=>{
        e.preventDefault();
        document.getElementById('title').innerHTML="Sign up for Anime Backlogger!"
        ReactDOM.render(<SignupWindow csrf={data.csrfToken} />, document.getElementById('content'));
        return false;
    });
    document.getElementById('changeButton').addEventListener('click',(e)=>{
        e.preventDefault();
        document.getElementById('title').innerHTML="Changing your password?"
        ReactDOM.render(<ChangeWindow csrf={data.csrfToken} />, document.getElementById('content'));
        return false;
    });
    ReactDOM.render(<LoginWindow csrf={data.csrfToken} />, document.getElementById('content'));
};
window.onload=init;