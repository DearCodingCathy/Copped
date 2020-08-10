# Copped

- [Overview](#Overview)
  - [Core Features](#Core-Features)
  - [Goals](#Goals)
  - [Team](#Team)
  - [Permissions](#Permissions)
- [MVP](#MVP)
  - [Client (Front End)](#Client-Front-End)
    - [Wireframes](#Wireframes)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
  - [Server (Back End)](#Server-Back-End)
    - [ERD Model](#ERD-Model)
    - [Data Heirarchy](#Data-Heirarchy)
    - [Data Heirarchy](#Data-Heirarchy-1)
  - [Dependencies](#Dependencies)
- [Post-MVP](#Post-MVP)
- [Code Showcase](#Code-Showcase)
- [Code Issues & Resolutions](#Code-Issues--Resolutions)

<br>

## Overview

**Copped** is a web application for sneaker heads! Allowing users to create an account, create custom posts about their recent 'cops', and post about 'heat' they have seen in the street. Copped also gives users the ability to like, and comment on, their favorite posts. 

### Core Features

Core features of Copped include, secure web applictaion using Auth, with the ability to create, read, update, and delete.


### Goals

- Display User details
- Display Post and Users
- Add like/ comment ability/ association
- Search functionality 
- etc.

### Team

Created, designed, and developed by [Catherine Balogun](https://github.com/DearCodingCathy) for the General Assembly Software Engineering Immersive (August '20 Cohort) Unit 4 Project.

### Permissions

Digital assets used with full licensing and permission from [Death to Stock Photo](), [Freepik](), and [Unsplash](). Custom digital design and branding by John Lansing. Digital assets stored locally and on [Imgur]().

<br>

## MVP

The **Copped** MVP consist of authorization, giving the user the ability to upload edit, delete, like, and comment on post. 

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

https://wireframe.cc/pro/pp/fb806658f364797

- Desktop Landing

https://wireframe.cc/pro/pp/fb806658f364797
https://wireframe.cc/pro/pp/fb806658f364797#iol82ghs

- Desktop Hero

https://wireframe.cc/pro/pp/fb806658f364797#kj5alnok


#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

``` structure

src
|__ assets/
      |__ 
      |__ 
      |__ 
      |__ 
|__ components/
      |__ SearchBar.jsx
      |__ Navbar.jsx
      |__ Main.jsx
|__ screens/
      |__ UserLogin/
        |__ UserLogin.jsx
        |__ UserLogin.css
      |__ UserRegister/
        |__ UserRegister.jsx
        |__ UserRegister.css
      |__ProfileShow/
        |__ ProfileShow.jsx
        |__ ProfileShow.css
      |__ ProfileEdit/
        |__ ProfileEdit.jsx
        |__ ProfileEdit.css
      |__ AllPost/
        |__ Allpost.jsx
        |__ AllPost.css
      |__ PostDetail/
        |__ PostDetail.jsx
        |__ PostDetail.css
      |__ StreetHeatShow/
        |__StreetHeatShow.jsx
        |__ StreetHeatShow.css
       |__ StreetHeatDetail/
         |__ StreetHeatDetail.jsx
         |__ StreetHeatDetail.css
|__ services/
    |__ api-config.js

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|  Navigation  |   class |   y   |   y   | The navigation will provide links to multiple pages    |
|   SneakHeat Post    |   class    |   y   |   n   | The SneakHeat posts will render the posts using cards in Grid      |
| Posts | class |   n   |   y   | The Posts will render the post info via API call.              |
|    Profile Page    | class |   n   |   n   | The profile page will show information about the user. |

#### Component Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create CRUD Actions |    H     |     5 hrs      |     0 hrs     |     TBD     |
| Login Page    |    H     |     4 hrs      |     0 hrs     |    TBD    |
| Register Page    |    H     |     4 hrs      |     0 hrs     |    TBD    |
| Profile Page    |    H     |     4 hrs      |     0 hrs     |    TBD    |
| Profile Edit Page    |    H     |     3 hrs      |     0 hrs     |    TBD    |
| ShowAll Post     |    H     |     3 hrs      |     0 hrs     |    TBD    |
| PostDetail Page    |    H     |     3 hrs      |     0 hrs     |    TBD    |
| ShowAll StreetHeat    |    H     |     3 hrs      |     0 hrs     |    TBD    |
| StreetHeat Detail    |    H     |     2 hrs      |     0 hrs     |    TBD    |
| Add New Post    |    H     |     3 hrs      |     0 hrs     |    TBD    |
| Add new StreetHeat    |    H     |     3 hrs      |     0 hrs     |    TBD    |
| TOTAL               |          |    37 hrs      |     0 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

https://drive.google.com/file/d/1aXuRYpV8Vv3wlKn15ehNGaWnK1QnSMbu/view?usp=sharing

#### Data Hierarchy


``` structure

database_db
|__ users/
|__ posts/
|__ sneakposts/
|__ comments/
|__ likes/
|__ followers/


```

#### Data Hierarchy

> Use this section to display the expected endpoints from your API.

<br>

### Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | For the Front end of my web app |
|   React Router   | For easy user routing from page to page |
| React Bootstrap | For seamless inline styling |
| React Icons | To increase the user experince by using icons to speak with the user |
|     Rails      | To creat a custom back end |

<br> 

***

> This section is not necessary for your pitch!

# Catherine Fill all of this out later! 

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
