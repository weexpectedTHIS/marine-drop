// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(function() {
  $dropship = $('#dropship');
  $dropship.animate({color: 'red'});
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
  $stim = $('#stim');
  function drop_marine() {
    $new_marine = $marine.clone();
    $('body').append($new_marine);
    $new_marine.position({my: 'top middle', at: 'top middle', of: $dropship});
    $new_marine.css({display: 'block'});
    $new_marine.animate({top: "+=150"}, {duration: 1500, easing: 'swing', complete:
      function() {
        $new_stim = $stim.clone();
        $('body').append($new_stim);
        $new_stim.position({my: 'left bottom', at: 'right top', of: $(this)});
        $new_stim.css({display: 'block'});
        for(n = 0; n < 5; n++) {
          $new_stim.animate({'background-color': 'yellow'}, 300);
          $new_stim.animate({'background-color': 'red'}, 300);
          $new_stim.animate({'background-color': 'white'}, 300);
        }
      }
    });
  }
});