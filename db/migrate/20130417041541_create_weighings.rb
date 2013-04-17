class CreateWeighings < ActiveRecord::Migration
  def change
    create_table :weighings do |t|
      t.integer :weight
      t.decimal :body_fat
      t.decimal :muscle_mass
      t.decimal :body_water
      t.decimal :bone_mass
      t.date    :date

      t.timestamps
    end
  end
end
