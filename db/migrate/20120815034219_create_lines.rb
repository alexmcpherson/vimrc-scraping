class CreateLines < ActiveRecord::Migration
  def change
    create_table :lines do |t|
      t.integer :user_id
      t.string :contents

      t.timestamps
    end
  end
end
