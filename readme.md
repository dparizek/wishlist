#Wishlist

##Overview

I built Wishlist as a way to easily track favorite products from the web in a clean & simple way. Products can be added manually through the web app or by using the [Wishlist chrome extension](https://chrome.google.com/webstore/detail/lopficaepgghcelaeifkmgpcfhfdlkik "Wishlist Chrome Extension").


##Technologies Used
* Ruby 2.1.1
* Rails 4.1.1
* PostgreSQL Database
* Google Authentication using [OmniAuth Google OAuth2 Strategy](https://github.com/zquestz/omniauth-google-oauth2 "OmniAuth Google OAuth2 Strategy")
* [Backbone.js](http://backbonejs.org/ "Backbone.js") for JavaScript framework
* [Masonry.js](http://masonry.desandro.com/ "Masonry.js") for  JavaScript grid layout library
* [Skeleton](http://www.getskeleton.com/ "Skeleton") for Responsive CSS Framework
* [Google Chrome Extension API's](https://developer.chrome.com/extensions/api_index "Google Chrome Extension API's")

##User Stories Completed
### Web Application
* User can log in via Google authentication
* User can manually add item using fields for title, image URL, and webpage URL
* User can see a list of their items (masonry.js)
* User can see sharp-looking single page app (backbone.js)
* User can hover over image to see details
* User can delete items from their wishlist

### Chrome Extension
* User must be logged in to use extension
* User can download chrome extension from store to add images/items directly to wishlist from page
* User can click on chrome extension to highlight all images on page and select choice to be added to wishlist
* When using extension, user will see "clean" webpage after image selection, meaning images will not longer be highlighted

##Backlog
A full list of user stories can be found by looking at [this Pivotal Tracker](https://www.pivotaltracker.com/s/projects/1119660 "Pivotal Tracker"). This project is a work in progress, and I'll be chipping away at that icebox!

##Production
Explore Wishlist for yourself on [Heroku](http://w1shlist.herokuapp.com/)


