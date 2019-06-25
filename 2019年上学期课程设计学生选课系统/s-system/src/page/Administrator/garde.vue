<template>
    <div class="garde">
        <el-table :data="$store.state.getAllInfo.garde">
            <el-table-column prop="number" label="选课学生id">
            </el-table-column>
            <el-table-column prop="name" label="课程名" width="140">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "garde",
        mounted(){
            this.$store.dispatch('reqgetAllInfo');
        },
    }
</script>

<style scoped>

</style>
