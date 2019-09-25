<template>
  <div>
    <el-table :data="list" border style="width: 100%;">
      <el-table-column prop="id" label="活动ID" width="180"></el-table-column>
      <el-table-column prop="name" label="活动名称" width="180"></el-table-column>
      <el-table-column prop="sponsor" label="主办方" width="180"></el-table-column>
      <el-table-column prop="address" label="活动地址" width="180"></el-table-column>
      <el-table-column prop="starttime" label="开始日期" width="180"></el-table-column>
      <el-table-column prop="endtime" label="结束日期" width="180"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="fetchData"
      @current-change="fetchData"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import gatheringApi from '@/api/gathering'
export default {
  data() {
    return {
      list: [],
      total: 0, // 总记录数
      currentPage: 1, // 当前页码
      pageSize: 10, // 每页大小
      searchMap: {} // 查询表单绑定变量
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      gatheringApi.search(this.currentPage, this.pageSize, this.searchMap).then(response => {
        this.list = response.data.rows
        this.total = response.data.total
      })

      /* gatheringApi.getList().then(response => {
        this.list = response.data
      }) */
    }
  }

}
</script>