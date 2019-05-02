class CreateMedications < ActiveRecord::Migration[5.2]
  def change
    create_table :medications do |t|
      t.string :name
      t.string :name_alt
      t.string :rxcui
      t.timestamps
    end
  end
end
