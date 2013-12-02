// ==UserScript==
// @name           TODO: Script title goes here.
// @namespace      KeenIIDX
// @description    TODO: Full script description goes here.
// @include        TODO: URL for customized page(s) goes here.  Add additional lines if script customizes multiple domains.  Allows wildcards.
// @author         Elliott Wilcoxon
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js
// @grant          none

// ==/UserScript==

function with_jquery(f) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = "(" + f.toString() + ")(jQuery)";
    document.body.appendChild(script);
};

with_jquery(function($) {
	// TODO: Code goes here.
});