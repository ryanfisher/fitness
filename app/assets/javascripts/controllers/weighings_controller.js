Fitness.WeighingsController = Ember.ArrayController.extend({
  addWeighing: function () {
    this.pushObject({
      weight: this.get('newWeight'),
      body_fat: this.get('newBodyFat'),
      body_water: this.get('newBodyWater'),
      muscle_mass: this.get('newMuscleMass'),
      bone_mass: this.get('newBoneMass'),
      date: this.get('newDate')
    });
  }
});
