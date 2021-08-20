<template>
    <div class="container">
        <div class="head">
            <img  class="avatar" alt="">
            <div class="col">
                <div class="name">Artem Kalancha</div>
                <div class="nickname">@akelen</div>
            </div>
            <modal v-model:showModal="showSettings">
                <template v-slot:action>
                    <button @click="showSettings = true">
                    </button>
                </template>
                <template v-slot:default>
                    aasdasd
                </template>
            </modal>
        </div>
        <input type="text">
        <chats-list/>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ChatsList from './ChatsList.vue'
import Modal from '@/components/Modal.vue'

export default defineComponent({
  name: 'Navbar',
  components: {
    ChatsList,
    Modal
 },
  setup () {
    const showSettings = ref(false)
    return { showSettings }
  }
})
</script>

<style lang="scss" scoped>
    .container {
        height: 100vh;
        min-width: 250px;
    }
    .head {
        position: relative;
        display: flex;
        height: 70px;
        padding: 0 10px;
        align-items: center;
    }
    .avatar {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: cornflowerblue;
    }
    .col {
        margin-left: 5px;
    }
    .name, .nickname {
        text-align: start;
    }
    .name {
        font-size: 1.1rem;
    }
    .nickname {
        font-size: .8rem;
    }
    button {
        position: absolute;
        display: grid;
        top: 0px;
        left: calc(250px - 40px);
        height: 30px;
        width: 30px;
        background-color: grey;
        border: none;
        border-radius: 0 0 50% 50%;
        cursor: pointer;
    }
    input {
        width: calc(100% - 40px);
        height: 25px;
        padding-left: 10px;
        border-radius: 4px;
        border: none;
        outline: none;
        background: gray;
    }
</style>
