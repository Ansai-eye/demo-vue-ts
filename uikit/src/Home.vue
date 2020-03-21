<template>
    <div class="root-home">
        <UIButton large @click="handleClick">
            点我亚
        </UIButton>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import UIButton from "@/components/UIKit/UIButton.vue";
@Component({
    components: {
        UIButton
    }
})
export default class Home extends Vue {
    private handleClick(event: MouseEvent) {
        console.log(event);
    }
}
</script>

<style lang="stylus" scoped>
.root-home {
    width: 480px;
    height: 160px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>