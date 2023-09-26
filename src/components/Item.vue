<template>
    <div>
        <div class="row">
            <p class="d-inline-flex gap-1">
                <div class="card" data-bs-toggle="collapse" :href="'#'+id" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <div class="card-header">
                        {{ title }}
                    </div>
                    <img :src=img class="ms-auto me-auto mt-3 mb-3" alt="img">
                </div>
            </p>
            <div class="col-md-8">
                <div class="collapse" :id=id>
                    <p class="card-text">{{desc}}</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" v-for="(item) in tags">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['id', 'img', 'title', 'desc', 'tags'])
</script>

<style>
    img {
        max-width: 3rem;
        height: auto;
    }
</style>