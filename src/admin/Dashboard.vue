<template>
    <div class="dashboard">
        <SideBar />
    </div>
</template>
<script>
import SideBar from "@/admin/SideBar";
import axios from "axios";
import {onMounted} from 'vue';
import {useRouter} from "vue-router";
import {useStore} from "vuex";
export default {
    name: 'Dashboard',
    components : {
        SideBar,
    },
    setup() {
        const router = useRouter();
        const store = useStore();
        onMounted(async () => {
            try {
                const {data} = await axios.get('http://localhost:10000/admin/profiles', {withCredentials: true, credentials: 'include'});
                store.commit('users/setUser', data);
            } catch (e) {
                await router.push('/login');
            }
        });
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
