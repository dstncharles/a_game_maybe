
///hero default atrobutes///
var Hero = function(options){
  options = options || {};
  _.defaults(options, {
    health: 100,
    evil: false
});
_.extend(this, options);
};



///on click log randome attack number////
var attack = function(number){
  return Math.random() * 50;
};

 var attackPressed = function(event) {
  event.preventDefault();
  operation = 'button';
  console.log(attack(10));
};

$('.button').on('click', attackPressed);



///hero prototypes and uneque atrobutes///
var jonnyCash = new Hero ({
  quote:"You win— 100,000 school children just received a free instrument of their choice",
  img: "Pictures/johnny-cash1.jpg"

});

 var kurtCobain = new Hero ({
   quote:"You win— 100 different groups of friends just started garage bands",
   img: "Pictures/Kurt_Cobain_.jpg"
});

var andre3000 = new Hero ({
    quote:"You win— somthing, somthing, somthing YEAH!!",
    img: "Pictures/andre-3000-628.jpg"
    });







///villain default atrobutes///
var Villain = function(options){
  options = options || {};
  _.defaults(options, {
    health: 100,
    evil: true
});
_.extend(this, options);
};

///villan prototypes and uneque atrobutes///
var britneySpears = new Villain ({
  quote:"You lost— from now on all singers will be picked by their looks and their voices will be digitally rendered.",
  img: "Pictures/01_britney_justin.jpg"
  });

var Pink = new Villain ({
  quote:'You lost— All song lyrics will now be composed only of cliche’s strung together',
  img: "Pictures/Pink_Mazur_81279151.jpg"
  });

var AdamLevine = new Villain ({
  quote:'You lost— Legions of jackbooted boy band members are storming all independent record labels and taking them somewhere never to be seen, or heard from again. ',
  img: "Pictures/adam-levine-768.jpg"
  });



  // // this.prototype.attack= function(number){
  // //   return Math.random() * 50;
//





// // var Dog = function (options) {
// //   var options = options || {};
// //   _.defaults(options, {
// //       hungry: true,
// //       color: 'black',
// //       owner: undefined
// //     });
// //   _.extend(this, options);
// // };
// //
// // Dog.prototype += {
// //   status: 'normal',
// //   color: 'black',
// //   hungry: true
// // };
// //
// // var Human = function(options) {
// //   var options = options || {};
// //   _.defaults(options, {
// //       cool: false,
// //       pet: function(target) { target.status='happy'; }
// //     });
// //   _.extend(this, options);
// // };
// //
// // Human.prototype.feed = function(target) {
// //   target.hungry = false;
// // };
