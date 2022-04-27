(()=>{var e={603:e=>{const t=e=>{document.getElementById("errorMessage").textContent=e,document.getElementById("animeMessage").classList.remove("hidden")};e.exports={handleError:t,sendPost:async(e,r,a)=>{const n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),s=await n.json();document.getElementById("animeMessage").classList.add("hidden"),s.error&&t(s.error),s.redirect&&(window.location=s.redirect),a&&a(s)},hideError:()=>{document.getElementById("animeMessage").classList.add("hidden")}}}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,r),s.exports}(()=>{const e=r(603),t=t=>{t.preventDefault(),e.hideError();const r=t.target.querySelector("#user").value,a=t.target.querySelector("#pass").value,n=t.target.querySelector("#_csrf").value;return r&&a?(e.sendPost(t.target.action,{user:r,pass:a,_csrf:n}),!1):(e.handleError("All fields are required."),!1)},a=t=>{t.preventDefault(),e.hideError();const r=t.target.querySelector("#user").value,a=t.target.querySelector("#pass").value,n=t.target.querySelector("#pass2").value,s=t.target.querySelector("#_csrf").value;return r&&a&&n?a!==n?(e.handleError("Passwords must match."),!1):(e.sendPost(t.target.action,{user:r,pass:a,pass2:n,_csrf:s}),!1):(e.handleError("All fields are required."),!1)},n=t=>{t.preventDefault(),e.hideError();const r=t.target.querySelector("#user").value,a=t.target.querySelector("#pass").value,n=t.target.querySelector("#_csrf").value;return r&&a?(e.sendPost(t.target.action,{user:r,pass:a,_csrf:n}),!1):(e.handleError("All fields are required."),!1)},s=e=>React.createElement("form",{id:"loginForm",name:"loginForm",onSubmit:t,action:"/login",method:"POST",className:"mainForm"},React.createElement("input",{id:"user",type:"text",name:"username",placeholder:"Username"}),React.createElement("input",{id:"pass",type:"password",name:"pass",placeholder:"Password"}),React.createElement("input",{id:"_csrf",type:"hidden",name:"_csrf",value:e.csrf}),React.createElement("input",{className:"formSubmit",type:"submit",value:"Sign in"})),c=e=>React.createElement("form",{id:"signupForm",name:"signupForm",onSubmit:a,action:"/signup",method:"POST",className:"mainForm"},React.createElement("input",{id:"user",type:"text",name:"username",placeholder:"Username"}),React.createElement("input",{id:"pass",type:"password",name:"pass",placeholder:"Password"}),React.createElement("input",{id:"pass2",type:"password",name:"pass2",placeholder:"Retype Password"}),React.createElement("input",{id:"_csrf",type:"hidden",name:"_csrf",value:e.csrf}),React.createElement("input",{className:"formSubmit",type:"submit",value:"Sign in"})),o=e=>React.createElement("form",{id:"changeForm",name:"changeForm",onSubmit:n,action:"/change",method:"POST",className:"mainForm"},React.createElement("input",{id:"user",type:"text",name:"username",placeholder:"Username"}),React.createElement("input",{id:"pass",type:"password",name:"pass",placeholder:"New Password"}),React.createElement("input",{id:"_csrf",type:"hidden",name:"_csrf",value:e.csrf}),React.createElement("input",{className:"formSubmit",type:"submit",value:"Change Password"}));window.onload=async()=>{const e=await fetch("/getToken"),t=await e.json();document.getElementById("loginButton").addEventListener("click",(e=>(e.preventDefault(),ReactDOM.render(React.createElement(s,{csrf:t.csrfToken}),document.getElementById("content")),!1))),document.getElementById("signupButton").addEventListener("click",(e=>(e.preventDefault(),ReactDOM.render(React.createElement(c,{csrf:t.csrfToken}),document.getElementById("content")),!1))),document.getElementById("changeButton").addEventListener("click",(e=>(e.preventDefault(),ReactDOM.render(React.createElement(o,{csrf:t.csrfToken}),document.getElementById("content")),!1))),ReactDOM.render(React.createElement(s,{csrf:t.csrfToken}),document.getElementById("content"))}})()})();