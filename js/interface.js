$(document).ready(function() {
  for (prop in properties.sliders) {
    $('#' + prop + ' .slider').slider({
      max: parseFloat($('#' + prop + ' .value').attr('max')),
      min: parseFloat($('#' + prop + ' .value').attr('min')),
      step: parseFloat($('#' + prop + ' .value').attr('step')),
      value: properties.sliders[prop]
    });
    $('#' + prop + ' .value').val(properties.sliders[prop]);
    (function(prop) {
      $('#' + prop + ' .slider').on('slide', function() {
        properties.sliders[prop] = $('#' + prop + ' .slider').slider('value');
        $('#' + prop + ' .value').val(properties.sliders[prop]);
      });
      $('#' + prop + ' .value').on('change', function() {
        properties.sliders[prop] = $('#' + prop + ' .value').val();
        $('#' + prop + ' .slider').slider("value", properties.sliders[prop]);
      });
    })(prop);
  }
});
