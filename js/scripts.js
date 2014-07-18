var Tamagotchi = {
  initialize: function(tamaName) {
    this.name = tamaName;
    this.foodLevel=10;
    this.sleepLevel=10;
    this.activityLevel=10;
  },
  timePasses: function() {
    if (myTamagotchi.foodLevel >=1) {
      if (myTamagotchi.foodLevel>0) {
        // this.isAlive();
        //alert("thisSPOT");
        myTamagotchi.foodLevel-=1;
        append();
      }
      if (myTamagotchi.sleepLevel>0) {
        myTamagotchi.sleepLevel-=1;
        append();
      }
      if (myTamagotchi.activityLevel>0) {
        myTamagotchi.activityLevel-=1;
        append();
    }
   }
  },
  isAlive: function() {
    if (this.foodLevel >= 1) {
      alert("foodLevel+");
      return true;

    } else {
      alert("dead!");
      return false;
    }
  }
};

var append = function(){
  $("p#current-food-level").text("Food Level " + myTamagotchi.foodLevel);
  $("p#current-sleep-level").text("Sleep Level " + myTamagotchi.sleepLevel);
  $("p#current-activity-level").text("Activity Level " + myTamagotchi.activityLevel);
};

var myTamagotchi;

$(document).ready(function(){
  var interval = 500;

  $("form#new-tamagotchi").submit(function(event) {
    event.preventDefault();
    var tamaName = $("input#new-input").val();
    myTamagotchi = Object.create(Tamagotchi);
    myTamagotchi.initialize(tamaName);
    //setInterval(function(){myTamagotchi.timePasses()}, interval);

    var counter = window.setInterval(function(){
      myTamagotchi.timePasses();
    //   if (myTamagotchi.isAlive()) {
    //     console.log("passed");
    //   } else {
    //     alert("yer dead!");
    //     window.clearInterval();
    //   }, interval
    // });
    //console.log(myTamagotchi.isAlive());
    append();
    if (!myTamagotchi.isAlive()) {
      $("#die").text(myTamagotchi.name + " DIED");
      window.clearInterval(counter);
    }
    }, interval);




    $("h3#name").text(myTamagotchi.name + "'s levels");
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
