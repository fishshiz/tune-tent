class Album < ApplicationRecord
  validates :title, :album_img_url, :user_id, presence: true
  belongs_to :user
end
