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
