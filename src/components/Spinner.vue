<template>
    <div class="spin" v-if="start">
        <div class="ring">
            <div class="lds-ripple">
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     name: 'Spinner',
     props: {
         start: {
            type: Boolean,
            default: false
        },
     }
}
</script>

<style lang="scss" scoped>
    .spin{
        z-index: 100;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.2);
        position: fixed;
    }
    .ring{
        position: absolute;
        top: 50%;
        left: 50%;
        margin: 0 auto;
        height: 100%;
    }
    .lds-ripple {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .lds-ripple div {
        position: absolute;
        border: 4px solid #08367E;
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    .lds-ripple div:nth-child(2) {
        animation-delay: -0.5s;
    }
    @keyframes lds-ripple {
        0% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: 0px;
            left: 0px;
            width: 72px;
            height: 72px;
            opacity: 0;
        }
    }
</style>