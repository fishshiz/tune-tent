

User.delete_all

edan = User.create!(
  username: 'Edan Lewis',
  password: 'winslow',
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/users/images/000/000/001/original/15327809_1460202317342934_2101598170_n.jpg',
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
  image: '',
  bio: 'Hi, this is a demo.',
  genre: 'Folk-Rock',
  fb_link: 'http//facebook.com',
  soundcloud_link: 'http//soundcloud.com',
  twitter_link: 'http//twitter.com',
  web_link: 'http//edanlewis.com'
)

a = User.create!(
  username: 'Jonny Appleseed',
  password: 'applezzz',
  image: File.new('../photos/artist-photos/man-person-wall-music.jpg'),
  bio: 'I <3 my banjo.',
  genre: 'Country',
  fb_link: 'https://facebook.com',
  soundcloud_link: 'https://soundcloud.com',
  twitter_link: 'https://twitter.com',
  web_link: 'https://edanlewis.com'
)

b = User.create!(
  username: 'Belinda Oglethorp',
  password: 'applsafezzz',
  image: File.new('../photos/artist-photos/musician-1209073_960_720.jpg'),
  bio: 'My name is Belinda and I really like TuneTent.',
  genre: 'Rock',
  fb_link: 'https://facebook.com',
  soundcloud_link: 'https://soundcloud.com',
  twitter_link: 'https://twitter.com',
  web_link: 'https://edanlewis.com'
)

c = User.create!(
  username: 'The XMen',
  password: 'applpgijezzz',
  image: File.new('../photos/artist-photos/namebandredwhite.jpg'),
  bio: "Don't you just LOVE these jackets?!?!",
  genre: 'Pop',
  fb_link: 'https://facebook.com',
  soundcloud_link: 'https://soundcloud.com',
  twitter_link: 'https://twitter.com',
  web_link: 'https://edanlewis.com'
)

d = User.create!(
  username: 'Lars Saxofone',
  password: 'applazz',
  image: File.new('../photos/artist-photos/Saxophonist-WEB.jpg'),
  bio: "I like horns. My skills are saxoFINE!",
  genre: 'Jazz',
  fb_link: 'https://facebook.com',
  soundcloud_link: 'https://soundcloud.com',
  twitter_link: 'https://twitter.com',
  web_link: 'https://edanlewis.com'
)

e = User.create!(
  username: 'Cohort Y',
  password: 'appla89zz',
  image: File.new('../photos/artist-photos/band3.jpg'),
  bio: "We ROCK!",
  genre: 'Rock',
  fb_link: 'https://facebook.com',
  soundcloud_link: 'https://soundcloud.com',
  twitter_link: 'https://twitter.com',
  web_link: 'https://edanlewis.com'
)

f = User.create!(
  username: 'Ed Holmes',
  password: 'appla8a9zz',
  image: File.new('../photos/artist-photos/bonnaroo-2014-ed-helms-billboard-650.jpg'),
  bio: "I don't know who you're talking about and I never heard of that show.",
  genre: 'Electronic',
  fb_link: 'https://facebook.com',
  soundcloud_link: 'https://soundcloud.com',
  twitter_link: 'https://twitter.com',
  web_link: 'https://edanlewis.com'
)

g = User.create!(
  username: 'CS5',
  password: 'appla8a9zz',
  image: File.new('../photos/artist-photos/59368.jpg'),
  bio: "Please let us know if you here of any gigs. Check our social accounts below!",
  genre: 'Hip Hop',
  fb_link: 'https://facebook.com',
  soundcloud_link: 'https://soundcloud.com',
  twitter_link: 'https://twitter.com',
  web_link: 'https://edanlewis.com'
)

h = User.create!(
  username: 'Jimi',
  password: 'appla8a9zz',
  image: File.new('../photos/artist-photos/141013104244-hendrix4-horizontal-large-gallery.jpg'),
  bio: "The wind cries Tune Tent.",
  genre: 'Rock',
  fb_link: 'https://facebook.com',
  soundcloud_link: 'https://soundcloud.com',
  twitter_link: 'https://twitter.com',
  web_link: 'https://edanlewis.com'
)

Album.delete_all

fourofour = Album.create!(
  title: 'The 404 Sessions',
  image: File.new('../photos/album-photos/404-sessions.jpeg'),
  user_id: edan.id
)

paintedeye = Album.create!(
  title: 'Painted Eye',
  image: File.new('../photos/album-photos/painted eyee.png'),
  user_id: edan.id
)

a1 = Album.create!(
  title: 'The Way',
  image: File.new('../photos/album-photos/17.jpg'),
  user_id: d.id
)

a2 = Album.create!(
  title: 'Space is the Place',
  image: File.new('../photos/album-photos/13883e735108ba412140bc13b79cc9d2--music-artwork-album-covers-artwork.jpg'),
  user_id: c.id
)

a3 = Album.create!(
  title: 'Blue Things',
  image: File.new('../photos/album-photos/1334088266-evol.jpg'),
  user_id: c.id
)

a4 = Album.create!(
  title: 'Deer',
  image: File.new('../photos/album-photos/article-1352463-148DBC46000005DC-833_470x468.jpg'),
  user_id: e.id
)

a5 = Album.create!(
  title: 'Dogs',
  image: File.new('../photos/album-photos/blizzard-album-cover.jpg'),
  user_id: f.id
)

a6 = Album.create!(
  title: 'Turkey',
  image: File.new('../photos/album-photos/epiclectic-630x630.jpg'),
  user_id: h.id
)

a7 = Album.create!(
  title: 'SeaLion',
  image: File.new('../photos/album-photos/etoile-yougoslavie.jpg'),
  user_id: b.id
)

a8 = Album.create!(
  title: 'SeaLion',
  image: File.new('../photos/album-photos/image.jpg'),
  user_id: a.id
)

a9 = Album.create!(
  title: 'Life in the Sun',
  image: File.new('../photos/album-photos/IMG_8567.jpg'),
  user_id: b.id
)

a10 = Album.create!(
  title: 'Sunday Funday',
  image: File.new('../photos/album-photos/ohb42d7uphhtxvfptkvv.jpg'),
  user_id: c.id
)

a11 = Album.create!(
  title: 'Sweet Things',
  image: File.new('../photos/album-photos/R-1065896-1262991657.jpeg.jpg'),
  user_id: d.id
)

a12 = Album.create!(
  title: 'Silly Noises',
  image: File.new('../photos/album-photos/ryley-walker-covers.jpg'),
  user_id: e.id
)

a13 = Album.create!(
  title: 'Some Songs',
  image: File.new('../photos/album-photos/slack-imgs-7-480x480.jpg'),
  user_id: f.id
)

a14 = Album.create!(
  title: 'Baseball on the Mind',
  image: File.new('../photos/album-photos/static1.squarespace.jpg'),
  user_id: g.id
)

a16 = Album.create!(
  title: 'Lovely Sounds',
  image: File.new('../photos/album-photos/worst-bad-album-covers-dick.jpg'),
  user_id: c.id
)

Track.delete_all

Track.create!(
  title: 'Scary Sites',
  audio: File.new('../audio/Tame Impala - Cause Im A Man.mp3'),
  album_id: paintedeye.id
)

Track.create!(
  title: 'Coming Down',
  audio: File.new('../audio/Bon Iver - Coming Down (Anais Mitchell Cover).mp3'),
  album_id: paintedeye.id
)

Track.create!(
  title: 'Fater Lee',
  audio: File.new('../audio/Black_Ant_-_01_-_Fater_Lee.mp3'),
  album_id: paintedeye.id
)

Track.create!(
  title: 'OhK',
  audio: File.new('../audio/Black_Ant_-_02_-_Oh_K.mp3'),
  album_id: a1.id
)

Track.create!(
  title: 'Black Ant',
  audio: File.new('../audio/Black_Ant_-_03_-_8bit2_3.mp3'),
  album_id: a2.id
)

Track.create!(
  title: 'Black Ant',
  audio: File.new('../audio/Black_Ant_-_04_-_Black_Ant.mp3'),
  album_id: a3.id
)

Track.create!(
  title: 'Self Explanatory',
  audio: File.new('../audio/Black_Ant_-_05_-_Self_Explainitory.mp3'),
  album_id: a4.id
)

Track.create!(
  title: 'Facemelter',
  audio: File.new('../audio/Black_Ant_-_06_-_fACEMELTERmp3.mp3'),
  album_id: a5.id
)

Track.create!(
  title: 'Boomerang',
  audio: File.new('../audio/Black_Ant_-_07_-_Boomerang.mp3'),
  album_id: a5.id
)

Track.create!(
  title: 'Vendette',
  audio: File.new('../audio/Black_Ant_-_08_-_Michael_Vendette.mp3'),
  album_id: a6.id
)

Track.create!(
  title: 'Christmas',
  audio: File.new('../audio/Black_Ant_-_09_-_Christmas_Eve_2009.mp3'),
  album_id: a7.id
)

Track.create!(
  title: 'Piece',
  audio: File.new('../audio/Black_Ant_-_10_-_5_Piece.mp3'),
  album_id: a8.id
)

Track.create!(
  title: 'Government',
  audio: File.new('../audio/Black_Ant_-_11_-_government_funded_weed.mp3'),
  album_id: a9.id
)

Track.create!(
  title: '12',
  audio: File.new('../audio/Black_Ant_-_12_-_649.mp3'),
  album_id: a10.id
)

Track.create!(
  title: '1982',
  audio: File.new('../audio/Black_Ant_-_13_-_1982.mp3'),
  album_id: a11.id
)

Track.create!(
  title: 'Underdog',
  audio: File.new('../audio/Black_Ant_-_14_-_Underdog.mp3'),
  album_id: a12.id
)

Track.create!(
  title: 'D8M3',
  audio: File.new('../audio/Black_Ant_-_15_-_D8M3.mp3'),
  album_id: a13.id
)

Track.create!(
  title: 'Night Owl',
  audio: File.new('../audio/Broke_For_Free_-_01_-_Night_Owl.mp3'),
  album_id: a14.id
)

Track.create!(
  title: 'My Always Mood',
  audio: File.new('../audio/Broke_For_Free_-_02_-_My_Always_Mood.mp3'),
  album_id: a14.id
)

Track.create!(
  title: 'Day Bird',
  audio: File.new('../audio/Broke_For_Free_-_03_-_Day_Bird.mp3'),
  album_id: a16.id
)

Track.create!(
  title: 'My Luck',
  audio: File.new('../audio/Broke_For_Free_-_04_-_My_Luck.mp3'),
  album_id: a1.id
)

Track.create!(
  title: 'Mells Parade',
  audio: File.new('../audio/Broke_For_Free_-_05_-_Mells_Parade.mp3'),
  album_id: a2.id
)

Track.create!(
  title: 'Only Instrumental',
  audio: File.new('../audio/Broke_For_Free_-_06_-_Only_Instrumental.mp3'),
  album_id: a3.id
)

Track.create!(
  title: 'Mornings',
  audio: File.new('../audio/Jason_Shaw_-_12_MORNINGS.mp3'),
  album_id: a4.id
)

Track.create!(
  title: 'Acoustic Blues',
  audio: File.new('../audio/Jason_Shaw_-_ACOUSTIC_BLUES.mp3'),
  album_id: a5.id
)

Track.create!(
  title: 'Acoustic Meditation',
  audio: File.new('../audio/Jason_Shaw_-_ACOUSTIC_MEDITATION.mp3'),
  album_id: a6.id
)

Track.create!(
  title: 'Autumn Sunset',
  audio: File.new('../audio/Jason_Shaw_-_AUTUMN_SUNSET.mp3'),
  album_id: a7.id
)

Track.create!(
  title: 'Back to the Woods',
  audio: File.new('../audio/Jason_Shaw_-_BACK_TO_THE_WOODS.mp3'),
  album_id: a8.id
)

Track.create!(
  title: 'Bird in Hand',
  audio: File.new('../audio/Jason_Shaw_-_BIRD_IN_HAND.mp3'),
  album_id: a9.id
)

Track.create!(
  title: "Chasin' it",
  audio: File.new('../audio/Jason_Shaw_-_CHASIN_IT.mp3'),
  album_id: a10.id
)

Track.create!(
  title: 'Cry in my Beer',
  audio: File.new('../audio/Jason_Shaw_-_CRYIN_IN_MY_BEER.mp3'),
  album_id: a11.id
)

Track.create!(
  title: 'Dobro Funk',
  audio: File.new('../audio/Jason_Shaw_-_DOBRO_MASHUP.mp3'),
  album_id: a12.id
)

Track.create!(
  title: 'Funky Jam',
  audio: File.new('../audio/Jason_Shaw_-_FUNKY_JUNKY.mp3'),
  album_id: a13.id
)

Track.create!(
  title: 'Good Friend',
  audio: File.new('../audio/Jason_Shaw_-_GOOD_FRIEND.mp3'),
  album_id: a14.id
)

Track.create!(
  title: 'Green Leaves',
  audio: File.new('../audio/Jason_Shaw_-_GREEN_LEAVES.mp3'),
  album_id: a13.id
)

Track.create!(
  title: 'HoeDown',
  audio: File.new('../audio/Jason_Shaw_-_HOEDOWN.mp3'),
  album_id: a16.id
)

Track.create!(
  title: 'In the Field',
  audio: File.new('../audio/Jason_Shaw_-_IN_THE_FIELD.mp3'),
  album_id: a1.id
)

Track.create!(
  title: "Jenny's Theme",
  audio: File.new('../audio/Jason_Shaw_-_JENNYS_THEME.mp3'),
  album_id: a2.id
)

Track.create!(
  title: 'Back to the Woods',
  audio: File.new('../audio/Jason_Shaw_-_BACK_TO_THE_WOODS.mp3'),
  album_id: a3.id
)

Track.create!(
  title: 'Major Skull Damage',
  audio: File.new('../audio/Sea_of_Aland_-_04_-_Major_Skull_Damage.mp3'),
  album_id: a4.id
)

Track.create!(
  title: 'All Nine Dead',
  audio: File.new('../audio/Sea_of_Aland_-_06_-_All_Nine_Dead.mp3'),
  album_id: a5.id
)

Track.create!(
  title: 'Enthusiast',
  audio: File.new('../audio/Tours_-_01_-_Enthusiast.mp3'),
  album_id: a6.id
)

Track.create!(
  title: 'Sidewalk',
  audio: File.new('../audio/Jason_Shaw_-_SIDEWALK.mp3'),
  album_id: a7.id
)

Track.create!(
  title: 'Tennesee Hayride',
  audio: File.new('../audio/Jason_Shaw_-_TENNESEE_HAYRIDE.mp3'),
  album_id: a8.id
)
