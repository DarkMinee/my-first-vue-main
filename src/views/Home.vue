
<template>
    <div>
        <li class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <div id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" role="button">Visualizza</a>
                        </li>
                        <!-- <li class="nav-item">
                            <a class="nav-link" role="button">Crea nuovo</a>
                        </li> -->
                    </ul>
                </div>
                <div class="d-flex justify-content-end">
                    <SignOut />
                </div>
            </div>
        </li>
        <div class="container mt-3">
            <div class="d-inline" v-for="todo in list">
                <Item :id="todo.id" :img="todo.img" :title="todo.title" :desc="todo.desc" :tags="todo.tags"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    const list = ref([])

    onMounted(async () => {
        let lList = []
        await getDocs(collection(db, 'data')).then((docs) => {
            docs.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                const data = doc.data()
                const temp = {
                    id: doc.id,
                    img: data.img,
                    title: data.title,
                    desc: data.desc,
                    tags: data.tags
                }
                lList.push(temp)
            });
        })
        list.value = lList
    })
</script>

<script>
    import { collection, getDocs } from 'firebase/firestore'
    import { db } from '@/main.js'
    import SignOut from '@/components/SignOut.vue';
    import Item from '@/components/Item.vue';
    export default {
        components: {
            SignOut,
            Item
        }
    }
</script>