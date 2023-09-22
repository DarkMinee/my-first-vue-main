<template>
    <div>
        <SignOut />
    </div>
</template>

<script>
    import SignOut from '@/components/SignOut'
    import firebase from "firebase";
    export default {
        name: 'Home',
        components: {
            SignOut
        },
        methods: {
            googleSignIn: function() {
                let provider = new firebase.auth.GoogleAuthProvider();
                firebase
                .auth()
                .signInWithPopup(provider)
                .then((result) => {
                let token = result.credential.accessToken;
                let user = result.user;
                console.log(token) // Token
                console.log(user) // User that was authenticated
                this.$router.push('/home')
                })
                .catch((err) => {
                    console.log(err); // This will give you all the information needed to further debug any errors
                });
            }
            
        },
    }
</script>