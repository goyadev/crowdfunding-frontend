# Crowdfunding Front-End

Goya Zheng

## Artstarter: crowdfunding for creatives

![Artstarter, crowdfunding for creatives](public/ARTSTARTER-header.png)
A platform for making the making easy. Spend more time creating and less time writing grant applications. A simple way to crowdfund for your next creative project. From music, to art, photography and all artistic outlets in between.

### Project requirements

#### Deployed Project Link: https://artstarter.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/b2dfb624-848c-40d5-b3bb-79d87ad19fb8/deploy-status)](https://app.netlify.com/sites/artstarter/deploys)

[x] Be separated into two distinct projects: an API built using the Django RestFramework and a website built using React.

[x] Have a cool name, bonus points if it includes a pun and/or missing vowels. Seehttps://namelix.com/ for inspiration. (Bonus Points are meaningless)
[x] Have a clear target audience.

[x] Have user accounts. A user should have at least the following attributes:

[x] Username<br>
[x] Email address<br>
[x] Password<br>

[x] Ability to create a “project” to be crowdfunded which will include at least the following attributes:

[x] Title<br>
[x] Owner (a user)<br>
[x] Description<br>
[x] Image<br>
[x] Target amount to fundraise<br>
[x] Whether it is currently open to accepting new supporters or not<br>
[x] When the project was created

[x] Ability to “pledge” to a project. A pledge should include at least the following attributes:

[x] An amount<br>
[x] The project the pledge is for<br>
[x] The supporter/user (i.e. who created the pledge)<br>
[x] Whether the pledge is anonymous or not<br>
[x] A comment to go along with the pledge<br>
[ ] Implement suitable update/delete functionality, e.g. should a project owner be allowed to update a project description?<br>
[ ] Implement suitable permissions, e.g. who is allowed to delete a pledge?

[x] Return the relevant status codes for both successful and unsuccessful requests to the API.<br>
[x] Handle failed requests gracefully (e.g. you should have a custom 404 page rather than the default error page).<br>
[x] Use Token Authentication<br>
[x] Implement responsive design

## A screenshot of the homepage

#### Mobile

![Home page mobile - light](src/assets/home-mobile-light.png)
![Home page mobile - dark](src/assets/home-mobile-dark.png)

#### Desktop

![Home page desktop - light](src/assets/home-desktop-light.png)
![Home page desktop - dark](src/assets/home-desktop-dark.png)

## A screenshot of the project creation page

#### Desktop - Single Project with Pledges

![Project with pledges desktop - light](src/assets/project-single-desktop-light.png)
![Project with pledges desktop - dark](src/assets/project-single-desktop-dark.png)

#### Desktop - Project List

![alt text](src/assets/project-list-desktop-light.png)
![alt text](src/assets/project-list-desktop-dark.png)

## A screenshot of the project creation form

#### Mobile

![Create project mobile - light](src/assets/create-project-mobile-light.png)
![Create project mobile - dark](src/assets/create-project-mobile-darkl.png)

#### Desktop

![Create project desktop - light](src/assets/create-project-desktop-light.png)
![Create project desktop- dark](src/assets/create-project-desktop-light.png)

## A screenshot of the resulting page when an unauthorized user attempts to edit a project

#### Desktop

![Unauthorised user attempte to create project - light](src/assets/unauth-create-project-light.png)
![Unauthorised user attempte to create project - dark](src/assets/unauth-create-project-dark.png)

## Contact Form

#### Mobile

![Contact us desktop dark ](src/assets/contact-us-mobile-dark.png)

#### Desktop

![Contact us mobile dark](src/assets/contact-us-desktop-dark.png)
