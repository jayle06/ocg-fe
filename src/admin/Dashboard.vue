<template>
    <div class="dashboard">
        <SideBar />
    </div>
</template>
<script>
import SideBar from "@/admin/SideBar"
export default {
    name: 'Dashboard',
    components : {
        SideBar,
    },
    data(){
        return {
            isShow: false,
        }
    }
}
</script>

<style scoped>
.dashboard {
    display: flex;
    /* flex-direction: ; */
    padding-top: 110px;
}
</style>
