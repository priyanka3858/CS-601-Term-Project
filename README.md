# MET CS 601 Term Project - Portfolio

### Description of Project

---

- The completed version of my website contains the HTML, CSS, Javascript, Vue , DOM for 7 fully designed and styled pages that use JavaScript.
- This project fully developed in Vue.js Framework.The homepage is the filename _"Home.vue"_. I have placed the every page as Components in Components Folder. There are 7 Components in tota are _"Home.vue", "About.vue", "Education.vue", "Work.vue", "Github.vue", "Travel.vue", "Conatct.vue"._
- Header, Footer, and Navigation Bar store as an seperate componentefile "App.vue" and link with every (page)Components file.
- I have also placed the images in the "../src/assets" directory.

### Github Repository

---

- To view this project on GitHub, please visit this link: [https://github.com/priyanka3858/CS-601-Term-Project.git]

- To access the live website (which is hosted on Cloudlare) link:- [https://601.pages.dev/]

## Project Goal - Portfolio

1. **Home.vue**

---

This is the homepage of the website. This pagehas My Image and My Name. I have used very beautiful CSS in my name. There is a Two button in the page. One is "Hire Me" and the other is "Conatct me". When you click on the "Hire Me" button, you will be redirected to the Email and you can email me. When you click on the "Contact me" button, you will be redirected to the "Contact" page.

2. **About.vue**

---

This is the abut page. This page has my Path to BU, Persoanl information, my skills and completed courses in BU. I have used very beautiful CSS in my information paragraph. FOR skill and Personal information i have creat two equal columns that floats next to each other and I have used CSS to make them equal width and with elegent different color pallete.to store courses I have used Table with caption and decorate with CSS.

3. **Education.vue**

---

This is the education page. This page has my education Degree Table. This page had button when click on its shows Degree Table and when click on the button it will hide button. I have used very beautiful CSS in this table and button.

- fetchDegrees() funaction fetch the data from the JSON file hosted in cloud fare then it calls the function fetchDegrees() to display the data
  response status is 200 if the data is successfullyfetched
  and return the data in the form of JSON object
  else it displays an error message.

4. **Work.vue**

---

This is the Work page. This page has shows Project list Table and also describe the how i started to learnig the web language. This project list show that what projec that i ahve completed. I have used CSS to make the table equal width and with elegent different color pallete. i have also add the table hover effect. when click on table row its color will change and zoom the whole row.

5. **Github.vue**

---

This is the Github page. This page has my public Github Repository in Grid layout. I have Create a API call to my public github responsitary. write Fuction that fetch json data from that API and display the data in the grid layout. I HAve fetch Project name, Project lanuage and project description. I have used CSS to make the grid layout.

6. **Travel.vue**

---

This is the Travel page. This page show the list of my travel destination list. at the top of the page shows quote with CSS. I have use Flex to present a a image and a travel description. I have used CSS to make the flex layout with elegent color.

7. **Conatct.vue**

---

This is the contact page. at the top of the page shows quote with CSS. I have add contact form with submit button and input field. I have used CSS to make the form with elegent color.

At the end of the age show social contact link like facebook, twitter and instagram. I have write a JavaScript function to presents the beautiful the social icon with social link when click on the social contact link it will redirect to the social media page.

I have used CSS Flex layout to make the social contact link with elegent color and hover effect.When Hover on icon it will cahnge the color of the icon.

8. **App.vue**

---

App.vue file set Navbar and Footer.for navbar link Router link eveyp page and set link footer to every page. This file have used CSS to make the header, footer, and navigation bar with elegent color. This file also has the link to each other page. Navigation is visually appealing and user in this website.

friendly.

8. **index.html**

---

this file is starter html file and link main.js file.

8. **router.js**

---

This File has Store all the PAge router link in Const Variable. This file import all the complonents .vue file from the Components Folder and store in a list of array. Creating a Single-page Application with Vue + Vue Router feels natural: with router.js, we are already composing our application with components. When adding Vue Router to the mix, all we need to do is map our components to the routes and let Vue Router know where to render them. Note how instead of using regular a tags, we use a custom component router-link to create links. This allows Vue Router to change the URL without reloading the page, handle URL generation as well as its encoding. We will see later how to benefit from these features.

router-view will display the component that corresponds to the url. You can put it anywhere to adapt it to your layout.
.

8. **main.js**

main.js file imoprt App.vue, router.js, and Vue. and mount all complonents to the DOM.

---

- Validation :-

---

In home.vue file I ahve validate CSS there is one warning but, that needed for animation.

### Extra Credit - How I Went Above and Beyond / How I Learned

---

1. Adding ES6 or Higher Functionality + Including Content From Module 5 (Including the Fetch API)

- I have used multiple ES6 functionality and higher, along with the content taught in Module 5 regarding fetch, async, and await. Specifically, I have used fetch to grab data from a JSON file. This file contains a list of Degree data I have put on in a table in the **Education page** on my website.

* In GitHub Page, i have Create a Rest API call to my public github responsitary. along with the content taught in Module 5 regarding fetch, async, and await and write Fuction that fetch json data from that API and display the data in the grid layout. I have fetch Project name, Project lanuage and project description. I have used CSS to make the grid layout.

- For ES6 functionality and higher, you'll notice an many use of template strings throughout , response ,promise in th the project's vue files. I have also use the v-for arrow functions, using let and const instead of var, and promises. My goal was to test out several ES6 functionalities in this term project.

- I have made navigation bar responsive with flex design layout. I have used CSS to make the navigation bar responsive with icon. when click on the icon it will show the navigation bar while click on the icon again it will hide the navigation bar.
