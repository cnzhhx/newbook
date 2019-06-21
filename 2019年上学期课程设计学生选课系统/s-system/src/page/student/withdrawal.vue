<template>
    <div class="withdrawal">
        <el-table :data="$store.state.getSelectionResult">
            <el-table-column prop="teacher" label="授课老师">
            </el-table-column>
            <el-table-column prop="name" label="课程" width="140">
            </el-table-column>
            <el-table-column prop="chosen" label="剩余人数">
            </el-table-column>
            <el-table-column prop="all_number" label="总人数">
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
            };
            return {
                tableData: Array(20).fill(item)
            }
        },
        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1);
            }
        },
        mounted(){
            this.$store.dispatch('reqGetSelectionResult');
        }
    }
</script>

<style scoped>

</style>
