<template>
    <div class="dashboard">
        <SideBar />
        <div v-if="isLoading === true" class="chart">
            <BarChart :label="date" :data="rev" />
        </div>
    </div>
</template>
<script>
import SideBar from "@/admin/SideBar";
import api from "@/services/users.service";
import {onMounted} from 'vue';
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import BarChart from '@/components/BarChart';
import {mapState} from "vuex";
export default {
    name: 'Dashboard',
    components : {
        SideBar,
        BarChart
    },
    data (){
        return{
            label : []
        }
    },
    setup() {
        const router = useRouter();
        const store = useStore();
        onMounted(async () => {
            try {
                const {data} = await api.getProfiles();
                store.commit('users/setUser', data);
            } catch (e) {
                await router.push('/login');
            }
        });
    },
    computed:{
        ...mapState("statistic", [
            "revenues",
            "rev",
            "date",
            "isLoading"
        ]),
    },
    async created() {
        await this.$store.dispatch("statistic/getRevenues", {});
    },
}
</script>

<style scoped>
.dashboard {
    display: flex;
    /* flex-direction: ; */
    padding-top: 110px;
}
.chart{
    width: 50%;
    height: 100%;
}
</style>
