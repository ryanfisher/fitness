class WeighingSerializer < ActiveModel::Serializer
  attributes :id, :weight, :body_fat, :muscle_mass, :body_water, :bone_mass, :date
end
