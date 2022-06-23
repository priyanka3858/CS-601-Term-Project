<!-- This file have Navigation and Footer -->

<script>
//  myFunction is a function that is called when the user clicks on the button.
// this fnction getElementById("myTopnav") and then toggle the class "responsive"
// on the element with the id "myTopnav"
// if the class "responsive" is not present, then add it, otherwise remove it.
export default {
  methods: {
    myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },
  },
};
</script>

<template>
  <!-- This the Temlplate HTML for nav and fooeter  -->
  <body>
    <!-- This is the Navigation Bar -->
    <!-- whnen click on navbar it will route to that page -->
    <nav class="topnav" id="myTopnav">
      <router-link v-on:click="myFunction" to="/" active-class="active"
        >Home</router-link
      >
      <router-link v-on:click="myFunction" to="/about" active-class="active"
        >About</router-link
      >
      <router-link v-on:click="myFunction" to="/education" active-class="active"
        >Education</router-link
      >
      <router-link v-on:click="myFunction" to="/work" active-class="active"
        >Work</router-link
      >
      <router-link v-on:click="myFunction" to="/github" active-class="active"
        >Github</router-link
      >
      <router-link v-on:click="myFunction" to="/travel" active-class="active"
        >Travel</router-link
      >
      <router-link v-on:click="myFunction" to="/contact" active-class="active"
        >Contact</router-link
      >
      <!--  add Responsive Menu icon -->
      <a href="javascript:void(0);" class="icon" v-on:click="myFunction">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-2 w-2"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </a>
    </nav>
    <!-- </header> -->
    <div id="page-container">
      <div id="content-wrap">
        <!-- all other page content -->
        <router-view class=""></router-view>
      </div>
      <div id="footer">
        <footer id="footer">
          <p class="footer-name">
            © 2022 Priyanka Vekariya. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  </body>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  background-color: #efefef;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

.topnav {
  overflow: hidden;
  background-color: #e9dfd6;
  margin-bottom: 25px;
  padding: 0 25px 0 25px;
}

.topnav a {
  float: left;
  display: block;
  color: rgb(147, 127, 127);
  font-weight: 600;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 24px;
}

.topnav a:hover {
  color: #56514f;
  background-color: #d2c6c2;

  transition: transform 0.5s ease;
  transform: scale(1);
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
    width: 30px;
    height: 32px;
  }
}
.footer-name:hover {
  color: #766767;
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}

#page-container {
  position: relative;
  min-height: 90vh;
}

#content-wrap {
  padding-bottom: 2.5rem; /* Footer height */
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem; /* Footer height */
}

.footer-name {
  color: #af9090;
}
</style>
