function getParameter(source) {
    source = source.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + source + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
      return "";
    else
      return results[1];
} 
// The function above parses the url. 
document.addEventListener('DOMContentLoaded',function(){
	document.getElementById('your-id-1').value = getParameter('source');
	document.getElementById('your-id-2').value = getParameter('medium');
	document.getElementById('your-id-3').value = getParameter('campaign');
});