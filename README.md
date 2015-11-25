A web page that generates a random pun.

Also included - parts for a pun guessing game.

See it running at [http://andrewmacheret.com/projects/pun](http://andrewmacheret.com/projects/pun).

Prereqs:
* [andrewmacheret/pun-server](https://github.com/andrewmacheret/pun-server)
* [Apache](https://httpd.apache.org/)

Installation steps:
* `git clone <clone url>`
* Edit the path to `pun.py` in `index.shtml` as needed

Test it:
* Open `index.shtml` in a browser. For testing purposes, if you don't have a web server, running `python -m SimpleHTTPServer` in the project directory and navigating to [http://localhost:8000](http://localhost:8000) should do the trick.
* You should see a random pun.

