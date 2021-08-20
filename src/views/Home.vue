<template>
  <div class="home">
    <navbar/>
    <window/>
    <modal v-model:showModal="showCreateChat">
      <template v-slot:action>
        <button @click="showCreateChat = true">
          a
        </button>
      </template>
      <template v-slot:default>
        <create-chat/>
      </template>
    </modal>
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue'
import Window from '@/components/Window.vue'
import Modal from '@/components/Modal.vue'
import CreateChat from '@/components/CreateChat.vue'
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'Home',
    components: {
      Navbar,
      Window,
      Modal,
      CreateChat
    },
    props: ['message'],
    setup (props) {
        const mine = computed(() => props.message % 2 === 0)
        const showCreateChat = ref(false)
        return { mine, showCreateChat }
    }
})
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
  }
  button {
    position: fixed;
    bottom: 20px;
    left: 20px;
    cursor: pointer;
    height: 60px;
    width: 60px;
    border: none;
    border-radius: 50%;
    background: cadetblue;
}
</style>
