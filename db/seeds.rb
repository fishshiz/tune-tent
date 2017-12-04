

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

demo = User.create!(
  username: 'demo',
  password: 'password',
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/users/images/000/000/120/original/man-person-wall-music.jpg',
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
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/users/images/000/000/038/original/GettyImages-544620729.jpg',
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
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/users/images/000/000/121/original/musician-1209073_960_720.jpg',
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
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/users/images/000/000/122/original/namebandredwhite.jpg',
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
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/users/images/000/000/123/original/Saxophonist-WEB.jpg',
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
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/users/images/000/000/124/original/band3.jpg',
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
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/users/images/000/000/125/original/bonnaroo-2014-ed-helms-billboard-650.jpg',
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
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/users/images/000/000/126/original/59368.jpg',
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
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/users/images/000/000/127/original/141013104244-hendrix4-horizontal-large-gallery.jpg',
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
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/albums/images/000/000/028/original/404-sessions.jpeg',
  user_id: edan.id
)

paintedeye = Album.create!(
  title: 'Painted Eye',
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/albums/images/000/000/114/original/painted_eyee.png',
  user_id: edan.id
)

a1 = Album.create!(
  title: 'The Way',
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/albums/images/000/000/109/original/deer_brother.jpg',
  user_id: d.id
)

a2 = Album.create!(
  title: 'Space is the Place',
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/albums/images/000/000/123/original/17.jpg',
  user_id: c.id
)

a3 = Album.create!(
  title: 'Blue Things',
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/albums/images/000/000/124/original/13883e735108ba412140bc13b79cc9d2--music-artwork-album-covers-artwork.jpg',
  user_id: c.id
)

a4 = Album.create!(
  title: 'Deer',
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/albums/images/000/000/125/original/1334088266-evol.jpg',
  user_id: e.id
)

a5 = Album.create!(
  title: 'Dogs',
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/albums/images/000/000/126/original/article-1352463-148DBC46000005DC-833_470x468.jpg',
  user_id: f.id
)

a6 = Album.create!(
  title: 'Turkey',
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/albums/images/000/000/127/original/blizzard-album-cover.jpg',
  user_id: h.id
)

a7 = Album.create!(
  title: 'SeaLion',
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/albums/images/000/000/128/original/epiclectic-630x630.jpg',
  user_id: b.id
)

a8 = Album.create!(
  title: 'SeaLion',
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/albums/images/000/000/129/original/etoile-yougoslavie.jpg',
  user_id: demo.id
)

a9 = Album.create!(
  title: 'Life in the Sun',
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/albums/images/000/000/130/original/image.jpg',
  user_id: b.id
)

a10 = Album.create!(
  title: 'Sunday Funday',
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/albums/images/000/000/131/original/IMG_8567.jpg',
  user_id: c.id
)

a11 = Album.create!(
  title: 'Sweet Things',
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/albums/images/000/000/132/original/ohb42d7uphhtxvfptkvv.jpg',
  user_id: d.id
)

a12 = Album.create!(
  title: 'Silly Noises',
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/albums/images/000/000/133/original/R-1065896-1262991657.jpeg.jpg',
  user_id: e.id
)

a13 = Album.create!(
  title: 'Some Songs',
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/albums/images/000/000/134/original/ryley-walker-covers.jpg',
  user_id: f.id
)

a14 = Album.create!(
  title: 'Baseball on the Mind',
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/albums/images/000/000/135/original/slack-imgs-7-480x480.jpg',
  user_id: demo.id
)

a16 = Album.create!(
  title: 'Lovely Sounds',
  image: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/albums/images/000/000/136/original/static1.squarespace.jpg',
  user_id: demo.id
)

Track.delete_all

Track.create!(
  title: 'Scary Sites',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/002/original/Tame_Impala_-_Cause_Im_A_Man.mp3',
  album_id: paintedeye.id
)

Track.create!(
  title: 'Coming Down',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: paintedeye.id
)

Track.create!(
  title: 'Black Ant',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a3.id
)

Track.create!(
  title: 'Self Explanatory',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a4.id
)

Track.create!(
  title: 'Facemelter',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a5.id
)

Track.create!(
  title: 'Boomerang',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a5.id
)

Track.create!(
  title: 'Vendette',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a6.id
)

Track.create!(
  title: 'Christmas',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a7.id
)

Track.create!(
  title: 'Piece',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a8.id
)

Track.create!(
  title: 'Government',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a9.id
)

Track.create!(
  title: '12',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a10.id
)

Track.create!(
  title: '1982',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a11.id
)

Track.create!(
  title: 'Underdog',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a12.id
)

Track.create!(
  title: 'D8M3',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a13.id
)

Track.create!(
  title: 'Night Owl',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a14.id
)

Track.create!(
  title: 'My Always Mood',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a14.id
)

Track.create!(
  title: 'Day Bird',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a16.id
)

Track.create!(
  title: 'My Luck',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a1.id
)

Track.create!(
  title: 'Mells Parade',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a2.id
)

Track.create!(
  title: 'Only Instrumental',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a3.id
)

Track.create!(
  title: 'Mornings',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a4.id
)

Track.create!(
  title: 'Acoustic Blues',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a5.id
)

Track.create!(
  title: 'Acoustic Meditation',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a6.id
)

Track.create!(
  title: 'Autumn Sunset',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a7.id
)

Track.create!(
  title: 'Back to the Woods',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a8.id
)

Track.create!(
  title: 'Bird in Hand',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a9.id
)

Track.create!(
  title: "Chasin' it",
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a10.id
)

Track.create!(
  title: 'Cry in my Beer',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a11.id
)

Track.create!(
  title: 'Dobro Funk',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a12.id
)

Track.create!(
  title: 'Funky Jam',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a13.id
)

Track.create!(
  title: 'Good Friend',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a14.id
)

Track.create!(
  title: 'Green Leaves',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a13.id
)

Track.create!(
  title: 'HoeDown',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a16.id
)

Track.create!(
  title: 'In the Field',
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a1.id
)

Track.create!(
  title: "Jenny's Theme",
  audio: 'https://s3-us-west-1.amazonaws.com/tune-tent-dev/tracks/audios/000/000/003/original/Bon_Iver_-_Coming_Down_(Anais_Mitchell_Cover).mp3',
  album_id: a2.id
)
