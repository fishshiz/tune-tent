class Track < ApplicationRecord
  validates :title, :album_id, presence: true

  belongs_to :album

  has_attached_file :audio
  validates_attachment_presence :audio
  validates_attachment_content_type :audio, :content_type => [ 'audio/mpeg', 'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio']

  def self.top_five_results(query_param)
    param = '%' + query_param.downcase + '%'
    Track.where('lower(title) LIKE ?', param).limit(5)
  end
end
