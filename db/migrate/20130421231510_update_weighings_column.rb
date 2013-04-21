class UpdateWeighingsColumn < ActiveRecord::Migration
  def change
    change_column('weighings','body_fat', :decimal, { :scale => 1, :precision => 10 } )
    change_column('weighings','body_water', :decimal, { :scale => 1, :precision => 10 } )
    change_column('weighings','bone_mass', :decimal, { :scale => 1, :precision => 10 } )
    change_column('weighings','muscle_mass', :decimal, { :scale => 1, :precision => 10 } )
  end
end
