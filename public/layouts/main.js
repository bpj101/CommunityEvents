/*jslint node: true */
'use strict';
$(document).ready(function () {
  $('.deleteEvent').on('click', function (e) {
    console.log(e);
    var deleteId = $('.deleteEvent').data('delete');
    $.ajax({
      url: '/events/delete/' + deleteId,
      type: 'DELETE',
      success: function (result) {
        console.log(result);
      }
    });
    window.location = '/myevents';
  });
});