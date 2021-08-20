<template>
   <div class="box">
       <div class="header">
           Create new chat
       </div>
       <div class="content">
           <div class="avatar">
               <cropper
                    class="cropper"
                    :src="img"
                    @change="change"
                    :stencil-props="{
                        aspectRatio: 1/1
                    }"
                ></cropper>
                <input type="file" @input="change">
           </div>
            <div class="inputs">
                <input type="text">
                <button>sdf</button>
            </div>
       </div>
   </div>
</template>

<script >
import { defineComponent, ref } from 'vue'
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
export default defineComponent({
    name: 'CreateChat',
    components: {
        Cropper
    },
    setup () {
        const img = ref('')
        const change = (e) => {
            if (!e.target) return
            img.value = e.target.files[0]
            var fr = new FileReader()
            fr.onload = function () {
                img.value = fr.result
            }
            fr.readAsDataURL(e.target.files[0])
        }
        return {
            img,
            change
        }
    }
})
</script>

<style lang="scss" scoped>
.cropper {
  height: 30vh;
  width: 30vh;
  background: #DDD;
}
.box {
    min-width: 70vh;
    display: grid;
}
.header {
    margin: 10px 0;
}
.content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40vh;
}

.avatar {
    display: grid;
    height: 100%;
    grid-row-start: 1;
    grid-row-end: 2;
    grid-template-rows: 1fr 40px;
    justify-items: center;

}
.inputs {
    display: grid;
    grid-template-rows: 50px 1fr;
}
input {
    margin: 5px;
}
button {
    align-self: end;
    padding: 10px 0;
}
</style>
