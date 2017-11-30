

User.delete_all

User.create!(
  username: 'Edan Lewis',
  password: 'winslow',
  img_url: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/users/images/000/000/001/original/15327809_1460202317342934_2101598170_n.jpg',
  bio: "Hi, my name is Edan. I am from Earth and I love rabbits. This site sure is a doozy isn't it?",
  genre: 'Folk-Rock',
  fb_link: 'https://www.facebook.com/edan.lewis.9',
  soundcloud_link: 'https://soundcloud.com/ednlws',
  twitter_link: 'https://twitter.com/edanflewis',
  web_link: 'https://edanlewis.com'
)

User.create!(
  username: 'demo',
  password: 'password',
  img_url: '',
  bio: 'Hi, this is a demo.',
  genre: 'Folk-Rock',
  fb_link: 'http//facebook.com',
  soundcloud_link: 'http//soundcloud.com',
  twitter_link: 'http//twitter.com',
  web_link: 'http//edanlewis.com'
)
