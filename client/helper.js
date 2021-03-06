const handleError = (message) => {//shows the error message if one occurs
  document.getElementById('errorMessage').innerHTML = message;
  document.getElementById('errorMessage').classList.remove('hidden');
};
const sendPost = async (url, data, handler) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  hideError();
  if(result.error) {
    handleError(result.error);
  }
  if(result.redirect) {
    window.location = result.redirect;
  }
  if(handler){
    handler(result);
  }
};
const hideError=()=>{//hides the error message when no error occurrs
  document.getElementById('errorMessage').classList.add('hidden');
};
module.exports={
  handleError,
  sendPost,
  hideError,
};