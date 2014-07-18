var Tamagotchi = {
  initialize: function(tamaName) {
    this.name = tamaName;
    this.foodLevel=10;
    this.sleepLevel=10;
    this.activityLevel=10;
  },
  timePasses: function() {
    if (this.foodLevel >0) {
    this.foodLevel-=1;
    }
    if (this.sleepLevel >0) {
    this.sleepLevel-=1;
    }
    if (this.activityLevel >0) {
    this.activityLevel-=1;
    }
    append();
  },
  isAlive: function() {
    if (this.foodLevel >0) {
      alert('greater than 0');
      return true;
    } else {
      return false;
    }
  }
};

var append = function(){
  $("p#current-food-level").append("<p>Food Level " + myTamagotchi.foodLevel + "</p><p>");
  $("p#current-sleep-level").append("<p>Sleep Level " + myTamagotchi.sleepLevel + "</p><p>");
  $("p#current-activity-level").append("<p>Activity Level " + myTamagotchi.activityLevel + "</p><p>");
};

 var myTamagotchi;

$(document).ready(function(){
  var interval = 1000;



  $("form#new-tamagotchi").submit(function(event) {
    event.preventDefault();
    var tamaName = $("input#new-input").val();
    myTamagotchi = Object.create(Tamagotchi);
    myTamagotchi.initialize(tamaName);
    var timer = setInterval(function(){myTamagotchi.timePasses()}, interval);
    console.log(timer);
    append();
  });

  $("#btn-feed").click(function() {
    myTamagotchi.foodLevel+=1;
    $("p#current-food-level").text("Food Level " + myTamagotchi.foodLevel);
  });
  $("#btn-sleep").click(function() {
    myTamagotchi.sleepLevel+=1;
    $("p#current-sleep-level").text("Sleep Level " + myTamagotchi.sleepLevel);
  });
  $("#btn-activity").click(function() {
    myTamagotchi.activityLevel+=1;
    $("p#current-activity-level").text("Activity Level " + myTamagotchi.activityLevel);
  });
});
