<template>
    <div>
        <div class="header">
            <p>
                SessionID - Secure Access For Agent
            </p>
            <h3>Authentification Session ID</h3>
        </div>
    </div>
</template>




<style>
.header {
    padding: 125px;
    background-color: #2d3748;
}

.header p {
    text-align: center;
    font-family: sans-serif;
    font-weight: bold;
    color: white;
    font-size: 16px;
}

.header h3 {
    color: white;
    font-family: sans-serif;
    text-align: center;
}

@media only screen and (min-width: 1024px) {
  .header p {
    font-size: 4rem;
  } 
  .header h3 {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
    .header {
        padding: 125px;
    }
}

@media (max-width: 768px) {
    .header p {
       font-size: 25px;
    }
}

@media (max-width: 768px) {
    .header h3 {
       font-size: 16px;
    }
}
</style>