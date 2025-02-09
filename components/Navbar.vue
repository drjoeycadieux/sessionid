<template>
    <div>
        <div class="navbar">
            <ul>
                <li>
                    <p class="title">Techtack-Technologies</p>
                </li>
                <li>
                    <NuxtLink to="/">
                        Home
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">
                        About
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/event">
                        Event
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/securityguidelines">
                        Security Guidelines
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>



<style scoped>
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
}</style>