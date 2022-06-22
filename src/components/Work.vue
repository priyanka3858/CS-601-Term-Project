<!-- work -->
<template>
  <body>
    <!-- START WORK INTRO SECTION -->
    <main>
      <section id="work-section" class="section-info">
        <div class="my-info">
          <h3 class="work-heading">Work Experiance</h3>
          <div class="work-para">
            <p class="paragraph">
              Through this course in the MSSD program, I acquired the
              fundamentals of Python, Java, Javascript, React, Vue, HTML, and
              CSS.  I began learning basic HTML and CSS and built a few projects
              on Freecodecamp.org. After enrolling in Boston University's Master
              of Science in Software Development program, I created a Daily
              Planner in Python. Following that, I learned about the Flkas web
              framework and built a Python app for a cryptocurrency pricing
              list. The JAVA application that follows is a password manager that
              remembers passwords and usernames from many websites on the
              internet. A simple To-Do List React was also created. I'll also
              add database support and the ability to host a web app in Vercel
              to my To-Do List app. In this course, I learned a lot about
              front-end web development by using HTML, CSS, and JavaScript to
              create a website that users can read and interact with.
            </p>
          </div>
        </div>

        <!-- END WORK INTRO SECTION -->

        <!-- START WORK PROJECT SECTION  - Shows the all Project in table form with image and description-->

        <div id="work-list">
          <table>
            <div class="project-header">
              <caption>
                <b> Project List</b>
              </caption>
            </div>
            <tr>
              <th>Project</th>
              <th>Project Name</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>
                <img
                  src="../assets/pm.jpeg"
                  alt="pm"
                  height="200"
                  width="200"
                />
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
                  src="../assets/crypto_price.png"
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
                  src="../assets/schedular.png"
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
    </main>
  </body>
</template>

<style scoped>
.work-heading {
  color: #5a665f;
  display: block;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: 1px;
  border: 1px solid;
  border-radius: 20px;
  margin: 0 auto;
  width: 100%;
  padding: 11px 0;
  width: 90%;
}

.my-info {
  margin: 20px auto;
  width: 90%;
}

.work-para {
  font-size: 20px;
  text-align: center;
  line-height: 1.4rem;
  font-weight: 300;
  margin: 15px 100px 15px 100px;
  text-align: justify;
}
.paragraph {
  display: block;
  padding: 20px;
  width: 100%;
  margin: 20px auto;
  font-weight: 300;
  color: #373635;
}
caption {
  display: table-caption;
  text-align: center;
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 1px;
  border: 1px solid;
  border-radius: 20px;
  padding: 5px;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 40px;
}

table,
th,
td {
  border: 1px solid rgb(240, 232, 232);
  border-radius: 10px;
}

table {
  width: 80%;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 20px;
  border-collapse: collapse;
  font-family: "times new roman", serif;
  font-weight: 100;
  color: rgb(81, 71, 71);
  font-weight: 300;
  box-shadow: 0px 0px 10px rgb(36, 32, 32);
}

th {
  height: 50px;
  font-size: 1.1rem;
  text-align: center;
  padding: 4px;
  background-color: rgb(209, 180, 180);
}

td {
  height: 50px;
  font-size: 1.2rem;
  text-align: center;
  padding: 1px;
}

tr {
  background-color: #ccc;
  font-size: 20rem;
}
/*  set table data hover  decoration*/
tr:hover {
  background-color: rgb(226, 222, 222);
  transition: transform 0.5s ease;
  transform: scale(1.02);
}
</style>
