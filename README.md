<p align="center">
<img src="https://user-images.githubusercontent.com/46590330/120651419-b7686c80-c4b9-11eb-8b19-5fd8f41851e5.png" width="30%"/>
<br/>
</p>
<p>This project is for the Design Project of <b>KAIST CS492E: "Human-AI Interaction" course</b>.<p/>

## Project Name & Purpose

**Vocali**

This service recommends songs based on user information for those who have difficulty choosing songs to sing in karaoke. Users record their voices to analyze their vocal range, and input their favorite songs and current moods. Accordingly, the system recommends appropriate songs through machine learning model. Users can get a explanation of the recommended results, or they can send feedback on the recommended results to further customize the results.

## Build with

#### Framework
* [Ant-Design](https://ant.design): for effectively connecting graphic & interaction design in Figma with front-end developing
* [React JS](https://reactjs.org)

#### Libraries
* [web-audio-daw](https://github.com/rserota/wad): recording user voice via microphone on browser

#### Deploy
* [Github Pages](https://pages.github.com)

## Project Status

This project is almost completed. We are going to conduct user study to find out whether this system can actually help users.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Run Development Suite:

`npm run start`

To Build Application:

`npm run build`

To Update github pages

`npm run deploy`

To Visit App:

`localhost:3000/vocali-web`

## Project Screenshots
<p float="left">
  <img src="https://user-images.githubusercontent.com/46590330/120652268-948a8800-c4ba-11eb-9b2d-7b9d718bbd49.png" width="20%"/>
  <img src="https://user-images.githubusercontent.com/46590330/120652530-d1ef1580-c4ba-11eb-82e7-d02ab088d9bd.png" width="20%"/>
  <img src="https://user-images.githubusercontent.com/46590330/120652545-d3204280-c4ba-11eb-9e4a-b0acbb80fcca.png" width="20%"/>
  <img src="https://user-images.githubusercontent.com/46590330/120652527-d1567f00-c4ba-11eb-83f9-714e5d2d78d3.png" width="20%"/>
</p>
<p float="left">
  <img src="https://user-images.githubusercontent.com/46590330/120652537-d287ac00-c4ba-11eb-81fa-0749ce492f0e.png" width="20%"/>
  <img src="https://user-images.githubusercontent.com/46590330/120652519-cf8cbb80-c4ba-11eb-8c0d-bac789043c0a.png" width="20%"/>
  <img src="https://user-images.githubusercontent.com/46590330/120652523-d0bde880-c4ba-11eb-95fc-00e5b6491740.png" width="20%"/>
</p>

## Project Structure

### Featured Pages

#### `src/App.js`

Routing each pages

#### `src/PitchDetect.js`

Recording users' voice and analyze vocal range.

#### `src/SonfPref.js`

Page that shows list of the songs that could be the seed for the recommendation model. Users can select the songs that they like to sing among this list.

#### `src/Home.js`

Page that contains several categories that can indicate users' current mood. The selection affects the recommendation result.

#### `src/Result.js`

Page that shows the recommendation result. It shows the recommending song one by one and users should enter their feedback to the song to see the next recommendation. Also, users can see the explanation about the recommendation and change the weight of each factor to control the model.

#### `src/List.js`

Page that shows the list of the songs that the user liked.


### Components

#### `SimpleHeader.js` `InfoHeader.js`

Header for many pages.

#### `Footer.js`

Footer for result pages.
