(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
$(document).ready(function () {

    var $imageInput = $('#imageInput');
    var $imageCaption = $('#imageCaption');
    var $inputForm = $('#inputForm');
    var $imageSection = $('#imageSection');
    var url = 'http://tiyfe.herokuapp.com/collections/troy-pic-site';

    $('#startButton').click(function () {
        $inputForm.slideToggle('slow');
    });

    function clearFields() {
        $imageInput = $imageInput.val('');
        $imageCaption = $imageCaption.val('');
    }
    function updateImages() {
        $imageUpdate = $imageUpdate.val('');
        $captionUpdate = $captionUpdate.val('');
    }

    $('#cancelButton').click(function (e) {
        e.preventDefault();
        clearFields();
        $inputForm.hide('slow');
    });

    $('#addImageButton').click(function (e) {
        e.preventDefault();
        // clearFields();
        $inputForm.hide('slow');
        var image = $imageInput.val();
        var caption = $imageCaption.val();
        console.log(image);
        console.log(caption);
        $.post(url, {
            image: image,
            caption: caption
        }, function (data) {
            $imageSection.append('<div class="imageUpdate"><img src="' + data.image + '"></div><div class="captionUpdate">' + data.caption + '</div>');
        }, 'json');
    });

    $.get(url, function (data) {
        data.forEach(function (data) {
            $imageSection.append('<div class="imageUpdate"><img src="' + data.image + '"></div><div class="captionUpdate">' + data.caption + '</div>');
        });
    }, function (data) {
        console.log(data);
    }, 'json');
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map