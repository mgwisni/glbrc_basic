/**
* UW Cookie Consent - Auto-initialized
* Author: University Marketing, web@umark.wisc.edu
* Version: 1.0.0
* Description: UW Cookie Consent is a lightweight JavaScript plugin for alerting visitors about
* the use of cookies on your website. Visitors to multiple wisc.edu websites that use this script
* will see the consent notification only once. To use cookie consent on your website
* include a link to the javascript file in your document.
*/

(function(t) {
    var o = {
        timestamp: "uw_madison_cookieconsent_timestamp",
        url: "uw_madison_cookieconsent_url"
    };
    var s = {
        escapeRegExp: function(e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        },
        getTimestamp: function() {
            return Math.floor(Date.now() / 1e3)
        },
        isValidTimestamp: function(e) {
            var t = true;
            if (e) {
                if (isNaN(e)) {
                    t = false
                } else {
                    var i = new Date(e * 1e3);
                    if (!Boolean(+i)) {
                        t = false
                    }
                }
            } else {
                t = false
            }
            return t
        },
        getUrl: function() {
            return window.location.href
        },
        hasClass: function(e, t) {
            var i = " ";
            return e.nodeType === 1 && (i + e.className + i).replace(/[\n\t]/g, i).indexOf(i + t + i) >= 0
        },
        addClass: function(e, t) {
            e.className += " " + t
        },
        removeClass: function(e, t) {
            var i = new RegExp("\\b" + this.escapeRegExp(t) + "\\b");
            e.className = e.className.replace(i, "")
        },
        getCookie: function(e) {
            var t = "; " + document.cookie;
            var i = t.split("; " + e + "=");
            return i.length < 2 ? undefined : i.pop().split(";").shift()
        },
        setCookie: function(e, t, i, n) {
            var o = new Date
              , s = false
              , a = n ? "" : ".glbrc.org"; /* Changed by MGW for glbrc.org */
            o.setDate(o.getDate() + (i || 365));
            var c = [e + "=" + t, "expires=" + o.toUTCString(), "path=/"];
            if (a) {
                c.push("domain=" + a)
            }
            if (s) {
                c.push("secure")
            }
            document.cookie = c.join(";")
        },
        deepExtend: function(e, t) {
            for (var i in t) {
                if (t.hasOwnProperty(i)) {
                    if (i in e && this.isPlainObject(e[i]) && this.isPlainObject(t[i])) {
                        this.deepExtend(e[i], t[i])
                    } else {
                        e[i] = t[i]
                    }
                }
            }
            return e
        },
        isPlainObject: function(e) {
            return typeof e === "object" && e !== null && e.constructor == Object
        }
    };
    var a = function() {
        var e = document.createElement("div");
        var t = {
            t: "transitionend",
            OT: "oTransitionEnd",
            msT: "MSTransitionEnd",
            MozT: "transitionend",
            WebkitT: "webkitTransitionEnd"
        };
        for (var i in t) {
            if (t.hasOwnProperty(i) && typeof e.style[i + "ransition"] != "undefined") {
                return t[i]
            }
        }
        return ""
    }();
    var i = function(e) {
        var t = '<div id="cookieconsent-window" role="dialog" aria-live="polite" aria-labelledby="cookieconsent-heading" aria-describedby="cookieconsent-desc" class="cc-window cc-invisible">' + '<div id="cookieconsent-message-wrapper" class="cc-message-wrapper">' + '<h2 id="cookieconsent-heading" class="cc-heading">Cookie Notice</h2>' + '<div id="cookieconsent-desc" class="cc-message">We use cookies on this site to enhance your experience and improve our marketing efforts. By continuing to browse without changing your browser settings to block or delete cookies, you agree to the storing of cookies and related technologies on your device. ' + '<a tabindex="0" id="cookieconsent-link" class="cc-link" href="https://www.wisc.edu/privacy-notice/" rel="noopener noreferrer nofollow">UW–Madison Privacy Notice</a></div></div>' + '<div id="cookieconsent-compliance" class="cc-compliance"><button id="cookieconsent-dismiss" aria-label="Accept cookie notice" role=button tabindex="0" class="cc-btn cc-dismiss">Got it!</button></div>' + "</div>";
        var i = {
            enabled: true,
            testing: false
        };
        function n() {
            this.initialize.apply(this, arguments)
        }
        n.prototype.initialize = function(e) {
            this.loadCss();
            s.deepExtend(this.options = {}, i);
            if (s.isPlainObject(e)) {
                s.deepExtend(this.options, e)
            }
            if (this.checkCookies.call(this)) {
                this.options.enabled = false
            }
            if (this.options.enabled) {
                this.element = this.appendMarkup.call(this, t);
                this.open()
            }
        }
        ;
        n.prototype.loadCss = function() {
            var e = document.createElement("style")
              , t = "#cookieconsent-window{position:fixed;bottom:0;left:0;background:rgba(40,39,40,.95);overflow:hidden;box-sizing:border-box;display:none;padding:2rem;width:100%;z-index:6000000;opacity:1;transition:opacity 1s ease}#cookieconsent-window.cc-loaded{display:block;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-ms-flex-align:center;align-items:center}#cookieconsent-window.cc-invisible{opacity:0}#cookieconsent-window #cookieconsent-heading{font-size:1rem!important;font-weight:700!important;line-height:1.5!important;letter-spacing:0!important;text-transform:uppercase!important;color:#adadad!important;margin:0!important;padding-bottom:0!important;-webkit-font-smoothing:antialiased!important;-moz-osx-font-smoothing:grayscale!important;font-family:Verlag,Helvetica,Arial,sans-serif!important}#cookieconsent-window #cookieconsent-desc{color:#adadad!important;font-family:Verlag,Helvetica,Arial,sans-serif!important;font-size:1.125rem!important;font-weight:400!important;line-height:1.5!important;letter-spacing:0!important;-webkit-font-smoothing:antialiased!important;-moz-osx-font-smoothing:grayscale!important}#cookieconsent-window #cookieconsent-message-wrapper{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}#cookieconsent-window #cookieconsent-compliance{padding:0 2rem;-webkit-flex:1 0 130px;-ms-flex:1 0 130px;flex:1 0 130px;text-align:right}#cookieconsent-window #cookieconsent-link{color:#adadad!important;text-decoration:underline!important}#cookieconsent-link:active,#cookieconsent-link:visited,#cookieconsent-window #cookieconsent-link:hover{text-decoration:none!important;color:#fff!important}#cookieconsent-window #cookieconsent-dismiss{display:inline-block!important;padding:1rem 1.5rem!important;font-family:Verlag,Helvetica,Arial,sans-serif!important;font-size:1rem!important;font-weight:700!important;text-transform:uppercase!important;text-align:center!important;white-space:nowrap;background-color:#c5050c!important;border-radius:2px!important;transition:background-color .2s;color:#fff!important;border:0!important}#cookieconsent-window #cookieconsent-dismiss:active,#cookieconsent-window #cookieconsent-dismiss:focus,#cookieconsent-window #cookieconsent-dismiss:hover{background-color:#9b0000!important;color:#fff!important}@media screen and (max-width:31.25em){#cookieconsent-window.cc-loaded{display:block;line-height:1.4;padding:1rem 1rem 1rem 1rem}#cookieconsent-window #cookieconsent-message-wrapper{width:100%}#cookieconsent-window #cookieconsent-compliance{margin:0;padding:0;width:100%;text-align:center}#cookieconsent-window #cookieconsent-dismiss{margin:1rem auto 0 auto!important}}@media print{#cookieconsent-window.cc-loaded{display:none}}";
            if (e.styleSheet) {
                e.styleSheet.cssText = t
            } else {
                e.appendChild(document.createTextNode(t))
            }
            document.getElementsByTagName("head")[0].appendChild(e)
        }
        ;
        n.prototype.open = function() {
            if (!this.element)
                return;
            if (!this.isOpen()) {
                var e = this.element;
                if (s.hasClass(e, "cc-invisible")) {
                    if (!s.hasClass(e, "cc-loaded")) {
                        s.addClass(e, "cc-loaded")
                    }
                    setTimeout(function() {
                        s.removeClass(e, "cc-invisible")
                    }, 20)
                }
            }
            return this
        }
        ;
        n.prototype.close = function() {
            if (!this.element)
                return;
            if (this.isOpen()) {
                if (!s.hasClass(this.element, "cc-invisible")) {
                    s.addClass(this.element, "cc-invisible");
                    this.afterTransition = this.afterFadeOut.bind(this, this.element);
                    this.element.addEventListener(a, this.afterTransition);
                    this.element.removeEventListener("click", this.onButtonClick);
                    this.onButtonClick = null
                }
            }
            return this
        }
        ;
        n.prototype.isOpen = function() {
            return this.element && !s.hasClass(this.element, "cc-invisible") && s.hasClass(this.element, "cc-loaded")
        }
        ;
        n.prototype.statusMatches = function(e) {
            return cookie.allowed_status.indexOf(e) >= 0
        }
        ;
        n.prototype.setCookies = function() {
            s.setCookie(o.timestamp, s.getTimestamp(), 365, this.options.testing);
            s.setCookie(o.url, s.getUrl(), 365, this.options.testing)
        }
        ;
        n.prototype.afterFadeOut = function(e) {
            if (s.hasClass(e, "cc-loaded")) {
                s.removeClass(e, "cc-loaded")
            }
            e.removeEventListener(a, this.afterTransition)
        }
        ;
        n.prototype.checkCookies = function() {
            if (!window.navigator.cookieEnabled) {
                return true
            }
            if (window.CookiesOK || window.navigator.CookiesOK) {
                return true
            }
            if (s.isValidTimestamp(s.getCookie(o.timestamp))) {
                return true
            }
            return false
        }
        ;
        n.prototype.appendMarkup = function(e) {
            var t = this.options
              , i = document.createElement("div");
            i.innerHTML = e;
            var n = i.children[0];
            this.onButtonClick = this.handleButtonClick.bind(this);
            n.addEventListener("click", this.onButtonClick);
            document.body.insertBefore(n, document.body.firstChild);
            return n
        }
        ;
        n.prototype.handleButtonClick = function(e) {
            var t = e.target;
            if (s.hasClass(t, "cc-dismiss")) {
                this.setCookies();
                this.close(true)
            }
        }
        ;
        return n
    }();
    t.initialize = function(e) {
        if (!t.hasInitialised) {
            new i(e);
            t.hasInitialised = true
        }
    }
    ;
    t.utils = s;
    window.cookieconsent = t
}
)(window.cookieconsent || {});
window.addEventListener("load", function() {
    window.cookieconsent.initialize();
});
