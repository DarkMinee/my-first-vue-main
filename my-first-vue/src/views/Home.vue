
<template>
    <div>
        <li class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <div id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" role="button">Visualizza</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" role="button">Crea nuovo</a>
                        </li>
                    </ul>
                </div>
                <div class="d-flex justify-content-end">
                    <SignOut />
                </div>
            </div>
        </li>
        <div class="container mt-3" v-for="(item, index) in data">
            {{ index }} - {{ item }}
        </div>
    </div>
</template>

<script>
    import firebase from "firebase";
    import SignOut from '@/components/SignOut';
    import Item from '@/components/Item';
    export default {
        name: 'Home',
        components: {
            SignOut,
            Item
        },
        data: {
            docs: ''
        },
        created() {
            const db = firebase.firestore();
            db.collection('data').get().then(function(docs){
                data.docs = docs
            })
        }
    }
</script>