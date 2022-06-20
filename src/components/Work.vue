<template>
  <body>
    <!-- START WORK INTRO SECTION -->
    <section id="work-section" class="section-info">
      <div class="my-info">
        <h3>Work Experiance</h3>
        <p class="paragraph">
          I have personally learned basic knowledge of python, java, javascript,
          react, HTML, and CSS by watching a tutorial on Programming with Mosh
          on youtube. I have recently watched an HTML and CSS tutorial on
          Programming with Mosh.I have atteched an HTML and CSS tutorial video
          here.Programming with Mosh has a website where a bunch, of course,
          will help you better understand every course; Here is the link to the
          Website of Programming with Mosh:
          <a id="link" target="_blank" href="https://codewithmosh.com"
            >https://codewithmosh.com</a
          >
        </p>
      </div>

      <!-- This divison has a embed youtube vieo-->
      <div id="youtube-video">
        <iframe
          class="yt-video"
          src="https://www.youtube.com/embed/qz0aGYrrlhU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
      <div id="work">
        <p class="paragraph">
          On Freecodecamp.org, I first began learning basic HTML and CSS and
          creating a few projects. I designed a Daily Planner in Python after
          enrolling in Boston University's Master of Science in Software
          Development (MSSD). After that, I learned about the Flas web framework
          and constructed a Python app for a Crypto pricing list. The following
          JAVA program is a password manager that saves passwords and usernames
          from many websites on the internet. A Basic To-Do List React was also
          made. I'll also add additional functionality to my To-Do List app,
          such as a database and hosting a web app in Vercel. I learned about
          data structure algorithms and software design techniques as well.
        </p>
      </div>
      <!-- END WORK INTRO SECTION -->

      <!-- START WORK PROJECT SECTION  - Shows the all Project in table form with image and description-->
      <div id="work-list">
        <table>
          <caption>
            <h3 class="project-header">
              <b> These are some of my projects </b>
            </h3>
          </caption>
          <tr>
            <th>Project</th>
            <th>Project Name</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>
              <img src="public/pm.jpeg" alt="pm" height="200" width="200" />
            </td>
            <td>Password Manager</td>
            <td>
              The Password Manager App allows users to store passwords and
              Usernames of different websites from around the internet.
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="public/crypto_price.png"
                alt="crypto_pric"
                height="200"
                width="200"
              />
            </td>
            <td>Crypto price list</td>
            <td>
              The Crypto price list website shows all cryptocurrency's current
              price list and Market cap.
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="public/schedular.png"
                alt="schedular"
                height="200"
                width="200"
              />
            </td>
            <td>My Schedular App</td>
            <td>
              My Scheduler App is personal daily scheduler will help you to
              create and modify and track of user's daily schedule.
            </td>
          </tr>
        </table>
      </div>
    </section>
    <!-- END  START WORK PROJECT SECTION -->
  </body>
</template>

<style scoped></style>
