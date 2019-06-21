<template>
    <div class="selection">
        <el-table :data="$store.state.getSelection">
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
    import {selectSourse} from "../../api/index";

    export default {
        name: "selection",
        data() {
            return {

            }
        },
        mounted(){
            this.$store.dispatch('reqGetSelection');
        },
        methods: {
            async handleClick(row,e) {
                let result;
                if(e.target.innerText === "已选"){
                    window.confirm("已经选课，无需重复选择")
                }else{
                    e.target.innerText = "已选";
                    result = await selectSourse(this.$store.state.userInfo.id, row.name);

                }
            }
        }
    }
</script>

<style scoped>

</style>
