class Postit < ApplicationRecord
  def self.color_picker
    ['yellow', 'green', 'blue'].sample
  end
  validates :content, presence: true
  attribute :color, :string, default: color_picker
  attribute :upvotes, :integer, default: 0
end
