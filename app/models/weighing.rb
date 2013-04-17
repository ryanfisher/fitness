class Weighing < ActiveRecord::Base
  attr_accessible :body_fat, :body_water, :bone_mass, :muscle_mass, :weight,
                  :date
end
