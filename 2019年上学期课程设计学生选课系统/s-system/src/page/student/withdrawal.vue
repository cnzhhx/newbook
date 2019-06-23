<template>
    <div class="withdrawal">
        <el-table :data="$store.state.getSelectionResult">
            <el-table-column prop="teacher" label="授课老师">
            </el-table-column>
            <el-table-column prop="name" label="课程" width="140">
            </el-table-column>
            <el-table-column prop="chosen" label="已选人数">
            </el-table-column>
            <el-table-column prop="all_number" label="总人数">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="120">
                <template slot-scope="scope">
                    <el-button
                        @click.native.prevent="deleteRow(scope.$index,scope.row, $store.state.getSelectionResult)"
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
    import {goWithdrawal} from "../../api/index";
    export default {
        name: "withdrawal",
        data() {
            return {
            }
        },
        methods: {
            async deleteRow(index,row, rows) {
                let result;
                result = await goWithdrawal(this.$store.state.userInfo.number, row.name);
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
