# Steadfast Custom Knives

![screen shot 2017-12-04 at 5 34 45 pm](https://user-images.githubusercontent.com/31824846/33633017-ab93d97a-d9cc-11e7-8e63-e36f91b3af91.png)


An e-commerce website for a knife making company. This was initially to be done using PayPal, Shopify or something similar. However, the business owner did not want to create a business acount for this website and we settled ona simple order form and a Venmo account. Despite my pleading and the time I sunk into figuring this out, the customer is always right.

Here is the [documentation for the PayPal API](https://developer.paypal.com/docs/classic/paypal-payments-standard/integration-guide/add_to_cart_step_1/) which was actually super helpful. 

### Challenges

Security is so super important when dealing e-commerce. People don't want to simply give away their private information. That's why I would definitely opt to go third party unless I was at a large company that had better infrastructure in place.

I found that designing this site was interesting because it was meant for people that don't often use the internet. I had to make things very clear and simple. The design had to be clean, but I couldn't get too creative because each time I did the owner would get nervous about it confusing the customers.

Another strange piece to this project was that beforehand, I knew absolutely nothing about knives. I had to do a ton of research to be able to know what things needed to be broken down and all of the different options.

### API

I create a Knife API, the end goal of this API is to pull in the knife information into my category page that breaks down the different types of knives they offer. Right now, all the routes work on the API side, I just haven't figured formatting on the Steadfast wesbite side of things. I used Mongoose and MongoDB for the database.

https://git.heroku.com/evening-eyrie-78865.git

### Deployment

Getting your second site off the ground on Dreamhost is a little bit more complicated than I expected, but also much easier? Since I had already paid to host, I didn't have to pay another hosting fee. Which confused me a ton, but is awesome. I also deplyed my API to Heroku which I pushed off until the end because we all know hwo Heroku is, but at this point it was fairly easy using the [instructions](https://github.com/SF-WDI-LABS/shared_modules/blob/master/how-to/heroku-mean-stack-deploy.md) we had had in an earlier lesson.

### Things I Learned

Creating a full-fledged website is HARD. There are so many details to nail and the more pages you create, the harder it is. The client, halfway thorugh the project period, decided he wanted to change the name of the company and the colors. That took changes in SO MANY spots. I definitely should have relied on Sass a little bit more than I did. Also, working with so many different pages is funny because you might change a CSS class property for one specific page, but then a few hours later when you go to a different page you realize that that change affected something else in a negative way. and  Had I known this was going to turn into my Project 4, I definitely would have used Angular, I think components would have made it much cleaner and easier for me to find things.

Working with customers is really difficult for a number of reasons. They don't have a lot of opinions before you get started, but as you go they develop *strong* feelings about the decisions your making for the site. But if you're able to navigate working with them it can be super rewarding. I already have 2 more requests for sites on my plate!

Also, Nick is full of garbage PHP is the shit. It was so easy to learn how to use. It's basically just english and JQuery.

### User Stories

Can be found on my [Trello](https://trello.com/b/XXWvWqaE/stronghold-custom-knives).


![giphy](https://user-images.githubusercontent.com/31824846/33633645-c3fafc80-d9ce-11e7-85de-d5a6237ca66d.gif)