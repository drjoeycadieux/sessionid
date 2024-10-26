<script setup>
useSeoMeta({
  title: 'SessionID - Powered By Techtack-Technologies',
  description: 'Secure Access For Agent.'
})
</script>



<template>
  <AppAlerts />
  <Navbar/>
  <div>
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
</style>