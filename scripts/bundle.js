(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
$(document).ready(function () {

    var $imageInput = $('#imageInput');
    var $imageCaption = $('#imageCaption');
    var $inputForm = $('#inputForm');
    var url = 'http://tiyfe.herokuapp.com/collections/troy-pic-site';

    $('#startButton').click(function () {
        $inputForm.slideToggle('slow');
    });

    $('#cancelButton').click(function (e) {
        e.preventDefault();
        $imageInput = $imageInput.val('');
        $imageCaption = $imageCaption.val('');
        $inputForm.hide('slow');
    });

    $('#addImageButton').click(function (e) {
        e.preventDefault();
        var image = $imageInput.val();
        var caption = $imageCaption.val();
        $.post(url, {
            image: image,
            caption: caption
        }, function (response) {
            console.log(response);
        }, 'json');
    });
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map