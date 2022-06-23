<!--  this is the script for the education component -->
<script>
/*
this funaction fetch the data from the JSON file hosted in cloud fare
then it calls the function to display the data response status is 200 if the data is successfully fetched
and return the data in the form of JSON object
else it displays an error message
*/
export default {
  methods: {
    async fetchDegrees() {
      const data = await fetch(
        "https://cs601-assignment-5.pages.dev/degrees.json"
      );
      const json = await data.json();
      this.degrees = json.degrees;
    },
  },
  data() {
    return {
      count: 0,
      degrees: [],
    };
  },
};
</script>

<!--  this is the HTML for the education component -->
<template>
  <body>
    <main>
      <section class="info_section">
        <div class="degree-h1">
          <h1>Welcome To My Degree Page !</h1>
        </div>
        <div>
          <p class="degree_info" v-if="degrees.length === 0">
            If you're curious to know more details about my degrees, click the
            button below to get more information. I'll grab that data from our
            web server and replace this paragraph of text with my Degrees data
            table!
          </p>
        </div>
        <div class="degree-div">
          <table class="degree-table">
            <caption v-if="degrees.length > 0">
              Degree Table
            </caption>
            <tr v-if="degrees.length > 0">
              <th>School</th>
              <th>Program</th>
              <th>Degree Type</th>
              <th>Year Conferred</th>
            </tr>
            <tr class="degree-tr" v-for="(item, index) in degrees" :key="index">
              <td>{{ item.school }}</td>
              <td>{{ item.program }}</td>
              <td>{{ item.type }}</td>
              <td>{{ item.year }}</td>
            </tr>
          </table>
        </div>
        <!-- click the button to start program! -->
        <div class="btn-div">
          <button
            v-if="degrees.length === 0"
            type="button"
            class="begin_button"
            v-on:click="fetchDegrees"
          >
            Let's Begin!
          </button>
        </div>
      </section>
    </main>
  </body>
</template>

<style scoped>
.degree-h1 {
  color: #5a665f;
  font-family: Times, serif;
  font-weight: 900;
  font-size: 1.7rem;
  line-height: 3.5rem;
  text-align: center;
  margin: 0rem 2rem 2rem 2rem;
  padding: 1rem;
  display: block;
  border: 1px solid #5a665f;
  border-radius: 10px;
}
.degree_info {
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  color: rgb(108, 93, 93);
  text-align: center;
  display: block;
  border: #ccc 1px solid;
  padding: 25px;
  border-radius: 10px;
  border-style: double;
  width: 70%;
  margin: 10px auto;
  box-shadow: 0px 0px 10px rgb(174, 83, 83);
}
.begin_button {
  background-color: #aaa;
  color: rgb(36, 34, 34);
  padding: 20px;
  border: none;
  line-height: 30px;
  border-radius: 60px;
  cursor: pointer;
  font-size: 25px;
  font-weight: 1000;
  margin: 20px auto;
  width: 20%;
}
button:hover {
  transform: scale(1.2);
  transition: all 0.3s ease-in-out 0.1s;
  cursor: pointer;
}
/* .btn-div {
  margin: 50px auto;
} */

.degree-div {
  margin: 50px auto;
  width: 80%;
}

caption {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: table-caption;
  text-align: center;
  font-size: 37px;
  font-weight: 700;
  letter-spacing: 1px;
  border-block: 1px solid;
  border-radius: 20px;
  margin-bottom: 50px;
  padding: 6px;
  border-color: #6a6a6a;
  color: rgb(95, 92, 92);
}
table,
th,
td {
  border: 1px solid;
  border-style: double;
  border-color: #bbbdbb;
}

table {
  width: 100%;
  /* margin: auto; */
  margin-bottom: 20px;
  margin-top: 20px;
  border-collapse: collapse;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  color: var(--main-balck);
  font-size: 1rem;
}

th {
  height: 50px;
  font-size: 1.3rem;
  text-align: center;
  padding: 6px;
  background-color: #ddd;
}

td {
  height: 50px;
  font-size: 1.1rem;
  text-align: center;
  padding: 5px;
}

tr {
  background-color: #ede8e5;
  font-size: 20rem;
}

tr:hover {
  background-color: #beb2ac;
  transition: transform 0.5s ease;
  transform: scale(1.02);
}
</style>
