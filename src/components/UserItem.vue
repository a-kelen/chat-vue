<template>
    <div class="container">
        <img>
        <div class="row">
            <div>
                <div class="name">Adasd ASDASd</div>
                <div class="nickname">Hello world</div>
            </div>
            <button></button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'UserItem',
    props: ['user']
})
</script>

<style lang="scss" scoped>
.container {
    background-color: gray;
    display: flex;
    padding: 15px 5px;
}
.container > div {
    margin: 4px;
}
img {
    height: 40px;
    width: 50px;
    border-radius: 50%;
    margin: 0 10px;
    background-color: cornflowerblue;
}
.row {
    display: grid;
    grid-template-columns: 7fr 1fr;
    width: 100%;
    align-items: center;
}
.name {
    font-size: .9rem;
    text-align: start;
}

.nickname {
    text-align: left;
    font-size: .8rem;
}
button {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: none;
}
</style>
