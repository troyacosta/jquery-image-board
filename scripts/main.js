'use strict';
$(document).ready(function() {

    var $imageInput = $('#imageInput');
    var $imageCaption = $('#imageCaption');
    var $inputForm = $('#inputForm');
    var $imageSection = $('#imageSection');
    var $error = $('#errorMessages');
    var url = 'http://tiyfe.herokuapp.com/collections/troy-pic-site';

    $('#startButton').click(function() {
        $inputForm.slideToggle('slow');
    });

    function clearFields() {
        $imageInput = $imageInput.val('');
        $imageCaption = $imageCaption.val('');
        $error = $error.html('');
    }

    $('#cancelButton').click(function(e) {
        e.preventDefault();
        clearFields();
        $inputForm.hide('slow');
    });

    $('#addImageButton').click(function(e) {
        e.preventDefault();
        var image = $imageInput.val();
        var caption = $imageCaption.val();
        if (image === '' || caption === '') {
            return $error.html('You must enter a valid image link and leave a comment!');
        }
        if (image.substr(0, 4) !== 'http') {
            return $error.html('Your image URL must begin with "http://" or "https://"!');
        }
        $error.html('');
        $inputForm.hide('slow');
        $.post(
            url, {
                image: image,
                caption: caption
            },
            function(data) {
                $imageSection.append('<div class="imageUpdate"><img src="' + data.image +
                    '"></div><div class="captionUpdate">' + data.caption + '</div>')
            },
            'json'
        );
    });

    $.get(
        url,
        function(data) {
            data.forEach(function(data) {
                $imageSection.append('<div class="imageUpdate"><img src="' + data.image +
                    '"></div><div class="captionUpdate">' + data.caption + '</div>')
            })
        },
        'json'
    );










});
