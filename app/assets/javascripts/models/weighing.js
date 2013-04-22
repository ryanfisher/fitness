Fitness.Weighing = DS.Model.extend({
  weight: DS.attr('number'),
  body_fat: DS.attr('number'),
  muscle_mass: DS.attr('number'),
  body_water: DS.attr('number'),
  bone_mass: DS.attr('number'),
  date: DS.attr('date')
});
