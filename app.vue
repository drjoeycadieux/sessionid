<script setup>
useSeoMeta({
  title: 'SessionID - Powered By Techtack-Technologies',
  description: 'Our Parent Company From TeamLitho'
})
</script>



<template>
  <AppAlerts />
  <div>
    <div class="navbar">
      <ul>
        <li>
          <p class="title">Secure Access For Agent</p>
        </li>
      </ul>
    </div>
    <AppHeader />
    <AppContent />
    <br>
    <ContactForm />
    <AppFooter />
  </div>
</template>



<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #ffff;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #2d3748;
}

/* Handle on hover */
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