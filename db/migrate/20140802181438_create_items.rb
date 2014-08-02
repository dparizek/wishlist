class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.text :image_url
      t.string :title
      t.text :url
      t.string :timestamps

      t.timestamps
    end
  end
end
