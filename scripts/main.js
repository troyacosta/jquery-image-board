'use strict';
$(document).ready(function() {

    var $imageInput = $('#imageInput');
    var $imageCaption = $('#imageCaption');
    var $inputForm = $('#inputForm');
    var url = 'http://tiyfe.herokuapp.com/collections/troy-pic-site'

    $('#startButton').click(function() {
        $inputForm.slideToggle('slow');
    });

    $('#cancelButton').click(function(e) {
        e.preventDefault();
        $imageInput = $imageInput.val('');
        $imageCaption = $imageCaption.val('');
        $inputForm.hide('slow');
    });

    $('#addImageButton').click(function(e) {
        e.preventDefault();
        var image = $imageInput.val();
        var caption = $imageCaption.val();
        $.post(
            url, {
                image: image,
                caption: caption
            },
            function(response) {
                console.log(response);
            },
            'json'
        )
    });












});
