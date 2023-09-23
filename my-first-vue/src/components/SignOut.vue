<template>
    <button class="btn btn-outline-danger" @click="googleSignOut">
        Esci
    </button>
</template>

<script>
    import firebase from "firebase";
    export default {
        name: 'SignOut',
        methods: {
            googleSignOut: function() {
                firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.push('/')
                    alert("Sei uscito!");
                });
            }
            
        },
    }
</script>