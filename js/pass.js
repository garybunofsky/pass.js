//
//Pass.js - http://garybunofsky.github.io/pass.js
//Licensed under the MIT license - http://opensource.org/licenses/MIT
//Copyright (c) 2015 Gary Bunofsky
//

//Checks if cookie is set.

function main() {
   if (document.cookie.indexOf("source") >= 0) {
     //If cookie is set do nothing.
     //
   }
   else {
     //If cookie is not set parse url.
     //Set expiration as variables.
     var today = new Date();
     var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

     document.cookie="source=" + getParameter('source') + "; path=/; expires=" + expiry.toGMTString();
     document.cookie="medium=" + getParameter('medium') + "; path=/; expires=" + expiry.toGMTString();
     document.cookie="campaign=" + getParameter('campaign') + "; path=/; expires=" + expiry.toGMTString();
   }
}

//After DOM is loaded, get cookie and place in field value.

document.addEventListener('DOMContentLoaded',function(){
  main();

  document.getElementById('your-id-1').value = getCookie('source');
  document.getElementById('your-id-2').value = getCookie('medium');
  document.getElementById('your-id-3').value = getCookie('campaign');
});

function getCookie(cname) {
   var name = cname + "=";
   var ca = document.cookie.split(';');
   for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
   }
   return "";
}

function getParameter(source) {
   source = source.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
   var regexS = "[\\?&]" + source + "=([^&#]*)";
   var regex = new RegExp(regexS);
   var results = regex.exec(window.location.href);
   if (results == null)
      return "undefined";
   else
      return results[1];
}

