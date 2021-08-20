<template>
    <div class="box">
        <div class="header">Users: 21</div>
        <input type="text">
        <perfect-scrollbar>
            <div class="list">
                <user-item v-for="(member, i) in members" :key="i" :user="member"/>
            </div>
        </perfect-scrollbar>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserItem from './UserItem.vue'

export default defineComponent({
  components: { UserItem },
    name: 'UsersList',
    setup () {
        const members = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
        return {
            members
        }
    }
})
</script>

<style lang="scss" scoped>
.ps {
  max-height: 500px;
}
.box {
    display: grid;
    min-width: 40vh;
    height: 500px;
}
.header {
    text-align: left;
}
input {
    margin: 10px;
    align-self: flex-start;
}
.list {
    display: block;
    margin: 10px;
}
</style>
