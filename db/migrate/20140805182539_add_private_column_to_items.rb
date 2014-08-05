class AddPrivateColumnToItems < ActiveRecord::Migration
  def change
    add_column :items, :is_private?, :boolean, :default => false
  end
end
