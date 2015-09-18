'use strict';
$(document).ready(function() {

    var $imageInput = $('#imageInput');
    var $imageCaption = $('#imageCaption');
    var $inputForm = $('#inputForm');
    var $imageSection = $('#imageSection');
    var url = 'http://tiyfe.herokuapp.com/collections/troy-pic-site';

    $('#startButton').click(function() {
        $inputForm.slideToggle('slow');
    });

    function clearFields() {
        $imageInput = $imageInput.val('');
        $imageCaption = $imageCaption.val('');
    }

    $('#cancelButton').click(function(e) {
        e.preventDefault();
        clearFields();
        $inputForm.hide('slow');
    });

    $('#addImageButton').click(function(e) {
        e.preventDefault();
        $inputForm.hide('slow');
        var image = $imageInput.val();
        var caption = $imageCaption.val();
        console.log(image);
        console.log(caption);
        $.post(
            url, {
                image: image,
                caption: caption
            },
            function(data) {
                $imageSection.append('<div class="imageUpdate"><img src="'+data.image+
                    '"></div><div class="captionUpdate">'+data.caption+'</div>')
            },
            'json'
        );
    });

    $.get(
        url,
        function(data) {
            data.forEach(function(data) {
                $imageSection.append('<div class="imageUpdate"><img src="'+data.image+
                    '"></div><div class="captionUpdate">'+data.caption+'</div>')
            })
        },
        'json'
        );










});
