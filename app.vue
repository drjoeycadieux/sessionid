<script>
import AppContent from './components/AppContent.vue';

useHead({
  title: 'SessionID - Techtack-Technologies',
  meta: [
    { name: 'Techtack-Technologies', content: 'Powered By TeamLitho' }
  ],
  bodyAttrs: {
    class: 'In Development'
  },
  script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})
</script>



<template>
  <div>
    <div class="navbar">
      <ul>
        <li>
          <p class="title">SessionID</p>
        </li>
      </ul>
    </div>
    <AppHeader />
    <AppContent />
    <br>
    <AppFooter />
  </div>
</template>



<style>
* {
  padding: 0;
  margin: 0;
}

.title {
  display: inline;
  font-family: sans-serif;
  color: white;
  font-size: 23px;
  text-decoration: underline;
}

.navbar {
  padding: 15px;
  background-color: #161616;
}

.navbar ul {
  display: block;
}

.navbar ul li {
  display: inline;
  margin: 5px;
}

.navbar ul li a {
  color: #ffff;
  text-decoration: none;
  font-family: sans-serif;
}

.navbar a:hover {
  color: lightgray;
}
</style>