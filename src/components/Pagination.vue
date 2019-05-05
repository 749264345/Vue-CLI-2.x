<template>
    <el-pagination background style="text-align:right;margin-top:10px;" popper-class="pagination"
        layout="total,  prev, pager, next,sizes, jumper"
        :total="total" 
        :page-sizes="[10, 20, 30, 40,50]"
        :page-size="size"
        :current-page="current"
        @size-change="sizeChange"
        @current-change="currentChange"></el-pagination>
</template>
<script>
export default {
    data() {
        return {
            pageSize: this.size,
            pageCurrent: this.current
        }
    },
    props: {
        total: {
            type: Number,
            default: 0
        },
        current: {
            type: Number,
            default: 1
        },
        size: {
            type: Number,
            default: 10
        }
    },
    methods: {
        currentChange(current) {
            this.pageCurrent = current;
            this.emit();
        },
        sizeChange(size) {
            this.pageSize = size;
            this.pageCurrent = 1;
            this.emit();
        },
        emit() {
            this.$emit('pageChange', {
                pageSize: this.pageSize,
                pageCurrent: this.pageCurrent
            })
        }
    }
}
</script>

