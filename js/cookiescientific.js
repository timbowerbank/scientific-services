if(location.hostname.match('stunning-plateau') || location.hostname.match('timbowerbank') || location.hostname.match('scientificservices')){

   window.addEventListener("load", function(){
   window.cookieconsent.initialise({
        "palette": {
            "popup": {
            "background": "#005288"
            },
            "button": {
            "background": "#ff5e15",
            "text": "#ffffff"
            }
        },
        "theme": "edgeless",
        "type": "opt-out",
        "content": {
            "message": "This website uses cookies to anonymously monitor visitor behaviour via web analytics.",
            "href": "/privacy-policy/"
        },
        "cookie": {
          "domain": "stunning-plateau.cloudvent.net"
        },
        onInitialise: function (status) {
          var type = this.options.type;
          var didConsent = this.hasConsented();
          if (type == 'opt-out' && !didConsent) {
            // disable cookies
            // console.log("cookies onInitialise cookies need to be disabled");
            window['ga-disable-UA-12566971-2'] = true;
            console.log("onInitialise Analytics is now: " + window['ga-disable-UA-12566971-2']);
          }
        },
        onStatusChange: function(status, chosenBefore) {
          var type = this.options.type;
          var didConsent = this.hasConsented();
          if (type == 'opt-out' && !didConsent) {
            // disable cookies
            // console.log("cookies onStatusChange disable cookies");
            window['ga-disable-UA-12566971-2'] = true;
            console.log("onStatusChange Analytics is now: " + window['ga-disable-UA-12566971-2']);
          }
        },
        onRevokeChoice: function() {
          var type = this.options.type;
          if (type == 'opt-out') {
            // enable cookies
            // console.log("cookies can be enabled");
            window['ga-disable-UA-12566971-2'] = false;
            console.log("onRevokeChoice Analytics is now: " + window['ga-disable-UA-12566971-2']);
          }
        }

   })});
}
