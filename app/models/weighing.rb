class Weighing < ActiveRecord::Base
  attr_accessible :body_fat, :body_water, :bone_mass, :date, :muscle_mass, :weight
end
