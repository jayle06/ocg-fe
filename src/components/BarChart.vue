<script>
import { defineComponent } from 'vue'
import { Bar } from 'vue3-chart-v2'

export default defineComponent({
    name: 'BarChart',
    extends: Bar,
    props :{
        label: [],
        data : [],
    },
    async mounted () {
        await this.renderChart({
            labels: this.label,
            datasets: [
                {
                    label: 'Statistic Revenue',
                    backgroundColor: '#f87979',
                    data: this.data
                }]
            }, {
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                    },
                    responsive: true,
                    maintainAspectRatio: false
                })
        }   
    }
)
</script>