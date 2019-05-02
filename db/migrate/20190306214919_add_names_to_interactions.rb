class AddNamesToInteractions < ActiveRecord::Migration[5.2]
  def change
    add_column :interactions, :name_one, :text
    add_column :interactions, :name_two, :text 
  end
end
