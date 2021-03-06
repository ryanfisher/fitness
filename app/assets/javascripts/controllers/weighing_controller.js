Fitness.WeighingController = Ember.ObjectController.extend({
  actions: {
    addWeighing: function () {
      weighing = this.store.createRecord('weighing', {
        weight: this.get('newWeight'),
        body_fat: this.get('newBodyFat'),
        body_water: this.get('newBodyWater'),
        muscle_mass: this.get('newMuscleMass'),
        bone_mass: this.get('newBoneMass'),
        date: new Date()
      });
      weighing.save();
    }
  }
});
