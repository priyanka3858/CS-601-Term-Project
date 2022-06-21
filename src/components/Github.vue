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
  <h1>Grid Elements</h1>

  <p>
    A Grid Layout must have a parent element with the <em>display</em> property
    set to <em>grid</em> or <em>inline-grid</em>.
  </p>

  <p>
    Direct child element(s) of the grid container automatically becomes grid
    items.
  </p>

  <div class="grid-container">
    <div class="grid-item" v-for="(item, index) in repoList" :key="index">
      <h1>{{ item.name }}</h1>
      <p>{{ item.language }}</p>
      <p>{{ item.description }}</p>
      <p>
        <a :href="item.svn_url" target="_blank">{{ item.svn_url }}</a>
      </p>

      <!-- <p>Language: vue, Javascript, CSS,HTML</p>
    </div>
    <div class="grid-item">
      <h1>
        <strong>TO-DO-vue </strong>
      </h1>
      <p>Language: vue, Javascript, CSS,HTML</p>
    </div>
    <div class="grid-item">
      <h1>
        <strong>TO-DO-vue </strong>
      </h1>
      <p>Language: vue, Javascript, CSS,HTML</p>
    </div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>
    <div class="grid-item">9</div> -->
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  /* background-color: #aac4d9; */
  padding: 10px;
  column-gap: 10px;
  row-gap: 10px;
  margin: 10px 20px 10px 20px;
}

.grid-item {
  background-color: rgba(184, 106, 106, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  padding: 20px;
  font-size: 10px;
  text-align: center;
  margin: 30px 30px 30px 30px;
  justify-self: center;
  align-self: stretch;
}
</style>
