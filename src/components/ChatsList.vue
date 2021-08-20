<template>
    <div class="list">
        <dialog-item v-for="(chat, i) in chats" :key="i"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import DialogItem from './DialogItem.vue'

export default defineComponent({
  components: { DialogItem },
    name: 'ChatList',
    setup () {
        const chats = ref([1, 2, 3])
        return { chats }
    }
})
</script>

<style lang="scss" scoped>
.list {
    margin-top: 10px;
}
</style>
