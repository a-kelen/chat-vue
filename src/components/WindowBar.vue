<template>
    <div v-if="mode" class="bar">
        <img>
        <div class="row">
            <div class="title">Artem Kalancha</div>
            <div class="subtitle">online</div>
        </div>
        <button></button>
    </div>
    <div v-else class="bar">
        <img>
        <div class="row">
            <div class="title">Group</div>
            <modal v-model:showModal="showUsers">
                <template v-slot:action>
                    <div class="subtitle" @click="showUsers = true">123 members</div>
                </template>
                <template v-slot:default>
                    <users-list/>
                </template>
            </modal>
        </div>
        <div class="menu" v-click-outside="closeButtons">
            <button @click="showButtons = !showButtons"></button>
            <transition name="fade" >
                <ul v-show="showButtons" @click="showButtons = false" >
                    <li>Delete</li>
                    <li>Edit</li>
                    <li>Clear</li>
                </ul>
            </transition>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Modal from '@/components/Modal.vue'
import UsersList from './UsersList.vue'

export default defineComponent({
    name: 'WindowBar',
    components: {
        Modal,
        UsersList
    },
    setup () {
        const mode = ref(false)
        const showButtons = ref(false)
        const showUsers = ref(true)
        const closeButtons = () => {
            showButtons.value = false
        }
        return { mode, showButtons, showUsers, closeButtons }
    }
})
</script>

<style lang="scss" scoped>
.bar {
    display: flex;
    align-items: center;
    height: 60px;
}
img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin: 0 10px;
    background-color: green;
}
.title {
    text-align: left;
    font-size: 1.3rem;
}
.subtitle {
    font-size: .8rem;
    text-align: left;
}
button {
    margin-right: 10px;
    height: 30px;
    width: 30px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: brown;
    cursor: pointer;
}
.menu {
  display:block;
  margin-left: auto;
  float: left;
  position: relative;
  color: #fff;
  min-width: 80px;
  list-style: none;
  border-radius: 10px;
}
.menu ul {
  position: absolute;
  left: -20%;
  top: 41px;
  z-index: 2;
  margin: 0;
  padding: 0;
  list-style: none;
  box-shadow: #000000 0px 0px 100px 1px;
}

.menu ul li {
  background-color: rgba($color: #000000, $alpha: .33);
  padding: 5px 10px;
  cursor: pointer;
  transition: background .2s;
}

.menu ul li:hover {
  background: rgba($color: #000000, $alpha: .43);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
