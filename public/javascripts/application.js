// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(function() {
  $dropship = $('#dropship');
  // $dropship.delay(2000).animate({rotate: "+=10deg"}, {duration: 1000}).animate({left: "+=1000"}, {duration: 10000, easing: 'swing'});
  $ended = false;
  $percentages_hit = [0, 90, 100];
  $dropship.delay(2000).animate({left: "+=1000"}, {duration: 10000, easing: 'swing', step:
    function(now, fx) {
      if (now == fx.start) {
        $dropship.animate({rotate: "+=10deg"}, {duration: 2000, easing: 'swing', queue: false});
      } else if ($ended != true && ((100 * (now - fx.start) / (fx.end - fx.start)) > 80)) {
        $ended = true;
        $dropship.animate({rotate: "-=10deg"}, {duration: 2500, queue: false});
      }
      percentage = Math.floor((10 * (now - fx.start) / (fx.end - fx.start))) * 10;
      if ($.inArray(percentage, $percentages_hit) < 0) {drop_marine(); $percentages_hit.push(percentage);}
    }
  });
  
  $marine = $('#marine');
  function drop_marine() {
    $new_marine = $marine.clone();
    $new_marine.position({my: 'top middle', at: 'top middle', of: '#dropship'});
    $('body').append($new_marine);
    $new_marine.css({display: 'block'});
    $new_marine.animate({top: "+=150"}, {duration: 1500, easing: 'swing'});
  }
});