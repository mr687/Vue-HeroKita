<template>
    <vue-scroll-snap :fullscreen="true" data-spy="scroll" data-target=".spyer" data-offset="0">
        <div class="item bg-dark text-white" id="about">
            <kinesis-container>
<!--                <kinesis-element :strength="10">-->
<!--                    <div class="circle-bg position-absolute"></div>-->
<!--                </kinesis-element>-->
                <div class="middle-align text-center">
                    <kinesis-element :strength="20">
                        <vue-typed-js class="d-block" :strings="['hero kita', 'designer', 'developer']" :loop="true" :typeSpeed="100" :backSpeed="100" :backDelay="1000">
                            <h1 class="text-uppercase big-font">hi! we are <span class="typing color-orange"></span></h1>
                        </vue-typed-js>
                    </kinesis-element>
                    <kinesis-element>
                        <p class="mt-3">
                            You have the problems and We have the solutions
                        </p>
                    </kinesis-element>
                    <kinesis-element :strength="10">
                        <div class="mt-3">
                            <a href="" class="btn btn-primary active text-uppercase mr-3">more</a>
                            <a href="" class="btn btn-primary text-uppercase">hire us</a>
                        </div>
                    </kinesis-element>
                </div>
            </kinesis-container>
        </div>
        <div class="item bg-orange" id="portfolio">
<!--            <a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by freepik - www.freepik.com</a>-->
        </div>
    </vue-scroll-snap>
</template>

<script>
    export default {
        name: "Landing"
    }
</script>

<style lang="scss">
    .circle-bg{
        width: 10vw;
        height: 10vw;
        background: rgba(255,255,255,.4);
        border-radius: 100%;
    }
    .big-font{
        font-size: 4em !important;
    }
    p{
        font-size: 1.5rem;
    }
    .btn{
        font-size: 1.2rem;
        border-radius: 30px;
        padding-left: 30px;
        padding-right: 30px;
    }
    .btn.btn-primary{
        background: transparent !important;
    }
    .btn.btn-primary.active{
        background: #f6993f !important;
        border-color: #f6993f !important;
    }
    .btn.btn-primary:hover{
        background: #f6993f !important;
        border-color: #f6993f !important;
    }
    .scroll-snap-container {
        .item {
            padding: 65px 2vw;
            font-size: 1rem;
            .middle-align{
                width: 100vw;
                margin-left: 50vw;
                margin-top: 50vh;
                transform: translate(-50%, -80%);
            }
        }
    }
</style>
