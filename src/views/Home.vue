
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
        <!-- <div class="container mt-3" v-for="(item, index) in currentDocs">
            {{ index }} - {{ item }}
        </div> -->
        <li ref="currentDocs"></li>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue'
    onMounted(async () => {
        await getDocs(collection(db, 'data')).then((docs) => {
            docs.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                //this.currentDocs[doc.id] = doc.data();
            });
        })
    })
</script>

<script>
    import { collection, getDocs } from 'firebase/firestore'
    import { db } from '@/main.js'
    import SignOut from '@/components/SignOut.vue';
    import Item from '@/components/Item.vue';
    export default {
        name: 'Home',
        data() {
            return {
                currentDocs : []
            }
        },
        components: {
            SignOut,
            Item
        }
    }
</script>