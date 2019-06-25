<template>
    <div class="courses">
        <el-table :data="$store.state.getAllInfo.courses">
            <el-table-column prop="name" label="课程名">
            </el-table-column>
            <el-table-column prop="teacher" label="任课老师" width="140">
            </el-table-column>
            <el-table-column prop="all_number" label="总人数">
            </el-table-column>
            <el-table-column prop="chosen" label="剩余人数">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "courses",
        mounted(){
            this.$store.dispatch('reqgetAllInfo');
        },
    }
</script>

<style scoped>

</style>
