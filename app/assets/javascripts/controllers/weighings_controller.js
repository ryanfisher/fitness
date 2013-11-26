Fitness.WeighingsController = Ember.ArrayController.extend({
  sortProperties: ['date'],
  sortAscending: false,

  addWeighing: function () {
    Fitness.Weighing.createRecord({
      weight: this.get('newWeight'),
      body_fat: this.get('newBodyFat'),
      body_water: this.get('newBodyWater'),
      muscle_mass: this.get('newMuscleMass'),
      bone_mass: this.get('newBoneMass'),
      date: new Date()
    });
    this.set('newWeight', '');
    this.set('newBodyFat', '');
    this.set('newBodyWater', '');
    this.set('newMuscleMass', '');
    this.set('newBoneMass', '');
    this.set('newDate', '');
    this.get('store').commit();
  }
});
