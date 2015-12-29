$(document).ready(function() {
  for (prop in properties) {
    $('#' + prop + ' .slider').slider({
      max: parseFloat($('#' + prop + ' .value').attr('max')),
      min: parseFloat($('#' + prop + ' .value').attr('min')),
      step: parseFloat($('#' + prop + ' .value').attr('step')),
      value: properties[prop]
    });
    $('#' + prop + ' .value').val(properties[prop]);
    (function(prop) {
      $('#' + prop + ' .slider').on('slidechange', function() {
        properties[prop] = $('#' + prop + ' .slider').slider('value');
        $('#' + prop + ' .value').val(properties[prop]);
      });
      $('#' + prop + ' .value').on('change', function() {
        properties[prop] = $('#' + prop + ' .value').val();
        $('#' + prop + ' .slider').slider("value", properties[prop]);
      });
    })(prop);
  }
});
