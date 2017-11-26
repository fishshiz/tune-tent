Album.delete_all

Album.create!(
  title: 'The 404 Sessions',
  album_img_url: 'edn',
  user_id: 1
)

User.create!(
  username: 'Sufjan Stevens',
  password: 'password',
  img_url: 'https://media.pitchfork.com/photos/592c56edeb335119a49f0d84/master/w_790/5ed7c3d9.jpg',
  bio: 'Hi, my name is Sufjan. I am from Brooklyn and I love rabbits.',
  genre: 'Folk-Rock',
  fb_link: 'http//facebook.com',
  soundcloud_link: 'http//soundcloud.com',
  twitter_link: 'http//twitter.com',
  web_link: 'http//edanlewis.com'
)
