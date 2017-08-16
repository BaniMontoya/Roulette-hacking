var clear = jQuery('#roulette > div.control > div > div.action-area > div:nth-child(3)');
var spin = jQuery('#roulette > div.control > div > div.action-area > div:nth-child(1)');
var clicks = 1;
jQuery('#footer-links > li:nth-child(8) > i').click();
var lade = 0;
var i = 1;
var max = 1;
var stop = 1;
var change = 1;
var color = "black";
var pattern = [];
var cont_color = 0;
var anti_cont_color = 0;

function jugar() {
  if ((jQuery('#roulette > div.control > div > div.action-area > div:nth-child(1)').hasClass('disabled') == false)) {
    if (jQuery("#roulette > div.game > div > div.outcome > span > span.ng-scope").html() == "Win") {
      /*d = 0
      if (color == "red") {
        d = 1
      }
      pattern.push(d);
      switch (true) {
        case (pattern.slice(-4).toString() == [0, 1, 0, 1].toString()):
          change = 0;
          console.log("CHANGE = 0");
          break;
        case (pattern.slice(-4).toString() == [1, 0, 1, 0].toString()):
          change = 0;
          console.log("CHANGE = 0");
          break;
        default:
          change = 1;
      }*/
      //console.log(pattern);
      clear.click();
      bet = jQuery('#bet-' + color);
      bet.click();
      spin.click();
      clicks = 1;
      lade = 0;
      change = 1;
      cont_color = 0;
    }
  }
  if (lade < max && (jQuery('#roulette > div.control > div > div.action-area > div:nth-child(1)').hasClass('disabled') == false)) {
    if (jQuery("#roulette > div.game > div > div.outcome > span > span.ng-scope").html() == "Lose") {
      
      clear.click();

      if (change == 1 && cont_color < 4) {
        cont_color = cont_color+1;
        if (color == "black") {
          color = "red";
        } else {
          color = "black";
        }
      }

      if(cont_color > 3){
        anti_cont_color = anti_cont_color+1;
        if (anti_cont_color > 3){cont_color = 0;}
      }


      bet = jQuery('#bet-' + color);
      lade = lade + 1;
      clicks = clicks * 2;
      while (i < clicks + 1) {
        i = i + 1;
        bet.click();
      }
      spin.click();
      i = 1;
    }
  }
}
setInterval('if(stop==0){jugar()}', 1000);





/*

var bet_black = jQuery('#bet-black');
var clear = jQuery('#roulette > div.control > div > div.action-area > div:nth-child(3)');
var spin = jQuery('#roulette > div.control > div > div.action-area > div:nth-child(1)');
var clicks = 1;
jQuery('#footer-links > li:nth-child(8) > i')
    .click();
var lade = 0;
var i = 1;
var max = 3;
var stop = 1;
function show (){

    console.log("max: " + max)
    console.log("lade: " + lade)
    console.log("clicks: " + clicks)

}
function jugar()
{
    if (stop < 1 && lade < max && (jQuery('#roulette > div.control > div > div.action-area > div:nth-child(1)').hasClass('disabled') == false) )
    {
        if (jQuery('.latest-result')
            .hasClass('yellow') )
        {
            lade = 1;
            clicks = 1;
            clear.click();
            while (i < clicks +1)
            {
                                i = i+1;

                bet_black.click();
            }
            spin.click();
            i = 1;
        }else{
        if (jQuery('.latest-result')
            .hasClass('red') || jQuery('.latest-result')
            .hasClass('green') )
                    {
            lade = lade +1;
                        clear.click();

            clicks = clicks * 2;
            while (i < clicks+1)
            {
                i = i+1;
                bet_black.click();
            }
            spin.click();
            i = 1;
        }else{

                            bet_black.click();
            spin.click();

        }
    }
 }
}
setInterval('jugar()', 10000);
*/

/*

var bet_black = jQuery('#bet-black');
var clear = jQuery('#roulette > div.control > div > div.action-area > div:nth-child(3)');
var spin = jQuery('#roulette > div.control > div > div.action-area > div:nth-child(1)');
var clicks = 1;
jQuery('#footer-links > li:nth-child(8) > i')
    .click();
var lade = 0;
var i = 1;
var max = 3;
var stop = 1;
function show (){

    console.log("max: " + max)
    console.log("lade: " + lade)
    console.log("clicks: " + clicks)

}
function jugar()
{
    if (stop < 1 && lade < max && (jQuery('#roulette > div.control > div > div.action-area > div:nth-child(1)').hasClass('disabled') == false) )
    {
        if (jQuery('.latest-result')
            .hasClass('yellow') )
        {
            lade = 1;
            clicks = 1;
            clear.click();
            while (i < clicks +1)
            {
                                i = i+1;

                bet_black.click();
            }
            spin.click();
            i = 1;
        }else{
        if (jQuery('.latest-result')
            .hasClass('red') || jQuery('.latest-result')
            .hasClass('green') )
                    {
            lade = lade +1;
                        clear.click();

            clicks = clicks * 2;
            while (i < clicks+1)
            {
                i = i+1;
                bet_black.click();
            }
            spin.click();
            i = 1;
        }else{

                            bet_black.click();
            spin.click();

        }
    }
 }
}
setInterval('jugar()', 10000);
*/
