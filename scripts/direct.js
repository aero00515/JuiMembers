if (document.location.search.indexOf("skipmobile") >= 0) {
	document.cookie = "skipmobile=1";
}
else if ((document.location.hostname.match(/\.mobi$/) || screen.width < 699)
	&& document.cookie.indexOf("skipmobile") == -1)
{
	document.location = "mobile.html";
}