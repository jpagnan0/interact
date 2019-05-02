class CreateInteractions < ActiveRecord::Migration[5.2]
  def change
    create_table :interactions do |t|
      t.integer :medication_one_id
      t.integer :medication_two_id
      t.timestamps
    end
  end
end
