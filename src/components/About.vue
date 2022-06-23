<!-- About page HTML-->
<template>
  <body>
    <main id="intro-section" class="section-info">
      <!-- header section -->
      <header>
        <div class="my-intro">
          <h1><b>MY UNEXPECTED PATH </b></h1>
        </div>
      </header>
      <!-- this section shows intoduction page -->
      <div id="intro-para" class="my-info">
        <p class="paragraph-intro">
          Priyanka Vekariya is my name. My life path has been anything but
          predictable. In India, I earned a bachelor's degree in accounting and
          finance. After finishing my Bachelor's degree, I interned for three
          years with a chartered accounting business. My auditing, taxation, and
          accounting knowledge. However, after years of working there, I rapidly
          recognized that it was not my type of area or lifestyle. I believe
          that one's work should be meaningful or have an impact on one's life.
          I've been highly immersed in Computer Science courses for the previous
          two years, learning HTML, CSS, and JavaScript. But I'm finding that
          Computer Science is much more than just learning a programming
          language. That is why I chose to return to school and obtain a
          degree.That's why I decided to go back to school and acquire the
          necessary skill set to become successful in my career.
        </p>
        <p class="paragraph-intro">
          I applied for and was accepted to Boston University's master of
          science in software development (MSSD) program. I have finished four
          MSSD courses. Between all of this, I've learned a lot from this
          Master's degree. Cooking is something I enjoy doing in my spare time.
          Almost all Indian vegetarian recipes are now second nature to me. In
          real life, I appreciate people who do yoga and running. I am a web
          developer that enjoys designing visually appealing websites. I have a
          business background and a strong desire to learn new technology. 
        </p>
      </div>

      <!-- End intro  section -->
      <!-- Start About info section -->
      <div class="list-heading-div">
        <h2 class="list-heading">Personal Information</h2>
      </div>
      <section class="about-list-div1">
        <div class="about-list-div">
          <div class="row-list">
            <div class="column-list" style="background-color: #aaa">
              <h3>Birthday</h3>
              <p>01 Augest 1994</p>
            </div>
            <div class="column-list" style="background-color: #bbb">
              <h3>Email</h3>
              <p>Priyanka3858@gmail.com</p>
            </div>
          </div>
          <div class="row">
            <div class="column-list" style="background-color: #ccc">
              <h3>Phone:</h3>
              <p>+1 551-285-9566</p>
            </div>
            <div class="column-list" style="background-color: #ddd">
              <h3>City:</h3>
              <p>Jersey City, NJ</p>
            </div>
          </div>
        </div>
      </section>
      <!-- End About info section -->

      <!--  Start skill  info section -->
      <div class="list-heading-div">
        <h2 class="list-heading">Technical Skill</h2>
      </div>
      <section class="about-list-div1">
        <div class="about-list-div">
          <div class="row-list">
            <div class="column-list" style="background-color: #aaa">
              <h3>Python</h3>
            </div>
            <div class="column-list" style="background-color: #bbb">
              <h3>Java</h3>
            </div>
          </div>
          <div class="row">
            <div class="column-list" style="background-color: #ccc">
              <h3>HTML</h3>
            </div>
            <div class="column-list" style="background-color: #ddd">
              <h3>CSS</h3>
            </div>
          </div>
          <div class="row">
            <div class="column-list" style="background-color: #aaa">
              <h3>JavaScript</h3>
            </div>
            <div class="column-list" style="background-color: #bbb">
              <h3>React, Vue</h3>
            </div>
          </div>
          <div class="row">
            <div class="column-list" style="background-color: #ccc">
              <h3>Github</h3>
            </div>
            <div class="column-list" style="background-color: #ddd">
              <h3>Software Design Patterns</h3>
            </div>
          </div>
        </div>
      </section>
      <!--  End skill  info section -->

      <!-- collage course -->
      <section>
        <table>
          <caption>
            Core Courses in MSSD
          </caption>
          <thead>
            <tr>
              <th scope="col">Course Name</th>
              <th scope="col">Grade</th>
              <th scope="col">Language Skill</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">MET CS 521 Information Structures with Python</th>
              <td>A</td>
              <td>Python</td>
            </tr>
            <tr>
              <th scope="row">MET CS 526 Data Structures and Algorithms</th>
              <td>B</td>
              <td>Java, Algorithms</td>
            </tr>
            <tr>
              <th scope="row">MET CS 622 Advanced Programming Techniques</th>
              <td>A</td>
              <td>Java, SpringBoot</td>
            </tr>
            <tr>
              <th scope="row">MET CS 665 Software Design and Patterns</th>
              <td>A</td>
              <td>Java, Design Pattern</td>
            </tr>
            <tr>
              <th scope="row">MET CS 601 Web App Development</th>
              <td>-</td>
              <td>HTML, CSS, JavaScript, React, Vue</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
    <!-- End Technical Skill section-->
  </body>
</template>

<!-- About page CSS-->

<style scoped>
h1 {
  color: #5a665f;
  font-family: Times, serif;
  font-weight: 700;
  font-size: 2rem;
  line-height: 3.5rem;
  text-transform: uppercase;
  text-align: center;
  padding: 1.2rem;
  display: block;
  border: 1px solid #5a665f;
  margin-bottom: 1rem;
  border-radius: 10px;
}
.my-intro {
  width: 80%;
  margin: 20px auto;
}

.paragraph-intro {
  font-size: 20px;
  text-align: center;
  line-height: 1.4rem;
  font-weight: 400;
  margin: 15px 160px 15px 160px;
  text-align: justify;
}

* {
  box-sizing: border-box;
}

/* Create two equal columns that floats next to each other */
.column-list {
  float: left;
  width: 50%;
  padding: 10px;
}

/* Clear floats after the columns */
.row-list:after {
  content: "";
  display: table;
  clear: both;
}
.about-list-div {
  margin: 10px 80px 130px 80px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  /* font-family: "Nunito", sans-serif; */
  color: #384047;
}

table {
  max-width: 960px;
  margin: 10px auto;
}

thead th {
  font-weight: 400;
  background: #8a97a0;
  color: #fff;
}

tr {
  background: #ccc;
  border-bottom: 1px solid #fff;
  margin-bottom: 5px;
}

tr:nth-child(even) {
  background: #e8eeef;
}

th,
td {
  text-align: left;
  padding: 20px;
  font-weight: 300;
}

tfoot tr {
  background: none;
}

tfoot td {
  padding: 10px 2px;
  font-size: 0.8em;
  font-style: italic;
  color: #8a97a0;
}
caption {
  display: table-caption;
  text-align: center;
  font-size: 32px;
  font-weight: bolder;
  letter-spacing: 1px;
  border-block: 1px solid;
  border-radius: 20px;
  margin-bottom: 30px;
  padding: 5px;
  margin-top: 60px;
}
.list-heading {
  display: block;
  text-align: center;
  font-size: 32px;
  font-weight: bolder;
  letter-spacing: 1px;
  border-block: 1px solid;
  border-radius: 20px;
  margin: 0 auto;
  width: 90%;
}

.list-heading-div {
  margin-top: 40px;
  margin-bottom: 30px;
}
</style>
