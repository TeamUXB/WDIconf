# ----------------------------------------------------------
#                   SEED DATA FORMATTING
#            field names required for table/model
#
# ACCESS LEVELS
# -------------
# id:serial, access_type:str
#
# USERS
# -----
# id:serial, access_level_id:int, email:str, login_type:int,
# password:str, password_salt:str
#
# SPEAKERS
# --------
# id:serial, user_id:int, name:str, blurb:str, image_url:str

# TALKS
# -----
# id:serial, title:str, blurb:str, description:text,
# timedate:datetime, limit:int, duration:int (mins),
# speaker_id:int

# TICKETS
# -------
# id: serial, registra: str, talk_id: int
# ----------------------------------------------------------


# ----------------------------------------------------------
#                     ACCESS LEVELS
# ----------------------------------------------------------

AccessLevel.create([{access_type:'admin'}])
AccessLevel.create([{access_type:'organizer'}])
AccessLevel.create([{access_type:'speaker'}])
AccessLevel.create([{access_type:'sponsor'}])

# ----------------------------------------------------------
#                        USERS
#         (who are speakers, who have talk/s)
#      will have same user, speaker and talk id's
# ----------------------------------------------------------

# ----------------------------------------------------------
#                      Phil: id=1
# ----------------------------------------------------------
User.create([{ access_level_id: 3, email: 'phil@codyperry.com', login_type:1, password: '123', password_salt: 'abcde' }])
Speaker.create([{ user_id: 1, name: 'Philip Castiglione', blurb: 'I’m a full stack web developer with a burning love for application development and architecture, coding and high tech funware!', image: 'profile_phil.jpg'}])
Talk.create([{ title: 'The Language of Programming', badge: 'Tech', blurb: 'The Language of Programming', description: 'Faker::Hacker.say_something_smart might get us through most conversations, but some day soon we will all be applying for jobs. Can you explain the difference between a statement and an expression? A function and a method? A framework and a library? What the heck even is a framework anyway? I have no idea how to answer any of these questions. Hopefully by the time I give this talk I will!', date: Time.utc(2015, 05, 22, 9, 30), limit: 30, duration: 15, speaker_id: 1 }])
# ----------------------------------------------------------
#                   Jaya Wijono: id=2
# ----------------------------------------------------------
User.create([{ access_level_id: 3, email: 'jaya@codyperry.com', login_type:1, password: '123', password_salt: 'abcde' }])
Speaker.create([{ user_id: 2, name: 'Jaya Wijono', blurb: 'I’m a full stack web developer with a burning love for application development and architecture, coding and high tech funware!', image: 'profile_jaya.jpg'}])
Talk.create([{ title: 'Webscraping with Ruby', badge: 'BE', blurb: 'Webscraping with Ruby', description: 'Journey into the world of webscraping, where you can extract almost ANYTHING out there in the internet. any information, news, feeds, you name it, it\'s out there within your reach. In this journey, I\'ll be sharing with you how to scrape stuffs out there in the wild.', date: Time.utc(2015, 05, 22, 9, 45), limit: 30, duration: 15, speaker_id: 2 }])
# ----------------------------------------------------------
#                   Justin Ward: id=3
# ----------------------------------------------------------
User.create([{ access_level_id: 3, email: 'justin@codyperry.com', login_type:1, password: '123', password_salt: 'abcde' }])
Speaker.create([{ user_id: 3, name: 'Justin Ward', blurb: 'I’m a full stack web developer with a burning love for application development and architecture, coding and high tech funware!', image: 'profile_justin.jpg'}])
Talk.create([{ speaker_id: 3, badge: 'Tech', title: 'Why Windows is a dev environment?', blurb: 'Why Microsoft Windows is a superior development environment', description: 'How to cure premature optimisation with benchmarking. Benchmarking, in-line C and external executables.', date: Time.utc(2015, 05, 22, 10, 45), limit: 30, duration: 15 }])
# ----------------------------------------------------------
#                   Mike Goodwin: id=4
# ----------------------------------------------------------
User.create([{ access_level_id: 3, email: 'mike@codyperry.com', login_type:1, password: '123', password_salt: 'abcde' }])
Speaker.create([{ user_id: 4, name: 'Mike Goodwin', blurb: 'I’m a full stack web developer with a burning love for application development and architecture, coding and high tech funware!', image: 'profile_mike.jpg'}])
Talk.create([{ speaker_id: 4, badge: 'BE',  title: 'Discussions About Dead Languages.', blurb: 'Discussions About (Not Quite) Dead Languages Part 1: COBOL', description: 'We begin our discussion of programming languages for which, despite public perception, the last rites have not yet been read. WS-NOT-QUITE-DEAD-LANGUAGES[0] => COBOL.', date: Time.utc(2015, 05, 22, 10, 15), limit: 30, duration: 15 }])
# ----------------------------------------------------------
#                   JC: id=5
# ----------------------------------------------------------
User.create([{ access_level_id: 3, email: 'jc@codyperry.com', login_type:1, password: '123', password_salt: 'abcde' }])
Speaker.create([{ user_id: 5, name: 'JC Lee', blurb: 'I’m a full stack web developer with a burning love for application development and architecture, coding and high tech funware!', image: 'profile_jc.jpg'}])
Talk.create([{ speaker_id: 5, badge: 'FE', title: 'Song Creation Lighweight', blurb: 'Song Creation Lighweight', description: 'It\'s always fun to create a song or customize karaoke demo if it\'s as simple as creating it on the fly on a web browser. Introducing Hookpad, demo and a bit of technology used to build it.', date: Time.utc(2015, 05, 22, 10, 30), limit: 30, duration: 15 }])
# ----------------------------------------------------------
#                   Matt Cameron: id=6
# ----------------------------------------------------------
User.create([{ access_level_id: 3, email: 'matt.c@codyperry.com', login_type:1, password: '123', password_salt: 'abcde' }])
Speaker.create([{ user_id: 6, name: 'Matt Cameron', blurb: 'I’m a full stack web developer with a burning love for application development and architecture, coding and high tech funware!', image: 'profile_matt.jpg'}])
Talk.create([{ speaker_id: 6, badge: 'Tech', title: 'Stop working and get rich, you idiot!', blurb: 'Stop working and get rich, you idiot!', description: 'Gone are the days of trading time for money. I\'ll show you how to leverage the Internet and earn passive income.', date: Time.utc(2015, 05, 22, 10, 45), limit: 30, duration: 15 }])
# ----------------------------------------------------------
#                   Louis Moore: id=7
# ----------------------------------------------------------
User.create([{ access_level_id: 3, email: 'louis@codyperry.com', login_type:1, password: '123', password_salt: 'abcde' }])
Speaker.create([{ user_id: 7, name: 'Louis Moore', blurb: 'I’m a full stack web developer with a burning love for application development and architecture, coding and high tech funware!', image: 'profile_louis.jpg'}])
Talk.create([{ speaker_id: 7, badge: 'BE', title: 'Solving Your IRL Tech Problems', blurb: 'Solving Your IRL Tech Problems', description: 'A couple of weeks ago, I solved my first real-life problem using the software dev skills from WDI (it\'s an awesome feeling). Join me in a short interactive demo, and lets discuss some current problems that you could tackle at home.', date: Time.utc(2015, 05, 22, 11, 00), limit: 30, duration: 15 }])
# ----------------------------------------------------------
#                   Nick Pateman: id=8
# ----------------------------------------------------------
User.create([{ access_level_id: 3, email: 'nick@codyperry.com', login_type:1, password: '123', password_salt: 'abcde' }])
Speaker.create([{ user_id: 8, name: 'Nick Pateman', blurb: 'I’m a full stack web developer with a burning love for application development and architecture, coding and high tech funware!', image: 'profile_nick.jpg'}])
Talk.create([{ speaker_id: 8, badge: 'FE', title: 'Panoramas in Photoshop', blurb: 'Panoramas in Photoshop', description: 'Something tech, not code. Seeing the magic of photoshop.', date: Time.utc(2015, 05, 22, 11, 30), limit: 30, duration: 15 }])
# ----------------------------------------------------------
#                   Beta Ngadiman: id=9
# ----------------------------------------------------------
User.create([{ access_level_id: 3, email: 'beta@codyperry.com', login_type:1, password: '123', password_salt: 'abcde' }])
Speaker.create([{ user_id: 9, name: 'Beta Ngadiman', blurb: 'I’m a full stack web developer with a burning love for application development and architecture, coding and high tech funware!', image: 'profile_beta.jpg'}])
Talk.create([{ speaker_id: 9, badge: 'FE', title: 'I have no idea what I am doing!', blurb: 'I have no idea what I am doing!', description: 'Design on the World Wide Web!', date: Time.utc(2015, 05, 22, 11, 45), limit: 30, duration: 15 }])
# ----------------------------------------------------------
#                   Luke Shillabeer: id=10
# ----------------------------------------------------------
User.create([{ access_level_id: 3, email: 'luke@codyperry.com', login_type:1, password: '123', password_salt: 'abcde' }])
Speaker.create([{ user_id: 10, name: 'Luke Shillabeer', blurb: 'I’m a full stack web developer with a burning love for application development and architecture, coding and high tech funware!', image: 'profile_luke.jpg'}])
Talk.create([{ speaker_id: 10, badge: 'BE', title: 'Anatomy of a security thingy', blurb: 'Anatomy of a security vulnerability', description: 'We\'ve heard about how hard security is, but whyyyy? Let\'s chat about it, specifically about a particular class of vulnerability called buffer overflow :)', date: Time.utc(2015, 05, 22, 12, 00), limit: 30, duration: 15 }])
# ----------------------------------------------------------
#                   Aden Margheriti: id=11
# ----------------------------------------------------------
User.create([{ access_level_id: 3, email: 'aden@codyperry.com', login_type:1, password: '123', password_salt: 'abcde' }])
Speaker.create([{ user_id: 11, name: 'Aden Margheriti', blurb: 'I’m a full stack web developer with a burning love for application development and architecture, coding and high tech funware!', image: 'profile_aden.jpg'}])
Talk.create([{ speaker_id: 11, badge: 'FE', title: 'Design trends through the years', blurb: 'Design trends through the years', description: 'From Hotdog to Paralax, we take a walk down internet memory lane, and have a look into what\'s in store for the web.', date: Time.utc(2015, 05, 22, 12, 15), limit: 30, duration: 15 }])


# ----------------------------------------------------------
#                     ADMIN USERS
# ----------------------------------------------------------
User.create([{ access_level_id: 1, email: 'admin@uxb.com', login_type:1, password: '123', password_salt: 'abcde' }])
User.create([{ access_level_id: 3, email: 'dt@uxb.com', login_type:1, password: '123', password_salt: 'abcde' }])


# ----------------------------------------------------------
#                        TICKETS
# ----------------------------------------------------------
Ticket.create([{registra: 'my@ga.com', talk_id:1}])
Ticket.create([{registra: 'my@ga.com', talk_id:2}])
Ticket.create([{registra: 'louis@ga.com', talk_id:1}])
Ticket.create([{registra: 'jared@ga.com', talk_id:1}])
