# giftly

## Overview

giftly streamlines the process of giving and receiving gifts! Users can create personalized wishlists by uploading images of what they want and including details such as description, price, and a link to purchase. They can then share it with friends and family, making it easy for everyone to find the perfect gift. 

### Problem Space

For years I have given my wish list with just a bunch of links via email, but sometimes things change! I want to add a new item, or change the desired colour of an item on the existing wish list, or share it with additional people. It's cumbersome and not visually appealing to just send some links via email (and half the time I've forgotten which items I've sent to which person). 

### User Profile

Any person or group that gives and receives gifts! 

### Features

MVP:
- Home page which contains all wish list items a user has inputted
- Add new item to wish list where users can include a name, image, description, price, and link to purchase
- Edit or remove a wish list item
- Shareable to friends and family

Nice to have:
- User login
- User profile page with a profile image and about me (birthday/special dates for gifting, their clothing/shoe size, hobbies, favourite brands)
- Interaction with other users -> upon visiting a friends page you should see their wish list, see if any others have decided to gift an item from the registry, and also claim/make a purchase of one of their items
- Organize wish list items into categories or by occassion
- Notifications about upcoming events/birthdays etc.. 


## Implementation

### Tech Stack

Frontend: React, Vite, SASS, and axios

Backend: Node.js with Express, Knex, MySQL, and JWT


### APIs

- Get /wishlist (or maybe just /) to fetch the wish list items of the user (this would be the user's home page)
- Post /wishlist to add a new wish list item to your list
- Edit /wishlist/:id to edit the details of an existing item in the list
- Delete /wishlist/:id to remove a specific item on your list


### Sitemap

- Home page which contains each user's wish list as a "dashboard"
- Add new item page 
- Edit / Delete item page

### Mockups

![](Assets/README%20Assets/homePage_capstone.jpg) 
![](Assets/README%20Assets/profilePage_capstone.jpg) 
![](Assets/README%20Assets/addItemPage_capstone.jpg) 
![](Assets/README%20Assets/itemDetailsPage_capstone.jpg) 
![](Assets/README%20Assets/editItemPage_capstone.jpg)



