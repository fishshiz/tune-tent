class Album < ApplicationRecord
  validates :title, :album_img_url, :user_id, presence: true
  belongs_to :user
  has_many :tracks

  has_attached_file :image, default_url: "edan.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
