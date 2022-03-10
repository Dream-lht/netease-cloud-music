<template>
    <div>
        {{status}}
        <button @click="changeStatus">+</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref,watchEffect } from 'vue'

export default defineComponent({
    setup() {
        const status = ref(404);
        watchEffect(() => {
            console.log(status.value);
        })

        const changeStatus = () => {
            status.value++;
        }

        console.log(process.env)
        return {
            status,
            changeStatus
        }
    },
})
</script>
