
// Domain/Data

var johnnyCash;

///hero default attributes///
var Hero = function(options) {
  options = options || {};
  _.defaults(options, {
    health: 100,
    damage: 0,
    evil: false
  });
  _.extend(this, options);
};


// Hero.prototype.injury = function(target){
//   return target.health = 10;
// };


///on click log random attack number////
var attack = function(number) {
  return Math.random() * 50;

Hero.prototype.guitarSmash = function(villain) {
  if(Math.random() * 25) {
    hitAmount =(Math.random() * 25);
    villain.health = villain.health - hitAmount;
    villain.damage = hitAmount;
    console.log("Hit!" + hitAmount);
  } else {
    console.log("Missed!");
    villain.damage =0;
  }

};





///hero prototypes and unique attributes///


var jonnyCash = new Hero({
  name: "Jonny Cash",
  quote: "You win— 100,000 school children just received a free instrument of their choice",
  img: "Pictures/johnny-cash1.jpg"
});

var kurtCobain = new Hero({
  name: "Kurt Cobain",
  quote: "You win— 100 different groups of friends just started garage bands",
  img: 'Pictures/Kurt_Cobain_.jpg'
});

var andre3000 = new Hero({
  name: "Andre 3000",
  quote: "You win— somthing, somthing, somthing YEAH!!",
  img: '/Users/tlphillipsjr/documents/a_game_maybe/Pictures/andre-3000-628.jpg'
});



function heroPic(sort){

 if ($('selected') == sort.andre3000) {
return  $("#heropic").append("andre3000.img");

} else if ($('selected') == sort.johnnyCash) {
  return  $("#heropic").append("Pictures/johnny-cash1.jpg");

} else  {
  return  $("#heropic").append("Pictures/Kurt_Cobain_.jpg");
}
}



///villain default attributes///
var Villain = function(options) {
  options = options || {};
  _.defaults(options, {
    health: 100,
    damage: 0,
    evil: true
  });
  _.extend(this, options);
};


///villain prototypes and unique attributes///


var britneySpears = new Villain({
  name: "Britney Spears",
  quote: "You lost— from now on all singers will be picked by their looks and their voices will be digitally rendered.",
  img: "Pictures/01_britney_justin.jpg"
});

var Pink = new Villain({
  name: "Pink",
  quote: 'You lost— All song lyrics will now be composed only of cliche’s strung together',
  img: "Pictures/Pink_Mazur_81279151.jpg"
});

var AdamLevine = new Villain({
  name: "Adam Levine",
  quote: 'You lost— Legions of jackbooted boy band members are storming all independent record labels and taking them somewhere never to be seen, or heard from again. ',
  img: "Pictures/adam-levine-768.jpg"
});

//Application state
var attackPressed = function(event) {
  event.preventDefault();
  operation = 'button';
  console.log(Hero.jonnyCash.guitarSmash(britneySpears));
};

// user interaction presentation and iteration
// play button on click
// play again onclick
// character slect in drop down
$('.button').on('click', attackPressed);
