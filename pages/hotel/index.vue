<template>
 <div class="hotel">酒店首页
    <HotelFilters />
 </div>
</template>

<script>
import HotelFilters from '@/components/hotel/hotelFilters.vue'
export default {
    components:{
        HotelFilters
    }
}
</script>

<style lang="less" scoped>
.hotel {
  width: 1000px;
  margin: 0 auto;
  padding: 5px 20px;
}
</style>
