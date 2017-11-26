Album.delete_all

Album.create!(
  title: 'The 404 Sessions',
  album_img_url: 'https://f4.bcbits.com/img/a1096340222_16.jpg',
  user_id: 1
)

Album.create!(
  title: 'Come on, Feel the Illinoise',
  album_img_url: 'https://www.besteveralbums.com/albumart/album_large_1394_4e76d58a18b28.jpg',
  user_id: 38
)

Album.create!(
  title: 'The Age of Adz',
  album_img_url: 'http://f4.bcbits.com/img/a0897080833_2.jpg',
  user_id: 38
)

Album.create!(
  title: 'Michigan',
  album_img_url: 'https://i.ytimg.com/vi/UsZTQjsqiXI/maxresdefault.jpg',
  user_id: 38
)

Album.create!(
  title: 'Carrie & Lowell',
  album_img_url: 'https://media.pitchfork.com/photos/5929ac5c5e6ef959693218f8/1:1/w_600/dbfa1978.jpg',
  user_id: 38
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
