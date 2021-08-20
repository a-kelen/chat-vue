<template>
    <div class="bar">
        <div class="flex">
            <textarea rows="1"></textarea>
        </div>
        <button>Send</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BottomBar'
})
</script>

<style lang="scss" scoped>
.bar {
    height: 40px;
    background: #fff;
    top: 100vh;
    position: sticky;
    background: cornflowerblue;
    display: grid;
    grid-template-columns: 1fr 100px;
    padding: 5px;
    grid-column-gap: 10px;
}
textarea {
    outline: none;
    resize: none;
    height: auto;
    width: 100%;
    font-size: 1.1rem;
    padding: 10px;
    border-radius: 15px;
    border: none;
    opacity: .7;
}
.flex {
    display: flex;
    align-items: center;
}
button {
    outline: none;
    border: none;
}
</style>
