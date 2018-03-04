# SPFx Angular CLI WebPart

SharePoint Framework - is awesome! But don't we wish it worked with Angular?
And in working with Angular, we mean - work with all of Angular. Not a half-cooked version.

# Angular

Angular is awesome, but requires a lot of startup ceremony.

#Angular-CLI

Angular CLI pretty much removes all that ceremony. It gives you a well put together project for Angular that gives you tests, scss support, lazy loading, bundling, etc. etc. basically everything you'd expect out of Angular.

I'd be willing to bet that the vast majority of code written in Angular is being written using Angular CLI.

# So .. 
Wouldn't it be nice if we could use SPFx with Angular CLI?
Yes - this project template lets you do exactly that.

# What about Angular-Elements?
I love Angular Elements and I think it will add a lot of value. 
But here is a myth: You need Angular Elements for SPFx.

NO YOU DON'T!

Angular Elements WILL add a lot of value, but I'd be willing to bet it'll work very nicely with Angular CLI too.

Still, you don't NEED Angular Elements to make it work with SPFx.

# Instructions
1. Make sure you have Angular CLI installed
2. Make sure your dev env is setup for SPFx (i.e. gulp, yeoman installed globally, and run gulp trust-dev-cert on an SPFx project first)
3. Then clone this repo, run npm install, and run either gulp serve or npm start.

Everything you'd expect from a SPFx project works here,
gulp clean
gulp --ship
gulp package-solution --ship etc.

Hit me with any questions!