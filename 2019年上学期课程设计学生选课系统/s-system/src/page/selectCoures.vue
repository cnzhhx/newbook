<template>
    <div class="selectCourses">
        <el-container style="height: 700px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu>
                    <el-menu-item index="1" @click="switchTo('/selectCourses/first')">
                        <i class="el-icon-s-home"></i>
                        <span slot="title" >首页</span>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-user"></i>学生</template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1" @click="switchTo('/selectCourses/selection')">选课</el-menu-item>
                            <el-menu-item index="2-2" @click="switchTo('/selectCourses/result')">选课结果</el-menu-item>
                            <el-menu-item index="2-3" @click="switchTo('/selectCourses/withdrawal')">退选</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-s-check"></i>老师</template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1">教学安排表</el-menu-item>
                            <el-menu-item index="3-2">停/调课信息</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-s-custom"></i>管理员</template>
                        <el-menu-item-group>
                            <el-menu-item index="4-1">教学安排表</el-menu-item>
                            <el-menu-item index="4-2">全局管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 15px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item  @click="login()">登录</el-dropdown-item>
                            <el-dropdown-item>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>小zh</span>
                </el-header>

                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "selectCourses",
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        },
        methods: {
            switchTo(path) {
                this.$router.push(path);
            },
            login(){
                console.log(111);
                let login = document.getElementById('login');
                login.style.display = 'inline-block';
            },
        }
    }
</script>

<style scoped>
    .selectCourses{
        height: 100%;
        width: 100%;
    }
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>
