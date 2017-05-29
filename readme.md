# Deviget Minesweeper

Example working on [http://deviget-test-jose.herokuapp.com/](http://deviget-test-jose.herokuapp.com/)

Project source on [https://github.com/netojose/deviget-test](https://github.com/netojose/deviget-test)

## What is complete
:white_check_mark: Full back-end implementation, with all routes working:

![Routes application](https://image.prntscr.com/image/138bc34dcce14630848edce6aa4b4991.png)

There is a [postman file](https://github.com/netojose/deviget-test/blob/master/postman_collection.json), with all routes and examples.

* Login/register
* Create game
* Get games by user
* Get specific game
* Update game (cells tatus, time, game status)

:white_check_mark: Back-end storage full working

:white_check_mark: Front-end interface and interaction

* Register/Login
* Create a new game
* Load a saved game

## What is incomplete
:x: Front-end tasks:

* Open cells
* Flag cells (question mark or red flag)
* Start timer
* Unit tests

:x: Back-end tasks:

* Unit tests

## Decisions taken
* I used sqLite on local environment, but heroku delete the database file on every deploy or each 24 hours. So, I'm using MySql database on Heroku because of Heroku limitations.
* Because of short time (Is impossible finish the task [Front&back] in 5 hours), I droped the tests (server-side tests and front-end tests). I hate work without tests :rage:

## Important notes
* The time sum of the `commits` spend more than 5 hours. But I don't was working all the time, I stoped many times for to do other things here (cooking, eat, go to supermarket, etc.), so the total time at work was 5 or 6 hours approximately.
* The cells interactions is not done, **but** you can click on cell, and on browser console, cell information will be displayed (to be used on next step [flag/reveal cell]).