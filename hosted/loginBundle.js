(()=>{var e={603:e=>{const t=e=>{document.getElementById("errorMessage").innerHTML=e,document.getElementById("errorMessage").classList.remove("hidden")},r=()=>{document.getElementById("errorMessage").classList.add("hidden")};e.exports={handleError:t,sendPost:async(e,a,n)=>{const s=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),o=await s.json();r(),o.error&&t(o.error),o.redirect&&(window.location=o.redirect),n&&n(o)},hideError:r}}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,r),s.exports}(()=>{const e=r(603),t=t=>{t.preventDefault(),e.hideError();const r=t.target.querySelector("#username").value,a=t.target.querySelector("#pass").value,n=t.target.querySelector("#_csrf").value;return r&&a?(e.sendPost(t.target.action,{username:r,pass:a,_csrf:n}),!1):(e.handleError("All fields are required."),!1)},a=t=>{t.preventDefault(),e.hideError();const r=t.target.querySelector("#username").value,a=t.target.querySelector("#oldpass").value,n=t.target.querySelector("#oldpass").value,s=t.target.querySelector("#oldpass").value,o=t.target.querySelector("#_csrf").value;return r&&a&&n&&s?n!==s?(e.handleError("Passwords must match."),!1):(e.sendPost(t.target.action,{username:r,oldpass:a,newpass:n,noopass:s,_csrf:o}),!1):(e.handleError("All fields are required."),!1)},n=t=>{t.preventDefault(),e.hideError();const r=t.target.querySelector("#username").value,a=t.target.querySelector("#pass").value,n=t.target.querySelector("#pass2").value,s=t.target.querySelector("#_csrf").value;return r&&a&&n?a!==n?(e.handleError("Passwords must match."),!1):(e.sendPost(t.target.action,{username:r,pass:a,pass2:n,_csrf:s}),!1):(e.handleError("All fields are required."),!1)},s=e=>React.createElement("form",{id:"loginForm",name:"loginForm",onSubmit:t,action:"/login",method:"POST",className:"mainForm"},React.createElement("input",{className:"enterForm",id:"username",type:"text",name:"username",placeholder:"Username"}),React.createElement("input",{className:"enterForm",id:"pass",type:"password",name:"pass",placeholder:"Password"}),React.createElement("input",{id:"_csrf",type:"hidden",name:"_csrf",value:e.csrf}),React.createElement("input",{className:"formSubmit",type:"submit",value:"Sign In!"})),o=e=>React.createElement("form",{id:"signupForm",name:"signupForm",onSubmit:n,action:"/signup",method:"POST",className:"mainForm"},React.createElement("input",{className:"enterForm",id:"username",type:"text",name:"username",placeholder:"Username"}),React.createElement("input",{className:"enterForm",id:"pass",type:"password",name:"pass",placeholder:"Password"}),React.createElement("input",{className:"enterForm",id:"pass2",type:"password",name:"pass2",placeholder:"Retype Password"}),React.createElement("input",{id:"_csrf",type:"hidden",name:"_csrf",value:e.csrf}),React.createElement("input",{className:"formSubmit",type:"submit",value:"Sign Up!"})),c=e=>React.createElement("form",{id:"changeForm",name:"changeForm",onSubmit:a,action:"/change",method:"POST",className:"mainForm"},React.createElement("input",{className:"enterForm",id:"username",type:"text",name:"username",placeholder:"Username"}),React.createElement("input",{className:"enterForm",id:"oldpass",type:"password",name:"oldpass",placeholder:"Old Password"}),React.createElement("input",{className:"enterForm",id:"newpass",type:"password",name:"newpass",placeholder:"New Password"}),React.createElement("input",{className:"enterForm",id:"noopass",type:"password",name:"noopass",placeholder:"Repeat New Password"}),React.createElement("input",{id:"_csrf",type:"hidden",name:"_csrf",value:e.csrf}),React.createElement("input",{className:"formSubmit",type:"submit",value:"Change Password"}));window.onload=async()=>{const e=await fetch("/getToken"),t=await e.json();document.getElementById("title").innerHTML="Welcome to Anime Backlogger!",document.getElementById("loginButton").addEventListener("click",(e=>(e.preventDefault(),document.getElementById("title").innerHTML="Welcome to Anime Backlogger!",ReactDOM.render(React.createElement(s,{csrf:t.csrfToken}),document.getElementById("content")),!1))),document.getElementById("signupButton").addEventListener("click",(e=>(e.preventDefault(),document.getElementById("title").innerHTML="Sign up for Anime Backlogger!",ReactDOM.render(React.createElement(o,{csrf:t.csrfToken}),document.getElementById("content")),!1))),document.getElementById("changeButton").addEventListener("click",(e=>(e.preventDefault(),document.getElementById("title").innerHTML="Changing your password?",ReactDOM.render(React.createElement(c,{csrf:t.csrfToken}),document.getElementById("content")),!1))),ReactDOM.render(React.createElement(s,{csrf:t.csrfToken}),document.getElementById("content"))}})()})();