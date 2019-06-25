<template>
    <div class="addUsers">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="用户类型">
                <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item label="工号/学号">
                <el-input v-model="formLabelAlign.number"></el-input>
            </el-form-item>
            <el-form-item label="任课老师的课程">
                <el-input v-model="formLabelAlign.courses"></el-input>
            </el-form-item>
            <el-form-item label="账号密码">
                <el-input v-model="formLabelAlign.password"></el-input>
            </el-form-item>
            <el-form-item label="用户姓名">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="success" @click="open">提交信息</el-button>
        <el-button type="danger" @click="open2">返回</el-button>
    </div>
</template>

<script>
    import {addusers} from "../../api/index";

    export default {
        name: "addUsers",
        data() {
            return {
                labelPosition: 'top',
                formLabelAlign: {
                    type: '',
                    number: '',
                    courses: '',
                    password: '',
                    name: ''
                }
            };
        },
        methods: {
            open() {
                this.$confirm('此操作将信息提交, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '提交成功!'
                    });
                    addusers(this.formLabelAlign.type,this.formLabelAlign.number,this.formLabelAlign.courses,this.formLabelAlign.password,this.formLabelAlign.name);
                    let that = this;
                    setTimeout(() =>{
                        that.$router.push("/selectCourses/users");
                    },1500)
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消提交'
                    });
                });
            },
            open2() {
                this.$confirm('填写信息将不会保存, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '取消成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已返回编辑'
                    });
                });
            }
        }
    }
</script>

<style scoped>

</style>
