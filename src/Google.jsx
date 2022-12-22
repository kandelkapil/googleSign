import React from 'react'

const Google = () => {
	function parseJwt (token) {
		var base64Url = token.split('.')[1];
		var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
		var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
		}).join(''));
		return JSON.parse(jsonPayload);
	}
	window.handleCredentialResponse = (response) => {
		const responsePayload = parseJwt(response.credential);
		console.log("ID: " + responsePayload.sub);
		console.log('Full Name: ' + responsePayload.name);
		console.log('Given Name: ' + responsePayload.given_name);
		console.log('Family Name: ' + responsePayload.family_name);
		console.log("Image URL: " + responsePayload.picture);
		console.log("Email: " + responsePayload.email);
	  }
  return (
	<>
		<h1>Google</h1>
		<div id="g_id_onload"
		data-login_uri="http://localhost:5173/"
         data-client_id="163371310809-7e9fqrkckd32urev1bmh84s7qhmdvsru.apps.googleusercontent.com"
         data-callback="handleCredentialResponse">
    </div>
    <div className="g_id_signin" data-type="standard"></div>
	</>
  )
}

export default Google
