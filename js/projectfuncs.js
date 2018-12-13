// *** TWITTER ***
var twitterPopUp = document.getElementsByClassName('popup');
for(var i = 0; i < twitterPopUp.length; i++) {
   twitterPopUp[i].addEventListener("click", function(e) {

    var width  = 575,
        height = 400,
        left   = (window.innerWidth  - width)  / 2,
        top    = (window.innerHeight - height) / 2,
        url    = this.href,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;

     window.open(url, 'twitter', opts);
     e.preventDefault();

     return false;


   }, false);
}

// *** LINKEDIN ***
var linkedIn = document.getElementsByClassName('linkedin');
for (var j=0; j < linkedIn.length; j++) {
  linkedIn[j].addEventListener("click", function(e){
   var width  = 575,
       height = 400,
       left   = (window.innerWidth  - width)  / 2,
       top    = (window.innerHeight - height) / 2,
       url    = this.href,
       opts   = 'status=1' +
                ',width='  + width  +
                ',height=' + height +
                ',top='    + top    +
                ',left='   + left;

    window.open(url, 'linkedIn', opts);
    e.preventDefault();

    return false;

}, false)
};

// *** GOOGLE PLUS ***
var googlePlus = document.getElementsByClassName('googleplus');
for(var t=0; t < googlePlus.length; t++) {
  googlePlus[t].addEventListener("click", function(e){
   var width  = 575,
       height = 400,
       left   = (window.innerWidth  - width)  / 2,
       top    = (window.innerHeight - height) / 2,
       url    = this.href,
       opts   = 'status=1' +
                ',width='  + width  +
                ',height=' + height +
                ',top='    + top    +
                ',left='   + left;

    window.open(url, 'Google Plus', opts);
    e.preventDefault();

    return false;

}, false)
}

// *** ACCESSIBILITY ***
var skipLink = document.getElementsByClassName("skip-main");
skipLink[0].addEventListener("click", function(e){

  // strip the leading hash and declare
  // the content we're skipping to
  var skipLink = "#"+this.href.split('#')[1];
  var skipTo = skipLink.substring(1);
  var target = document.getElementById(skipTo);

  // Setting 'tabindex' to -1 takes an element out of normal
  // tab flow but allows it to be focused via javascript
  target.setAttribute("tabindex", "-1");
  target.addEventListener("blur focusout", function() {
    this.removeAttribute("tabindex");
  });
  target.focus();

  e.preventDefault();

}, false);
