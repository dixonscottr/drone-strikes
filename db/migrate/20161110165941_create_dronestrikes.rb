class CreateDronestrikes < ActiveRecord::Migration
  def change
    create_table :dronestrikes do |t|
      t.string  :country
      t.string  :location
      t.date    :strike_date
      t.string  :narrative
      t.string  :province
      t.integer :total_deaths
      t.integer :civilian_deaths
      t.integer :child_deaths
      t.integer :injuries
      t.string  :twitter_id
      t.string  :bureau_id
      t.string  :bureau_summary
      t.string  :link
      t.string  :target
      t.float   :latitude
      t.float   :longitude
      t.string  :names

      t.timestamps
    end
  end
end
