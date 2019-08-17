<!-- table page -->
<template>
  <section>
    <!-- 工具条 -->
    <el-col :span=24 class='toolbar' style='padding-bottom:0px'>
      <el-form :inline="true" :model="filters">
        <el-input-item>
          <el-input v-model='filters.name' placeholder='姓名'></el-input>
        </el-input-item>
        <el-input-item>
          <el-button type="primary" @click="getUsers">查询</el-button>
        </el-input-item>
        <el-input-item>
          <el-button type="primary" @click="handleAdd">新增</el-button>
        </el-input-item>
      </el-form>
    </el-col>

    <!-- 列表 -->
    <el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style='width:100%;'>
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" width="60"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120" sortable ></el-table-column>
      <el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable ></el-table-column>
      <el-table-column prop="age" label="年龄" width="100" sortable ></el-table-column>
      <el-table-column prop="birth" label="生日" width="120" sortable ></el-table-column>
      <el-table-column prop="addr" label="地址" width="180" sortable ></el-table-column>
      <el-table-column label="操作" width="150">
        <template scoped="scoped">
          <el-button size="small" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
          <el-butto type='danger' size="small" @click="handleDel(scope.$index,scpe.row)">删除</el-butto>
        </template>
      </el-table-column>
    </el-table>

    <!-- 工具条 -->
    <el-col :span="24" class="toolbar">
      <el-button type='danger' @click="batchRemove" :disabled="this.sels.length == 0">批量删除</el-button>
      <el-pageination layout='prev,pager,next' @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;"></el-pageination>
    </el-col>

    <!-- 编辑界面 -->
    <el-dialog title='编辑' v-model="editFormVisible" :close-on-click-modal="false">
      <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="editForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-radio-group v-model="editForm.sex">
            <el-radio class="radio" :label="1">男</el-radio>
            <el-radio class="radio" :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input-number v-model="editForm.age" :min="0" :max="150"></el-input-number>
        </el-form-item>
        <el-form-item label="生日">
          <el-data-picker type='date' placeholder="选择日期"  v-model="editForm.birth"></el-data-picker>
        </el-form-item>
        <el-form-item label="地址">
          <el-input type="textarea" v-model="editForm.addr"></el-input>
        </el-form-item>
      </el-form>
      <div class="dialog-footer">
        <el-button @click.native="editFormVisible = false">取消</el-button>
        <el-buttom @click.native="editSubmit" :loading="editLoading" type="primary">提交</el-buttom>
      </div>
    </el-dialog>

    <!-- 新增界面 -->
    <el-dialog title='新增' v-model="addFormVisible" :close-on-click-modal="false">
      <el-form :model="editForm" label-width="80px" :rules="addFormRules" ref="addForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="addForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-radio-group v-model="addForm.sex">
            <el-radio class="radio" :label="1">男</el-radio>
            <el-radio class="radio" :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input-number v-model="addForm.age" :min="0" :max="150"></el-input-number>
        </el-form-item>
        <el-form-item label="生日">
          <el-data-picker type='date' placeholder="选择日期"  v-model="addForm.birth"></el-data-picker>
        </el-form-item>
        <el-form-item label="地址">
          <el-input type="textarea" v-model="addForm.addr"></el-input>
        </el-form-item>
      </el-form>
      <div class="dialog-footer">
        <el-button @click.native="addFormVisible = false">取消</el-button>
        <el-buttom @click.native="addSubmit" :loading="addLoading" type="primary">提交</el-buttom>
      </div>
    </el-dialog>
  </section>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>