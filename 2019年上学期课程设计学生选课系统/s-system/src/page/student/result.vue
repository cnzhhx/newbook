<template>
    <div class="result">
        <el-table :data="$store.state.getSelectionResult">
            <el-table-column prop="teacher" label="授课老师">
            </el-table-column>
            <el-table-column prop="name" label="课程" width="140">
            </el-table-column>
            <el-table-column prop="chosen" label="剩余人数">
            </el-table-column>
            <el-table-column prop="all_number" label="总人数">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "result",
        data() {
            return {

            }
        },
        mounted(){
            this.$store.dispatch('reqGetSelectionResult');
        },
    }
</script>

<style scoped>

</style>
