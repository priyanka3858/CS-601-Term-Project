<template class="first_page">
  <body class="home">
    <!-- Start About section -->
    <div class="about_image">
      <img
        class="my_image"
        src="public/my_photo.jpg"
        alt="myimage"
        width="230"
        height="250"
      />
    </div>

    <div class="about_name_section">
      <h1 class="about_info"><b>Priyanka Vekariya</b></h1>
      <p class="about_info">Software Develpoer</p>
      <button id="bt1" class="button">Hire me</button>
      <button id="bt2" class="button">Contact me</button>
    </div>
  </body>
</template>

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
  /* background-image: url("public/aa.jpeg"); */
  /* background: #344557
    url(https://unsplash.imgix.net/photo-1423683249427-8ca22bd873e0?fit=crop&fm=jpg&h=700&q=75&w=1050)
    0 0 no-repeat; */
  /* background-color: black; */
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin: auto;
  width: 100%;
}
.about_info {
  font-size: 25px;
  font-family: "Roboto", sans-serif;
  color: black;
  margin: 15px;
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
  color: black;
}
.bt1 {
  margin-right: 40px;
}
.bt2 {
  margin-left: 40px;
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
  text-fill-color: transparent;
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
