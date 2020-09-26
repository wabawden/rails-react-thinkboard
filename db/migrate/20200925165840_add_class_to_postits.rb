class AddClassToPostits < ActiveRecord::Migration[6.0]
  def change
    add_column :postits, :class, :string
    add_column :postits, :upvotes, :integer
  end
end
