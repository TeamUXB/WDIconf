# DB Migration CheatSheet
This is a documentation on how to perform DB Migration
____

###When to do this
There are 1 situation this action is to be perform. THERE ARE NO EXCEPTION

JC IS THE ONLY PERSON IN-CHARGE OF MIGRATION.

No one write anything for seed.rb except JC. If you ever do anything like, it will be ignore.

Send JC(jcleefw@gmail.com) a copy of your seed file seperately if you need it to be in.

### What happens if you need to add stuff into your local database, playing with data and seed.
Please use rails console to make changes only database on your local database.


### Do this on the first time initializing project
Prework - git pull upstream develop (to get the rails project source code).

1. Run git status to make sure it is the following message is shown
  ``` On branch master
      Your branch is up-to-date with 'origin/master'.
      nothing to commit, working directory clean ```
2. Create & Setup Database on  rails project
  ``` rake rb:create ```
3. Run Migration files
  ``` rake db:migrate ```


## The Process
Prework - git pull upstream develop (to get all the changes)

1. open psql in a terminal, connect to the DB. Make sure you are connected to the right DB
    ``` \c wdiconf_development ```
2. copy and paste the content of from db/db_reset.sql file into the psql window
3. Run Migration files
  ``` rake db:migrate ```
3. Run Seed files
  ``` rake db:seed ```