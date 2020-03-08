<template>
    <div class="header position-fixed">
        <nav class="navbar navbar-light spyer">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="#about">about</a></li>
                <li class="nav-item"><a class="nav-link" href="#portfolio">portofolio</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss">
    .header{
        top: 0;
        left: 2vw;
        right: 2vw;
        font-size: 1.2rem;
        z-index: 1;
        .navbar{
            background-color: transparent !important;
            .nav-link.active{
                border-bottom: 2px solid white;
            }
            .nav-link:hover{
                border-bottom: 2px solid white;
            }
            .navbar-nav{
                flex-direction: row !important;
                li{
                    margin-right: 1.7rem;
                    a{
                        color: white !important;
                        font-weight: 700;
                        letter-spacing: .1rem;
                    }
                }
            }
        }
    }
</style>
