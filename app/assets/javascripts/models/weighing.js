Fitness.Weighing = DS.Model.extend({
  weight: DS.attr('number'),
  bodyFat: DS.attr('number'),
  muscleMass: DS.attr('number'),
  bodyWater: DS.attr('number'),
  boneMass: DS.attr('number'),
  date: DS.attr('date')
});