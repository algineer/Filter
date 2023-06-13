// ==UserScript==
// @name         Filter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://flide.ap.tesla.services/3d/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tesla.services
// @grant        none
// ==/UserScript==

(function() {
    //'use strict';

    //--------------Global_FLIDE_CLIPS--------------

    var set_up = true
    const filter = document.createElement('textarea')

    var filter_once = false



    //Comment Filter
    function Filter() {
        let comments = document.querySelector("div.css-181veuo > select")
        if (comments != null) {

            if (!filter_once) {
                comments.parentElement.insertBefore(filter, comments)
                filter_once = true
                filter.focus()
            }

            comments.childNodes.forEach(
                function(comment) {
                    if (filter.value == '')
                        comment.style.display = ''
                    else {
                        if (!comment.value.toLowerCase().includes(filter.value.toLowerCase().trim()))
                            comment.style.display = 'none'
                        else
                            comment.style.display = ''
                    }
                })

        } else {
            filter_once = false
            filter.value = ''
        }
    };



    if (window.location.href.includes("MESH"))
        requestAnimationFrame(clip_loop);

    function clip_loop() {

        Filter()

        requestAnimationFrame(clip_loop)
    }
})();
