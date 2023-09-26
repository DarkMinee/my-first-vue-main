<template>
    <div>
        <p class="d-inline-flex gap-1">
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                item
            </a>
        </p>
        <div class="collapse" id="collapseExample">
            <div class="card card-body">
                content
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Item'
    }
</script>