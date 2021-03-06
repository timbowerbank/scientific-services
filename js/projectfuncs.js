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

// *** SCROLL TO TOP ***
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollTopBtn").style.display = "none";
  }

  //console.log("window height is: " + window.innerHeight);
  //console.log("document.body.scrollTop is: " + document.documentElement.scrollTop);
  //console.log("scrollHeight is: " + document.documentElement.scrollHeight);
  if(document.documentElement.scrollTop + window.innerHeight > document.documentElement.scrollHeight - 200) {
    //console.log("end of scroll reached");
  }
}

// *** ANIMATION ***

// **********************
// *** SERVICE BLOCKS ***
// **********************
var className = "";
function addServiceBlockAnim(classNameArg) {

 var serviceListItems = document.getElementsByClassName(classNameArg);
 if (serviceListItems.length <= 0) {
  return;
 }
 className = classNameArg;
 for(var m=0; m < serviceListItems.length; m++) {
  serviceListItems[m].addEventListener("mouseover", mouseOverListener);
  serviceListItems[m].addEventListener("mouseout", mouseOutListener);
 }

}
// call the function
addServiceBlockAnim("primaryBlockAnim");
addServiceBlockAnim("secondaryBlockAnim")

function mouseOverListener(e){

 var elementToGrow = e.currentTarget;
 elementToGrow.removeEventListener("mouseover", mouseOverListener);
 var style = elementToGrow.style;
 style.boxShadow = "2px 2px 10px 0px rgba(0,0,0,0.3)";
 if(className == "secondaryBlockAnim") {
   //TweenLite.to(elementToGrow, 0.65, {scale:1.06, ease:Power2.easeOut});
 }

 // modify button color
 var buttonArray = elementToGrow.getElementsByClassName('uk-button');
 var button = buttonArray[0];
 //var buttonStyle = button.style;
 //buttonStyle.backgroundColor = "black";
 TweenLite.fromTo(button, 0.1,{backgroundColor:"#FFFFFF", color:"#FF5E15"}, {backgroundColor:"#FF5E15", color:"#FFFFFF"});
}

function mouseOutListener(e) {
 var elementToShrink = e.currentTarget;
 elementToShrink.addEventListener("mouseover", mouseOverListener);
 var styleToRemove = elementToShrink.style;
 styleToRemove.boxShadow = "none";
 if(className == "secondaryBlockAnim") {
  //TweenLite.to(elementToShrink, 0.65, {scale:1, ease:Power2.easeOut});
 }

 var buttonOutArray = elementToShrink.getElementsByClassName("uk-button");
 var buttonOut = buttonOutArray[0];
 //var buttonOutStyle = button.style;
 //buttonOutStyle.backgroundColor = "black";
 TweenLite.fromTo(buttonOut, 0.1, {backgroundColor:"#FF5E15", color:"#FFFFFF"}, {backgroundColor:"#FFFFFF", color:"#FF5E15"});

}

// *************************
// *** MARKETING BANNERS ***
// *************************

var marketingHeadline;
var marketingPara;
function addMarketingBannerAnim() {
 marketingHeadline = document.getElementsByClassName("marketingBannerGraphicHeadline");
 marketingPara = document.getElementsByClassName("marketingBannerGraphicPara");
 if (marketingHeadline.length <= 0) {
   return;
 }
 marketingHeadline[0].addEventListener("inview", inviewBannerListener);

}
// call the function
addMarketingBannerAnim();

function inviewBannerListener(e){
  TweenLite.fromTo(marketingHeadline, 1.1, {opacity:0, y:100}, {opacity:1, y:0, ease:Power2.easeOut, delay:0.5});
  TweenLite.fromTo(marketingPara, 1.1, {opacity:0, y:100}, {opacity:1, y:0, ease:Power2.easeOut, delay:0.75});
}


// other banners
function addAnimYFadeListeners () {
 var animYFadeElements = document.getElementsByClassName("animYFade");
 if (animYFadeElements.length <= 0) {
   return;
 }
 for(var n=0; n < animYFadeElements.length; n++) {
   animYFadeElements[n].addEventListener("inview", inviewAnimYFadeListener);
 }
}
addAnimYFadeListeners();

function inviewAnimYFadeListener(e) {
  var elementToAnim = e.currentTarget;
  TweenLite.fromTo(elementToAnim, 1.1, {opacity:0, y:100}, {opacity:1, y:0, ease:Power2.easeOut, delay:0.75});
}
