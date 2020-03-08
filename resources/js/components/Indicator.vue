<template>
    <div>
        <div class="indicator position-fixed">
            <ul class="m-0 spyer">
                <li><a href="#about" class="nav-link circle"></a></li>
                <li><a href="#portfolio" class="nav-link circle"></a></li>
            </ul>
        </div>
        <div class="menu-indicator position-fixed">
            <a href="javascript:void(0)" v-if="menuOpen" @click="menuOpen = !menuOpen"><i class="fas fa-minus fa-4x"></i></a>
            <a href="javascript:void(0)" v-else @click="menuOpen = !menuOpen"><i class="fas fa-bars fa-3x"></i></a>
        </div>

        <transition name="slideIn"
                enter-active-class="animated slideInLeft"
                leave-active-class="animated slideOutRight">
            <div v-if="menuOpen" class="menu-open position-fixed bg-purple">

            </div>
        </transition>

        <div class="sosmed position-fixed">
            <div><a href=""><i class="fab fa-facebook-f text-white"></i></a></div>
            <div><a href=""><i class="fab fa-twitter text-white"></i></a></div>
            <div><a href=""><i class="fab fa-instagram text-white"></i></a></div>
            <div><a href=""><i class="fab fa-dribbble text-white"></i></a></div>
        </div>

        <div class="web-title position-fixed">
            <h2>hero kita</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Indicator",
        data() {
            return {
                menuOpen: false
            }
        }
    }
</script>


<style lang="scss">
    a{
        i{
            color: white;
        }
    }
    .web-title{
        right: 2vw;
        z-index: 1;
        margin-top: 50vh;
        transform: translateY(-50%);
        h2{
            writing-mode: tb-rl;
            color: #777;
            font-weight: 700;
        }
    }
    .sosmed{
        bottom: 2vh;
        right: 2vw;
        z-index: 1;
        div{
            margin-bottom: 10px;
        }
    }
    .menu-open{
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
    }
    .menu-indicator{
        top: 2vh;
        right: 2vw;
        font-weight: 700;
        z-index: 3;
        a{
            color: white !important;
        }
    }
    .indicator{
        left: 1vw;
        top: 50vh;
        z-index: 1;
        transform: translateY(-50%);
        ul{
            list-style: none;
            li{
                margin: 0;
                padding: 0;
                margin-bottom: 20px;
                .nav-link{
                    padding: 0 !important;
                }
                .circle{
                    width: 17px;
                    height: 17px;
                    border-radius: 100%;
                    border: 2px solid white;
                }
                .circle.active{
                    background: white;
                }
            }
        }
    }
</style>
