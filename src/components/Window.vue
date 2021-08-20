<template>
  <div class="window" @click="windowClick">
        <window-bar/>
        <perfect-scrollbar>
            <div class="list">
                <message-item v-for="(message, i) in messages" @right-click="handleRightClick" :key="i" :message="message"/>
            </div>
        </perfect-scrollbar>
      <bottom-bar/>
      <div class="context" v-if="showContext" @click="showContext = false" :style="{ top: coords.top + 'px', left: coords.left + 'px' }">
          context
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import WindowBar from '@/components/WindowBar.vue'
import BottomBar from '@/components/BottomBar.vue'
import MessageItem from './MessageItem.vue'

import Coords from '@/types/Coords'
export default defineComponent({
    name: 'Window',
    components: {
        WindowBar,
        BottomBar,
        MessageItem
    },
    setup () {
        const messages = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
        const showContext = ref(false)
        const coords = reactive<Coords>({
            top: 0,
            left: 0
        })

        const handleRightClick = (val: Coords) => {
            coords.top = val.top
            coords.left = val.left
            showContext.value = true
        }

        const windowClick = (e: Event) => {
            showContext.value = false
            e.preventDefault()
        }
        return {
            messages,
            coords,
            showContext,
            handleRightClick,
            windowClick
        }
    }
})
</script>

<style lang="scss" scoped>
.window {
    width: 100%;
}
.list {
    display: block;
    margin: 0 10px;
    height: calc(100vh - 110px);
    flex-direction: column-reverse;
}
.ps {
  height: calc(100vh - 110px);
}
.context {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    padding: 5px;
    border-radius: 10px;
}
</style>
