<template>
    <div class="selection">
        <el-table :data="tableData">
            <el-table-column prop="teacher" label="授课老师">
            </el-table-column>
            <el-table-column prop="course" label="课程" width="140">
            </el-table-column>
            <el-table-column prop="surplus" label="剩余人数">
            </el-table-column>
            <el-table-column prop="all" label="总人数">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="120">
                <template slot-scope="scope">
                    <el-button
                        @click="handleClick(scope.row,$event)"
                        type="text"
                        size="small">
                        选课
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "selection",
        data() {
            const item = {
                course: '数学',
                teacher: '王小虎',
                surplus:'10',
                all:'50'
            };
            return {
                tableData: Array(20).fill(item)
            }
        },
        methods: {
            handleClick(row,e) {
                if(e.target.innerText === "已选"){
                    window.confirm("已经选课，无需重复选择")
                }else{
                    if(row.surplus>0){
                        row.surplus = row.surplus-1
                    }
                    e.target.innerText = "已选";
                }
            }
        }
    }
</script>

<style scoped>

</style>
