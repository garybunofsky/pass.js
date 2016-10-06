//
// Pass.js - http://garybunofsky.github.io/pass.js
// Licensed under the MIT license - http://opensource.org/licenses/MIT
// Copyright (c) 2016 Gary Bunofsky
//

     
function initializePass() {  
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  var query_string = {};
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
    
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
    
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  
  // TODO check if cookie is already set. if so then inject
  setCookie(query_string);
}

function getCookie(cookie_name) {
   var name = cookie_name + "=";
   var ca = document.cookie.split(';');
   for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
   }
   return "";
}

function setCookie(query_string) {
  // Set cookie expiration. Default is 30 days.
  var today = new Date();
  var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000);
  for (var param in query_string) {
    document.cookie = param + "=" + query_string[param] + "; path=/; expires=" + expiry.toGMTString();
  }
  getAllCookies();
}

function getAllCookies() {
  var cookies = {};
  if (document.cookie && document.cookie != '') {
    var split = document.cookie.split(';');
    for (var i = 0; i < split.length; i++) {
      var name_value = split[i].split("=");
      name_value[0] = name_value[0].replace(/^ /, '');
      cookies[decodeURIComponent(name_value[0])] = decodeURIComponent(name_value[1]);
    }
  }
  injectCookie(cookies);
}

function injectCookie(array) {
  for (var key in array) {
    if (document.getElementById(key)) {
      document.getElementById(key).value = getCookie(key);
    }
  }
}

// After DOM is loaded initialize pass.js
document.addEventListener('DOMContentLoaded',function(){
  initializePass();
});

