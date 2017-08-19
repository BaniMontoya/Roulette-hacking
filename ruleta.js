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
var jogadas = 0;
var ganhadas = 0;

function jugar() {

  if ((jQuery('#roulette > div.control > div > div.action-area > div:nth-child(1)').hasClass('disabled') == false)) {
      console.log("############");
  console.log("color: "+ color);
  console.log("change: "+ change);
  console.log("max: "+ max);
  console.log("lade: "+ lade);
  console.log("clicks: "+ clicks);
  console.log("jogadas: "+ jogadas);
  console.log("ganhadas: "+ ganhadas);


    if (jQuery("#roulette > div.game > div > div.outcome > span > span.ng-scope").html() == "Win") {
      jogadas = jogadas +1;

      ganhadas = ganhadas +1;
      clear.click();
      bet = jQuery('#bet-' + color);
      bet.click();
      spin.click();
      clicks = 1;
      lade = 0;
      change = 1;
    }
  }
  if (lade < max && (jQuery('#roulette > div.control > div > div.action-area > div:nth-child(1)').hasClass('disabled') == false)) {
    
    if (jQuery("#roulette > div.game > div > div.outcome > span > span.ng-scope").html() == "Lose") {

        jogadas = jogadas +1;

     

      if(lade > 2){
        if(change==1){
          change = 0;
          lade = 0;
        }else{
          change=1;
        }      
    }
      
      clear.click();

      if (change == 1) {
        if (color == "black") {
          color = "red";
        } else {
          color = "black";
        }
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


