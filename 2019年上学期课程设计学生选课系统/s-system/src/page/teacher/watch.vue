<template>
    <div class="watch">
        <el-table :data="this.$store.state.getSelectTeacher">
            <el-table-column prop="number" label="学生id">
            </el-table-column>
            <el-table-column prop="name" label="课程" width="140">
            </el-table-column>
            <el-table-column prop="name2" label="学生姓名">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "watch",
        mounted(){
            this.$store.dispatch('reqgetSelectTeacher');
        },
    }
</script>

<style scoped>

</style>
