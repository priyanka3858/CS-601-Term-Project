<!-- Home page HTML-->
<template class="first_page">
  <body class="home">
    <!-- Start About section -->
    <div class="about_image">
      <!-- set image -->
      <img
        class="my_image"
        src="../assets/my_photo.jpg"
        alt="myimage"
        width="230"
        height="250"
      />
    </div>
    <!-- Name section show name and designation-->
    <div class="about_name_section">
      <h1 class="about_info"><b>Priyanka Vekariya</b></h1>
      <p class="about_info">Software Develpoer</p>
      <!-- Hire me button link to email -->
      <button id="bt1" class="button">
        <a
          id="mail_link"
          href="mailto:abc@example.com?subject = Feedback&body = Message"
        >
          Hire me
        </a>
      </button>

      <!-- Contact me button  router link to contact page-->
      <router-link :to="'/contact'">
        <button id="bt2" class="button">Contact me</button>
      </router-link>
    </div>
  </body>
</template>

<!-- Home page CSS-->
<style scoped>
.about_image {
  margin-top: 10px;
}
.my_image {
  border-radius: 50%;
  padding: 5px;
  margin: 45px;
}
.home {
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin: auto;
  width: 100%;
}
.about_info {
  font-size: 30px;
  color: black;
  margin: 15px;
  font-weight: 400;
}
.button {
  border-radius: 10px;
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  margin: 4px 2px;
  cursor: pointer;
  background-color: Transparent;
  color: rgb(96, 71, 71);
  font-weight: 600;
  box-shadow: 0px 0px 10px rgb(188, 181, 181);
}
.bt1 {
  margin-right: 50px;
}
.bt2 {
  margin-left: 50px;
}

.button:hover,
#mail_link:hover {
  color: #cf530c;
  transition: transform 0.5s ease;
  transform: scale(1);
  text-decoration: none;
}
a:hover {
  cursor: pointer;
  text-decoration: none;
}
#mail_link {
  font-size: 13px;
  color: rgb(96, 71, 71);
}
a#mail_link {
  text-decoration: none;
}

h1 {
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  /* text-fill-color: transparent; */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 190px;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
</style>
