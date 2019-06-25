<template>
    <div class="selectCourses">
        <el-container style="height: 700px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu>
                    <el-menu-item index="1" @click="switchTo('/selectCourses/first')">
                        <i class="el-icon-s-home"></i>
                        <span slot="title" >首页</span>
                    </el-menu-item>
                    <el-submenu index="2" v-if="$store.state.userInfo.type === 0">
                        <template slot="title"><i class="el-icon-user"></i>学生</template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1" @click="switchTo('/selectCourses/selection')">选课</el-menu-item>
                            <el-menu-item index="2-2" @click="switchTo('/selectCourses/result')">选课结果</el-menu-item>
                            <el-menu-item index="2-3" @click="switchTo('/selectCourses/withdrawal')">退选</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3" v-if="$store.state.userInfo.type === 1">
                        <template slot="title"><i class="el-icon-s-check"></i>老师</template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1" @click="switchTo('/selectCourses/watch')">教学安排表</el-menu-item>
                            <el-menu-item index="3-2" @click="switchTo('/selectCourses/ClassAdjustment')">停/调课信息</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4" v-if="$store.state.userInfo.type === 2">
                        <template slot="title"><i class="el-icon-s-custom"></i>管理员</template>
                        <el-menu-item-group>
                            <el-menu-item index="4-1" @click="switchTo('/selectCourses/courses')">所有课程</el-menu-item>
                            <el-menu-item index="4-2" @click="switchTo('/selectCourses/garde')">所有选课学生</el-menu-item>
                            <el-menu-item index="4-2" @click="switchTo('/selectCourses/users')">所有用户</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 15px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-if="$store.state.userInfo.id"  @click.native="login()">登录</el-dropdown-item>
                            <el-dropdown-item>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span v-if="$store.state.userInfo.id">{{$store.state.userInfo.name}}</span>
                    <span v-if="!$store.state.userInfo.id">未登录</span>
                </el-header>

                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "selectCourses",
        data() {
            return {
            }
        },
        mounted(){
            console.log(this.$store.state.userInfo)
        },
        methods: {
            switchTo(path) {
                this.$router.push(path);
            },
            login(){
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
