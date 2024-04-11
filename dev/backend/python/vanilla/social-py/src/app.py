from src.database import Database
from src.models import Post, User

global db
db = Database.Database('./database.db')
user = User.User(db)
post = Post.Post(db)

def create_users():
    user.create_user(('Pennie Stutter', 'pstutter0@ehow.com', '$2a$04$c303rHNyYQ7JToC8Igsdy.37IZ1M3kkecrCMF7q.6fXxFN1J.QKOm'))
    user.create_user(('Wilmar Recke', 'wrecke1@smugmug.com', '$2a$04$ekypTQUOpbAZ69YAI.mQyeq.ABizaNeYdAMQLYSFXDwx8QhN0hZGW'))
    user.create_user(('Beatrix Pascho', 'bpascho2@ameblo.jp', '$2a$04$M043rtfugBwYXdU9ehqVbe4LuLWnpyPebLgxliuzdepKzGIKHloDq'))
    user.create_user(('Adelaide Gouley', 'agouley3@npr.org', '$2a$04$vxEL7yK4ygsAEOTPrDLI4emwaBvcWTR7A8hxbQNWsOqEuSWE/ImHi'))
    user.create_user(('Aron McGillivrie', 'amcgillivrie4@webeden.co.uk', '$2a$04$cdmEqs/S5gP/aT0FpMYD0ex.VnEKC3wp//DQ.NLeZ9uacskpzL4pG'))
    user.create_user(('Justine Brunnstein', 'jbrunnstein5@bing.com', '$2a$04$DnrqIETfPz.aYUU4eSP2euKGp6eNNAMxIBY9uXSU2cto1N1nB8wfW'))
    user.create_user(('Waylan Ruddiforth', 'wruddiforth6@marriott.com', '$2a$04$51RQ753nS6kuhwae5CDe/OqF4xD9dKZ2v81E/Bfm96gb6EQ0IrHbO'))
    user.create_user(('Merrilee Origan', 'morigan7@springer.com', '$2a$04$NkGLzZ5jUm3qbSsHiQ.QNO7PugUL2QqaG/oEBqw8W.dxMff/uruuq'))
    user.create_user(('Amara Mattaser', 'amattaser8@google.cn', '$2a$04$GDuiT12YRWw/Ni79m4K3/eIXpwhlj6NZlLmQ.G6/3zx1S0QnU2W7G'))
    user.create_user(('Audrie Truluck', 'atruluck9@storify.com', '$2a$04$Iw26iXpqP6R11uuDyUF8uOuckFRHBoJbcxeFrFNYrq2jIdIx/5VXS'))
    user.create_user(('Maurizio Birchwood', 'mbirchwooda@nationalgeographic.com', '$2a$04$AT5N2lw7JFd0O2L87timsepPqopH408SrkB6cEw898XAtR4jOoqq.'))
    user.create_user(('Dalli Halbeard', 'dhalbeardb@ft.com', '$2a$04$vOnO2RkzRF6Ujv1Vs.xtHuyrSR9XbsgjydbAf644.GtDgAUMCHMcy'))
    user.create_user(('Ely Ennals', 'eennalsc@google.it', '$2a$04$cfxj9NXnbrbL0tCgG8rTFO91i0g.yJu1gl00gdZJJURSXAD9tb/SK'))
    user.create_user(('Antonietta Woodington', 'awoodingtond@gov.uk', '$2a$04$kg8lf61GU9vdz05UGBErHucpO7KzI7PTedZqrHi1rLja8B2dn0HgK'))
    user.create_user(('Caren Rankine', 'crankinee@microsoft.com', '$2a$04$Z7cR28C/JykK3Pf.Sk/9r.KGGLC09IBHvF6FpyXWbUV1XIUCOvgTe'))
    user.create_user(('Clim Vanyushkin', 'cvanyushkinf@hexun.com', '$2a$04$LUIJYQ/6VBDKuNuf4fKNi.eWqO1kTeCPndwHHtazwX4S6vwyTRuDy'))
    user.create_user(('Jenilee Tatters', 'jtattersg@photobucket.com', '$2a$04$Ul25zACV2Gt3R/EHz/0wWOB6Q6l/3BreKBfALJQr.MYcSpyVJRoqm'))
    user.create_user(('Jecho Pleasance', 'jpleasanceh@salon.com', '$2a$04$wxZ.yQAAztWkZ0IR2W.yB.Ey6SiJ3a3JsGbprpRBeKjeDVn35AQK6'))
    user.create_user(('Grayce Ferrar', 'gferrari@hao123.com', '$2a$04$.NDn.9.zC3LFYJgy2RGTsu6sTej.WFLxGRQ6FQDx9Erhg9yZ4fY66'))
    user.create_user(('Tomaso Keoghane', 'tkeoghanej@wunderground.com', '$2a$04$mElUQYNYLzJ7XOO0x8D25eFsV7HQI1j8pzhimXrirw/kWn8gsJjjy'))
    user.create_user(('Tillie Giacovetti', 'tgiacovettik@soundcloud.com', '$2a$04$hW9FXcuYFz6NFhqNQZF8P.Xt3OngYGg1gl264RceJjM/R3K5CplkG'))

def follow_users():
    user.follow_user(1, 2)
    user.follow_user(1, 3)
    user.follow_user(1, 4)
    user.follow_user(1, 5)
    user.follow_user(2, 1)
    user.follow_user(2, 3)
    user.follow_user(2, 4)
    user.follow_user(2, 5)
    user.follow_user(3, 1)
    user.follow_user(3, 2)

def create_posts():
    post.create_post(1, 'Hello guys!')
    post.create_post(8, 'Morning 🌞')
    post.create_post(2, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.')
    post.create_post(2, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.')
    post.create_post(3, 'HNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.')
    post.create_post(4, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.')
    post.create_post(5, 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.')
    post.create_post(6, 'Fusce consequat. Nulla nisl. Nunc nisl.')

def like_posts():
    post.like_post(2, 1)
    post.like_post(3, 1)
    post.like_post(4, 2)
    post.like_post(4, 3)
    post.like_post(5, 4)
    post.like_post(6, 5)
    post.like_post(7, 6)
    post.like_post(8, 2)
    post.like_post(9, 2)
    post.like_post(10, 2)

def main():    
    create_users()
    follow_users()
    create_posts()
    like_posts()