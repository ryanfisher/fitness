class Weighing < ActiveRecord::Base
  # attr_accessible :body_fat, :body_water, :bone_mass, :date, :muscle_mass, :weight
  validates_uniqueness_of :date

  belongs_to :user
end
