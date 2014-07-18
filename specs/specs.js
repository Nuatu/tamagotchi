describe("Tamagotchi", function() {
  describe("initialize", function() {
    it("sets the name and a few other properties", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.name.should.equal("lil dragon");
      myPet.foodLevel.should.equal(10);
      myPet.sleepLevel.should.equal(10);
      myPet.activityLevel.should.equal(10);
    });
  });

  describe("timePasses", function() {
    it("decreases the amount of food/sleep/activity the Tamagotchi has left by 1", function(){
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.timePasses();
      myPet.foodLevel.should.equal(9);
      myPet.sleepLevel.should.equal(7);
      myPet.activityLevel.should.equal(8);
    });
  });
});
