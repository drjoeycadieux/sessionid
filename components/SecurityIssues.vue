<template>
    <div class="security-issues"><p><strong>{{ title.text }}:</strong> <i class="bi bi-exclamation-diamond-fill"></i>  We’ve identified some security issues and are actively working on fixes. Please stay up to date and stay alert to suspicious activity. Your safety is our priority.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: {
                text: "Security Issues",
            }
        }
    }
}
</script>


<style>
.security-issues {
    padding: 1rem;
    background-color: firebrick;
}
.security-issues p {
    color: white;
    font-family: sans-serif;
    text-align: center;
}
</style>