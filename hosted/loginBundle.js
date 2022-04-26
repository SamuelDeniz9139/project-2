(()=>{var e={603:e=>{const t=e=>{document.getElementById("errorMessage").textContent=e,document.getElementById("animeMessage").classList.remove("hidden")};e.exports={handleError:t,sendPost:async(e,a,r)=>{const n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),s=await n.json();document.getElementById("animeMessage").classList.add("hidden"),s.error&&t(s.error),s.redirect&&(window.location=s.redirect),r&&r(s)},hideError:()=>{document.getElementById("animeMessage").classList.add("hidden")}}}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,a),s.exports}(()=>{const e=a(603),t=t=>{t.preventDefault(),e.hideError();const a=t.target.querySelector("#user").value,r=t.target.querySelector("#pass").value,n=t.target.querySelector("#_csrf").value;return a&&r?(e.sendPost(t.target.action,{user:a,pass:r,_csrf:n}),!1):(e.handleError("All fields are required."),!1)},r=t=>{t.preventDefault(),e.hideError();const a=t.target.querySelector("#user").value,r=t.target.querySelector("#pass").value,n=t.target.querySelector("#pass2").value,s=t.target.querySelector("#_csrf").value;return a&&r&&n?r!==n?(e.handleError("Passwords must match."),!1):(e.sendPost(t.target.action,{user:a,pass:r,pass2:n,_csrf:s}),!1):(e.handleError("All fields are required."),!1)},n=e=>React.createElement("form",{id:"loginForm",name:"loginForm",onSubmit:t,action:"/login",method:"POST",className:"mainForm"},React.createElement("input",{id:"user",type:"text",name:"username",placeholder:"Username"}),React.createElement("input",{id:"pass",type:"password",name:"pass",placeholder:"Password"}),React.createElement("input",{id:"_csrf",type:"hidden",name:"_csrf",value:e.csrf}),React.createElement("input",{className:"formSubmit",type:"submit",value:"Sign in"})),s=e=>React.createElement("form",{id:"signupForm",name:"signupForm",onSubmit:r,action:"/signup",method:"POST",className:"mainForm"},React.createElement("input",{id:"user",type:"text",name:"username",placeholder:"Username"}),React.createElement("input",{id:"pass",type:"password",name:"pass",placeholder:"Password"}),React.createElement("input",{id:"pass2",type:"password",name:"pass2",placeholder:"Retype Password"}),React.createElement("input",{id:"_csrf",type:"hidden",name:"_csrf",value:e.csrf}),React.createElement("input",{className:"formSubmit",type:"submit",value:"Sign in"})),c=e=>React.createElement("form",{id:"changeForm",name:"changeForm",onSubmit:r,action:"/change",method:"POST",className:"mainForm"},React.createElement("input",{id:"user",type:"text",name:"username",placeholder:"Username"}),React.createElement("input",{id:"pass",type:"password",name:"pass",placeholder:"New Password"}),React.createElement("input",{id:"_csrf",type:"hidden",name:"_csrf",value:e.csrf}),React.createElement("input",{className:"formSubmit",type:"submit",value:"Change Password"}));window.onload=async()=>{const e=await fetch("/getToken"),t=await e.json(),a=document.getElementById("loginButton"),r=document.getElementById("signupButton"),o=document.getElementById("changeButton");a.addEventListener("click",(e=>(e.preventDefault(),ReactDOM.render(React.createElement(n,{csrf:t.csrfToken}),document.getElementById("content")),!1))),r.addEventListener("click",(e=>(e.preventDefault(),ReactDOM.render(React.createElement(s,{csrf:t.csrfToken}),document.getElementById("content")),!1))),o.addEventListener("click",(e=>(e.preventDefault(),ReactDOM.render(React.createElement(c,{csrf:t.csrfToken}),document.getElementById("content")),!1))),ReactDOM.render(React.createElement(n,{csrf:t.csrfToken}),document.getElementById("content"))}})()})();