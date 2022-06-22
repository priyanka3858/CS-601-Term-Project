<!-- github project API call  -->
<script>
export default {
  created() {
    fetch("https://api.github.com/users/priyanka3858/repos")
      .then((response) => response.json())
      .then((data) => (this.repoList = data));
  },
  data() {
    return {
      count: 0,
      repoList: [],
    };
  },
};
</script>

<template>
  <div class="github_heading-div">
    <h1 class="github-heading">GitHub Project</h1>
  </div>
  <!-- <div>
    <p>Click The Below Box To See My Github Project Source Code.</p>
  </div> -->

  <div class="grid-container">
    <a
      :href="item.svn_url"
      target="_blank"
      class="grid-item"
      v-for="(item, index) in repoList"
      :key="index"
    >
      <h1 class="git-repo-name">{{ item.name }}</h1>
      <p class="project-lang">{{ item.language }}</p>
      <p>{{ item.description }}</p>
    </a>
  </div>
</template>

<style scoped>
.github_heading-div {
  color: #5a665f;
  font-family: "Alegreya Sans", Helvetica, Arial, "san serif";
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 3.5rem;
  text-align: center;
  margin: 60px auto 20px auto;
  /* margin: 20px auto; */
  padding: 5px;
  display: block;
  border: 1px solid #5a665f;
  border-radius: 10px;
  width: 80%;
}

.grid-container {
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto auto auto;
  column-gap: 10px;
  row-gap: 10px;
  margin-left: 70px;
  margin-right: 70px;
}

.grid-item {
  background-color: rgb(218, 211, 211);
  border: 2px solid #aaa;
  border-radius: 7px;
  padding: 35px;
  font-size: 10px;
  text-align: center;
  margin: 30px 20px 30px 20px;
  justify-self: center;
  width: 50%;
  height: 150px;
}
.git-repo-name {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1rem;
  text-align: center;

  display: block;

  border: 1px solid #5a665f;
  border-radius: 10px;
  padding: 5px;
}
.project-lang {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 20px;
  display: block;

  padding: 0.5rem;
}
</style>
