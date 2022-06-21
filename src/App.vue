<script setup></script>

<template>
  <body>
    <header id="heder">
      <nav class="nav">
        <ul class="nav-list">
          <li>
            <router-link to="/" active-class="active">Home</router-link>
          </li>
          <li>
            <router-link to="/about" active-class="active">About</router-link>
          </li>
          <li>
            <router-link to="/work" active-class="active">Work</router-link>
          </li>
          <li>
            <router-link to="/github" active-class="active">Github</router-link>
          </li>
          <li>
            <router-link to="/travel" active-class="active">Travel</router-link>
          </li>
          <li>
            <router-link to="/contact" active-class="active"
              >Contact</router-link
            >
          </li>
        </ul>
      </nav>
    </header>
    <router-view class=""></router-view>
    <footer>
      <p class="footer-name">
        &copy; © 2022 Priyanka Vekariya. All rights reserved.
      </p>
    </footer>
  </body>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #efefef;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.nav-list {
  display: block;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  position: static;
  background: whitesmoke;
  padding: 20px;
  border-radius: 10px;
  margin: 0;
  font-weight: 450;
}

a {
  /* set nav list link a decoration */
  text-decoration: none;
  font-size: 27px;
  padding: 0 22px;
  display: inline-block;
  color: rgb(147, 127, 127);
  font-weight: 600;
}

a:hover {
  /* set nav hover decoration with transition effect */
  color: #cf530c;
  transition: transform 0.5s ease;
  transform: scale(1);
}

.footer-name {
  font-size: 12px;
  color: #777;
  margin: 15px;
  float: right;
}
/* set CSS for fooetr name hover */
.footer-name:hover {
  color: #e7bbbb;
}
</style>
