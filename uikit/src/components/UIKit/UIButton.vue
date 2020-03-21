<template>
    <button class="ui-btn" @click="onClickButton" 
        :class="{
          'ui-btn-large': large,
          'ui-btn-xlarge': xlarge,
          'ui-btn-small': small,
          'ui-btn-xsmall': xsmall,
        }"
      >
        <slot>Button</slot>
    </button>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from "vue-property-decorator";

@Component
export default class UIButton extends Vue {
    @Prop(Boolean) private large: boolean | undefined;
    @Prop(Boolean) private xlarge: boolean | undefined;
    @Prop(Boolean) private small: boolean | undefined;
    @Prop(Boolean) private xsmall: boolean | undefined;

    @Emit("click") private emitClickEvent(event: MouseEvent) {
        console.log();
    }

    private mounted(){
      console.log(this.large);
      
    }
    private onClickButton(event: MouseEvent) {
        this.emitClickEvent(event);
    }
}
</script>

<style lang="stylus" scoped>
.ui-btn
    min-width: 64px;
    height: 36px;
    padding: 0 16px;
    border: 0 solid black;
    border-radius: 4px;
    outline: none;
    font-size: 0.875em;
    letter-spacing: 0.09em;
    background-color: #2D8CF0;
    color: #17233D;
    user-select: none;
    cursor: pointer;
.ui-btn-large
    min-width: 78px;
    height: 44px;
    padding: 0 19px;
.ui-btn-xlarge
    min-width: 92px;
    height: 52px;
    padding: 0 23px;
    font-size 1em;
.ui-btn-small
    min-width: 50px;
    height: 28px;
    padding: 0 12px;
    font-size 0.75em;

.ui-btn-xsmal
    min-width: 36px;
    height: 20px;
    padding: 0 9px;
    font-size 0.625em;
</style>