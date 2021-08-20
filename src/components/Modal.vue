<template>
    <div>
        <slot name="action"></slot>
        <div v-if="showModal" class="overlay" @click.self="$emit('update:showModal', false)">
            <div class="window">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Modal',
    props: ['showModal'],
    emits: ['update:showModal']
})
</script>

<style lang="scss" scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
}
.window {
    background-color: #fff;
    max-height: 80vh;
    max-width: 80%;
    padding: 10px;
    border-radius: 10px;
}
</style>
