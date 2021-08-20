<template>
    <div class="container">
        <img alt="">
        <div>
            <div class="row">
                <div class="name">Adasd ASDASd</div>
                <div class="time">12:21</div>
            </div>
            <div class="text">Hello world</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'DialogItem'
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
    width: 40px;
    border-radius: 50%;
    background-color: cornflowerblue;
}
.row {
    display: grid;
    grid-template-columns: 6fr 1fr;
    width: 100%;
    align-items: center;
}
.name {
    font-size: .9rem;
    text-align: start;
}
.time {
    font-size: .7rem;
    text-align: start;
}
.text {
    text-align: left;
    font-size: .8rem;
}
</style>
