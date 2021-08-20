<template>
    <div class="box menu" :class="{ 'left' : mine}">
        <img>
        <div class="flex">
            <div v-if="!mine" class="author">Artem Kalancha</div>
            <div class="message"  @click.right="rightClick">
                <div class="content">Message {{ message }}</div>
                <div class="time">12:21</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import Coords from '@/types/Coords'
export default defineComponent({
    name: 'MessageItem',
    props: ['message'],
    setup (props, q) {
        const mine = computed(() => props.message % 2 === 0)
        const contextCoords = reactive<Coords>({
            top: 0,
            left: 0
        })

        // const emit = defineEmit(['rightClick'])
        const rightClick = (e: PointerEvent) => {
            e.preventDefault()
            contextCoords.top = e.clientY + 10
            contextCoords.left = e.clientX
            q.emit('rightClick', contextCoords)
        }
        return { mine, contextCoords, rightClick }
    }
})
</script>

<style lang="scss" scoped>
.box {
    min-height: 20px;
    width: calc(100% - 20px);
    margin: 5px 10px;
    padding: 10px 5px ;
    border-radius: 10px;
    display: flex;
    align-items: flex-start;
}
.flex {
    display: flex;
    flex-direction: column;
    margin: 0 10px;
}
.message {
    align-self: flex-start;
    border-radius: 10px;
    background-color: #ddd;
    justify-self: flex-start;
}
img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: burlywood;
}
.left > img {
    // align-self: flex-end;
}
.left {
    align-self: flex-end;
    // justify-content: flex-end;
    flex-direction: row-reverse;
}
.author {
    font-size: .95rem;
}
.content {
    font-size: .85rem;
    padding: 5px 10px 0 10px;
}
.time {
    font-size: .7rem;
    text-align: right;
    padding: 5px;
}
.context {

}

</style>
