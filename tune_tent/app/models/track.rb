class Track < ApplicationRecord
  validates :title, :album_id, presence: true

  belongs_to :album

  has_attached_file :audio
  validates_attachment_presence :audio
  validates_attachment_content_type :audio, :content_type => ['audio/mpeg', 'audio/mp3']
end
