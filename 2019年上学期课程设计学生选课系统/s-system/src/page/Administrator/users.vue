<template>
    <div class="users">
        <el-table :data="$store.state.getAllInfo.users">
            <el-table-column prop="type" label="用户类型">
            </el-table-column>
            <el-table-column prop="number" label="工号/学号" width="140">
            </el-table-column>
            <el-table-column prop="courses" label="任课老师的课程">
            </el-table-column>
            <el-table-column prop="password" label="账号密码">
            </el-table-column>
            <el-table-column prop="name" label="用户姓名">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "users",
        mounted(){
            this.$store.dispatch('reqgetAllInfo');
        },
    }
</script>

<style scoped>

</style>
