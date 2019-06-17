<template>
    <div class="withdrawal">
        <el-table :data="tableData">
            <el-table-column prop="studentId" label="学号">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="course" label="课程" width="140">
            </el-table-column>
            <el-table-column prop="surplus" label="剩余人数">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="120">
                <template slot-scope="scope">
                    <el-button
                        @click.native.prevent="deleteRow(scope.$index, tableData)"
                        type="text"
                        size="small">
                        移除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "withdrawal",
        data() {
            const item = {
                course: '数学',
                name: '王小虎',
                studentId: '201703140204',
                surplus:'10'
            };
            return {
                tableData: Array(20).fill(item)
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>
