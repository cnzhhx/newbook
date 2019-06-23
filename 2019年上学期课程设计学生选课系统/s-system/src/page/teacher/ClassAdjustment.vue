<template>
    <div class="ClassAdjustment">
        <el-table :data="data">
            <el-table-column prop="teacher" label="授课老师">
            </el-table-column>
            <el-table-column prop="name" label="课程" width="140">
            </el-table-column>
            <el-table-column prop="chosen" label="已选人数">
            </el-table-column>
            <el-table-column prop="all_number" label="总人数">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "ClassAdjustment",
        data(){
            return{
                data: []
            }
        }
    }
</script>

<style scoped>

</style>
