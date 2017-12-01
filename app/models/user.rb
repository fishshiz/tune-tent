# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  img_url         :string
#  bio             :text
#  genre           :string
#  fb_link         :string
#  twitter_link    :string
#  soundcloud_link :string
#  web_link        :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :session_token, uniqueness: true

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :albums

  attr_reader :password
  after_initialize :ensure_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def self.top_five_results(query_param)
    param = '%' + query_param.downcase + '%'
    User.where('lower(username) LIKE ?', param).limit(5)
  end

end
