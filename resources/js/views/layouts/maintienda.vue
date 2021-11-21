<script>
import Nav from '../../compontents/nav.vue'
import Footer from '../../compontents/footer.vue'
export default {

    components:{
        Nav,
        Footer
    }

}
</script>



<template>

<div>

    <Nav></Nav>
        <slot />
    <Footer></Footer>
</div>

</template>
