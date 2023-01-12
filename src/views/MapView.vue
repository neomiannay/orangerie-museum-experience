<template>
<Map :id="id" type='page'/>
</template>
  
<script>
import Header from "../components/Header.vue"
import Map from "../components/Map.vue"

export default {
    name: 'MapView',
    props: ['id', 'type'],
    components: { Header, Map },
    data() {
        return {
            nextPage: 0,
        }
    },
    mounted() {
        this.setPageNumber();
    },
    methods: {
        setPageNumber() {
            this.nextPage = parseInt(this.id)
        }
    }
}
</script>
