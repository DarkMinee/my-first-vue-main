<template>
    <button class="btn btn-outline-danger" @click="googleSignOut">
        Esci
    </button>
</template>

<script>
    import { getAuth, signOut } from "firebase/auth";
    export default {
        methods: {
            googleSignOut: function() {
                signOut(getAuth())
                .then(() => {
                    this.$router.push('/')
                    alert("Sei uscito!");
                });
            }
            
        },
    }
</script>