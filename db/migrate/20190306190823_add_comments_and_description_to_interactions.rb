class AddCommentsAndDescriptionToInteractions < ActiveRecord::Migration[5.2]
  def change
    add_column :interactions, :comment, :text
    add_column :interactions, :description, :text
  end
end
