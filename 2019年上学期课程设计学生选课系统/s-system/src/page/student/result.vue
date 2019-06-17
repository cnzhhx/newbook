<template>
    <div class="result">
        <el-table :data="tableData">
            <el-table-column prop="studentId" label="学号">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="course" label="课程" width="140">
            </el-table-column>
            <el-table-column prop="time" label="上课时间">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "result",
        data() {
            const item = {
                course: '数学',
                name: '王小虎',
                studentId: '201703140204',
                time:'2019-10-10'
            };
            return {
                tableData: Array(20).fill(item)
            }
        },
    }
</script>

<style scoped>

</style>
