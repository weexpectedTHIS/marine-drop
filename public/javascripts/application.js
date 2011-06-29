// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$players = [["AcE","p"],["Alicia","p"],["aLive","t"],["anypro","p"],["August","t"],["Bomber","t"],["BoxeR","t"],["ButterflyEffect","t"],["Byun","t"],["Cezanne","z"],["Check","z"],["choya","p"],["Clide","t"],["CoCa","z"],["Creator","p"],["Ensnare","t"],["FruitDealer","z"],["Ganzi","t"],["Genius","p"],["HongUn","p"],["Huk","p"],["Hyperdub","t"],["Inca","p"],["Jinro","t"],["JJUN","t"],["jookTo","z"],["July","z"],["Junwi","z"],["Keen","t"],["Killer","p"],["Kyrix","z"],["Leenock","z"],["LegalMind","p"],["Line","z"],["LosirA","z"],["Lyn","t"],["Maka","t"],["MarineKing","t"],["MC","p"],["Min","z"],["MMA","t"],["Moon","z"],["MVP","t"],["NaDa","t"],["NesTea","z"],["Noblesse","t"],["Polt","t"],["Rain","t"],["RainBow","t"],["Revival","z"],["Ryung","t"],["san","p"],["sC","t"],["Squirtle","p"],["SuperNova","t"],["TheBest","t"],["TheWind","z"],["TOP","t"],["Trickster","p"],["vanvanth","p"],["Violet","z"],["Virus","z"],["YugiOh","z"],["Zenio","z"]];

$conveying = false;
$start_conveyor = function() {
  $initialize_conveyor = function() {
    $template_plate = $('.template.plate');
    $template_hood = $('.template.hood');
    $conveyor = $('#conveyor');

    $conveyor.children().remove();
    for(n = 0; n < 4; n++) {
      $conveyor.append($template_hood.clone().removeClass().addClass('hood').css({display: 'block', left: (20 + 129 * n), top: -110}));
    }
    for(n = -2; n < 4; n++) {
      $conveyor.append($template_plate.clone().removeClass().addClass('plate').css({display: 'block', left: (129 * n), top: 150}));
    }
  }
  
  $step = function() {
    $conveyor = $('#conveyor');

    $conveyor.find('.hood').delay(1000).animate({top: "+=101"}, 500,
      function() {
        plate = $($sort_by_attribute($conveyor.find('.plate'), 'left')[$(this).index() + 2]);
        if ($(this).index() == 0) {
          rand_index = Math.floor(Math.random() * $players.length);
          plate.html($players[rand_index][0]).addClass($players[rand_index][1]).addClass('blank');
        } else if ($(this).index() == 1) {
          plate.removeClass('blank');
        } else if ($(this).index() == 2) {
          plate.addClass('underline');
        } else if ($(this).index() == 3) {
          plate.html('');
        }
        $(this).animate({top: "-=101"}, 500);
      }
    );
    $conveyor.find('.plate').animate({left: "+=129"}, 1000,
      function() {
        if ($(this).css('left') >= $conveyor.css('width')) {
          $(this).css('left', '-258px').html('').removeClass('p t z');
        }
      }
    );
  }

  $initialize_conveyor();
  if ($conveying) {clearInterval($conveying)}
  $conveying = setInterval('$step()', 2000);
}

$sort_by_attribute = function(arr, attr) {
  return arr.sort(
    function(a,b) {
      a_attr = $(a).css(attr);
      b_attr = $(b).css(attr);
      if (a_attr < b_attr) {
        return -1
      } else if (a_attr == b_attr) {
        return 0
      } else {
        return 1
      }
    }
  )
}

$(function() {
  $start_conveyor();
  
  $(window).bind('focus',
    function() {
      $start_conveyor();
      
    }
  )
  // $dropship = $('#dropship');
  // $dropship.animate({color: 'red'});
  // $ended = false;
  // $percentages_hit = [0, 90, 100];
  // $dropship.delay(2000).animate({left: "+=1000"}, {duration: 10000, easing: 'swing', step:
  //   function(now, fx) {
  //     if (now == fx.start) {
  //       $dropship.animate({rotate: "+=10deg"}, {duration: 2000, easing: 'swing', queue: false});
  //     } else if ($ended != true && ((100 * (now - fx.start) / (fx.end - fx.start)) > 80)) {
  //       $ended = true;
  //       $dropship.animate({rotate: "-=10deg"}, {duration: 2500, queue: false});
  //     }
  //     percentage = Math.floor((10 * (now - fx.start) / (fx.end - fx.start))) * 10;
  //     if ($.inArray(percentage, $percentages_hit) < 0) {drop_marine(); $percentages_hit.push(percentage);}
  //   }
  // });
  // 
  // $marine = $('#marine');
  // $stim = $('#stim');
  // function drop_marine() {
  //   $new_marine = $marine.clone();
  //   $('body').append($new_marine);
  //   $new_marine.position({my: 'top middle', at: 'top middle', of: $dropship});
  //   $new_marine.css({display: 'block'});
  //   $new_marine.animate({top: "+=150"}, {duration: 1500, easing: 'swing', complete:
  //     function() {
  //       $new_stim = $stim.clone();
  //       $('body').append($new_stim);
  //       $new_stim.position({my: 'left bottom', at: 'right top', of: $(this)});
  //       $new_stim.css({display: 'block'});
  //       for(n = 0; n < 5; n++) {
  //         $new_stim.animate({'background-color': 'yellow'}, 300);
  //         $new_stim.animate({'background-color': 'red'}, 300);
  //         $new_stim.animate({'background-color': 'white'}, 300);
  //       }
  //     }
  //   });
  // }
});