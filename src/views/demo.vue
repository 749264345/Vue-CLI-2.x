<template>
    <div class="main">
        <Breadcrumb>
            <el-button type="parimary" size="small" @click="xlsx" :loading="loading" :disabled="loading">导出xlsx</el-button>
        </Breadcrumb>

        <div class="main-content">

            <!-- 首页内容 -->
            <el-card>
                <el-table :data="tableData" style="width: 100%" size="small" v-loading="tableLoading">
                    <el-table-column align="center" prop="num" label="学号" min-width="150">
                        <template slot-scope="scope">{{ scope.row.num | isEmpty }}</template>
                    </el-table-column>
                    <el-table-column align="center" prop="grade" label="年级" min-width="150">
                        <template slot-scope="scope">{{ scope.row.grade | isEmpty }}</template>
                    </el-table-column>
                    <el-table-column align="center" prop="className" label="班级" min-width="200">
                        <template slot-scope="scope">{{ scope.row.className | isEmpty }}</template>
                    </el-table-column>
                    <el-table-column align="center" prop="name" label="姓名" min-width="150">
                        <template slot-scope="scope">{{ scope.row.name | isEmpty }}</template>
                    </el-table-column>
                    <el-table-column align="center" prop="score" label="成绩" min-width="150">
                        <template slot-scope="scope">{{ scope.row.score | isEmpty }}</template>
                    </el-table-column>
                </el-table>
            </el-card>

            <!-- 分页 -->
            <Pagination v-on:pageChange="pageChange" :total="total" :current="pageCurrent" :size="pageSize"></Pagination>
        </div>

    </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb";
import Pagination from "../components/Pagination";

export default {
    components: {
        Breadcrumb,
        Pagination
    },
    data() {
        return {
            loading: false,
            //表格数据
            tableLoading: false,
            tableData: [],
            //分页数据
            total: 100,
            pageSize: 10,
            pageCurrent: 1,
            exportFields: [
                { field: 'num', label: '学号' },
                { field: 'grade', label: '年级' },
                { field: 'className', label: '班级' },
                { field: 'name', label: '姓名' },
                { field: 'score', label: '成绩' }
            ],
            excelHeader: ['学号', '年级', '班级', '姓名', '成绩']
        }
    },
    created() {
        this.getData();
    },
    mounted() {
        //动态加载表格导出组件
        this.$xlsxScript('xlsx', [
            './static/libs/xlsx.core.min.js',
            './static/libs/FileSaver.min.js',
            './static/libs/Export2Excel.min.js'
        ]);
    },
    methods: {
        getData() {
            this.tableLoading = true;
            this.$demo(() => {
                this.tableData = [
                    { num: 1001, name: 'Peter', score: '98', grade: '初一', className: '3班' },
                    { num: 1020, name: 'Mark', score: '78', grade: '初一', className: '3班' },
                    { num: 1090, name: 'Lon', score: '91', grade: '初一', className: '3班' },
                    { num: 1189, name: 'Sam', score: '82', grade: '初一', className: '3班' },
                    { num: 1087, name: 'Tik', score: '69', grade: '初一', className: '3班' },
                    { num: 1001, name: 'Peter', score: '98', grade: '初一', className: '3班' },
                    { num: 1020, name: 'Mark', score: '78', grade: '初一', className: '3班' },
                    { num: 1090, name: 'Lon', score: '91', grade: '初一', className: '3班' },
                    { num: 1189, name: 'Sam', score: '82', grade: '初一', className: '3班' },
                    { num: 1087, name: 'Tik', score: '69', grade: '初一', className: '3班' }
                ];
                this.tableLoading = false;
            })
        },
        xlsx() {
            this.loading = true;
            const data = this.tableData.map(v => this.exportFields.map(j => v[j]));
            export_json_to_excel(this.excelHeader, data, this.$route.name + this.$now());
            this.$message.success('导出成功');
            this.loading = false;
        },
        pageChange(res) {
            this.pageSize = res.pageSize;
            this.pageCurrent = res.pageCurrent;
            this.getData();
        }
    }
}
</script>
