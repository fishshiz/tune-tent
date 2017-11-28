class Album < ApplicationRecord
  validates :title, :album_img_url, :user_id, presence: true
  belongs_to :user
  has_many :tracks

  has_attached_file :image, default_url: "missing_album.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def self.top_five_results(query_param)
    param = '%' + query_param.downcase + '%'
    Album.where('lower(title) LIKE ?', param).limit(5)
  end
end
