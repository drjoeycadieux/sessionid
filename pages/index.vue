<script setup>
useSeoMeta({
  title: 'SessionID - Powered By Techtack-Technologies',
  description: 'Secure Access For Agent.'
})
</script>



<template>
<AppAlerts />
  <div>
    <div class="navbar">
      <ul>
        <li>
          <p class="title">Techtack-Technologies</p>
        </li>
      </ul>
    </div>
    <AppHeader />
    <AppContent />
    <br>
    <ContactForm />
    <br>
    <AppFooter />
  </div>
</template>



<style>
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #ffff;
}

::-webkit-scrollbar-thumb {
  background: #2d3748;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

* {
  padding: 0;
  margin: 0;
}

body {
  background-color: #161616;
}

.title {
  display: inline;
  font-family: sans-serif;
  color: white;
  font-size: 23px;
  font-weight: bold;
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