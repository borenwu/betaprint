<template>
  <div>
    <!--<h1 class="text-center">订单</h1>-->
    <section class="content">
      <div class="row">
        <!--order form-->
        <div class="col-md-12">
          <div class="box box-info">
            <div class="box-header with-border">
              <h3 class="box-title">新建订单</h3>
            </div>

            <div class="box-body">
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-group"></i></span>
                <input class="form-control" placeholder="客户" type="text" v-model="clientname">
              </div>
              <br/>

              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-keyboard-o"></i></span>
                <input class="form-control" placeholder="任务名称" type="text" v-model="taskname">
              </div>
              <br/>

              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-sort-numeric-asc"></i> 印刷量</span>
                <input class="form-control" placeholder=0 type="number" v-model="amount">
              </div>
              <br>

              <!-- select examples -->
              <div class="form-group">
                <label>装订方式</label>
                <select class="form-control" v-model="bookbind">
                  <option>无</option>
                  <option>平钉</option>
                  <option>骑马钉</option>
                  <option>无线胶装</option>
                  <option>锁线胶装</option>
                  <option>精装</option>
                </select>
              </div>
              <br/>

              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-calendar"></i> 交付日期</span>
                <input type="text" style="width: 100%" class="datetime" id="newDueDate"/>
              </div>
              <br>

              <div class="form-group">
                <label>任务描述</label>
                <textarea class="form-control" rows="3" placeholder="请输入 ..." v-model="description"></textarea>
              </div>

              <button type="submit" class="btn btn-block btn-social btn-facebook" @click="handleAddOrder">
                <i class="fa fa-send-o"></i>提交订单
              </button>
            </div>
          </div>
        </div>

        <!--search calendar-->
        <div class="col-md-12">
          <div class="box box-info">
            <div class="box-header with-border">
              <h3 class="box-title">搜索订单</h3>
            </div>

            <div class="box-body">
              <div class="row">
                <div class="col-md-3">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-calendar"></i> 起始日期</span>
                    <input type="text" style="width: 100%" class="datetime" id="startDate"/>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-calendar"></i> 终止日期</span>
                    <input type="text" style="width: 100%" class="datetime" id="endDate"/>
                  </div>
                </div>

                <button type="button" class="btn btn-info btn-flat btn-sm" @click="handleSearchOrder()">
                  <i class="fa  fa-search"></i>
                  检索
                </button>

              </div>
            </div>

          </div>
        </div>

        <!--order table-->
        <div class="col-md-12">
          <div class="box box-danger">
            <div class="box-header">
              <h3 class="box-title">订单列表</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
                <div class="row">
                  <div class="col-sm-12">
                    <div id="example1_length" class="dataTables_length">
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-12 table-responsive" id="demo">
                    <table id="example" class="table table-striped table-hover table-bordered">
                      <thead>
                      <tr role="row">
                        <th>创建日期
                        </th>
                        <th>客户
                        </th>
                        <th>任务
                        </th>
                        <th>印刷量
                        </th>
                        <th>装订方式
                        </th>
                        <th>交付日期
                        </th>
                        <th>任务描述
                        </th>
                        <th>操作
                        </th>
                      </tr>
                      </thead>
                      <tbody>

                      <tr role="row" v-for="(order,index) in orders">
                        <td>{{order.order_date}}</td>
                        <td>{{order.clientname}}</td>
                        <td>{{order.taskname}}</td>
                        <td>{{order.amount}}</td>
                        <td>{{order.bookbind}}</td>
                        <td>{{order.due_date}}</td>
                        <td>{{order.description}}</td>
                        <td class="sorting_1">
                          <div class="container-fluid">
                            <div class="btn-group">
                              <button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#myModal"
                                      @click="handleEdit(order,index)">
                                编辑
                              </button>
                              <button class="btn btn-danger btn-sm" @click="handleDeleteOrder(order,index)">删除</button>
                              <button class="btn btn-success btn-sm" :disabled="order.status"
                                      @click="handleFinishOrder(order,index)">完成
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <!-- /.box-body -->
            </div>
          </div>
        </div>

        <!--update editor-->
        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                  aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Update Order</h4>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="box box-info">
                      <div class="box-header with-border">
                        <h3 class="box-title">修改订单</h3>
                      </div>

                      <div class="box-body">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="fa fa-group"></i></span>
                          <input class="form-control" type="text" v-model="rowtemplate.clientname">
                        </div>
                        <br/>

                        <div class="input-group">
                          <span class="input-group-addon"><i class="fa fa-keyboard-o"></i></span>
                          <input class="form-control" type="text" v-model="rowtemplate.taskname">
                        </div>
                        <br/>

                        <div class="input-group">
                          <span class="input-group-addon"><i class="fa fa-sort-numeric-asc"></i> 印刷量</span>
                          <input class="form-control" type="number" v-model="rowtemplate.amount">
                        </div>
                        <br>

                        <!-- select examples -->
                        <div class="form-group">
                          <label>装订方式</label>
                          <select class="form-control" v-model="rowtemplate.bookbind">
                            <option>无</option>
                            <option>平钉</option>
                            <option>骑马钉</option>
                            <option>无线胶装</option>
                            <option>锁线胶装</option>
                            <option>精装</option>
                          </select>
                        </div>
                        <br/>

                        <div class="input-group">
                          <span class="input-group-addon"><i class="fa fa-calendar"></i> 交付日期</span>
                          <input type="text" style="width: 100%" class="datetime" id="updateDuedate"
                                 v-model="rowtemplate.due_date"/>
                        </div>
                        <br>

                        <div class="form-group">
                          <label>任务描述</label>
                          <textarea class="form-control" rows="3" placeholder="请输入 ..."
                                    v-model="rowtemplate.description"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal"
                        @click="handleUpdateOrder(rowtemplate)">保存
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>

<script>
  import $ from 'jquery'
  var appconfig = require('../../../static/config/config.json')
  var rootUrl = appconfig.rootUrl

  export default{
    data(){
      return {
        msg: 'hello order',
        clientname: "",
        taskname: "",
        amount: 0,
        duedate: "",
        bookbind: "",
        description: "",
        orders: [],

        rowtemplate: {
        }
      }
    },

    methods: {

      formatDate(date) {
        var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
      },


      todayOrder(){

        var vm = this
        $.ajax({
          type: 'get',
          url: rootUrl+'/order/look'
        }).done(function (resp) {
          if (resp.results.length > 0) {
            vm.orders = resp.results
          }
          else {
            vm.orders = []
          }

        })
      },

      searchOrder(startDate, endDate){
        var vm = this;
        $.ajax({
          type: 'post',
          url: rootUrl+'/order/look',
          data: {
            startDate: startDate,
            endDate: endDate
          }
        }).done(function (resp) {
          if (resp.results.length > 0) {
            vm.orders = resp.results
          }
          else {
            vm.order = []
          }
        })
      },

      addOrder(clientname, taskname, amount, duedate, bookbind, description){
        var vm = this;
        $.ajax({
          type: 'post',
          url: rootUrl+'/order/add',
          data: {
            clientname: clientname,
            taskname: taskname,
            amount: amount,
            duedate: duedate,
            bookbind: bookbind,
            description: description
          }
        }).done(function (resp) {
          if (resp.status == "success") {
            vm.todayOrder()
          }
        })
      },

      deleteOrder(id, sn, index){
        var vm = this;
        $.ajax({
          type: 'post',
          url: rootUrl+'/order/delete',
          data: {
            id: id,
            sn: sn,
          }
        }).done(function (resp) {
          if (resp.status == "success") {
            vm.orders.splice(index, 1);
          }
        })
      },

      updateOrder(id, sn, clientname, taskname, amount, bookbind, description, duedate,index){
        var vm = this;
        $.ajax({
          type: 'post',
          url: rootUrl+'/order/update',
          data: {
            id: id,
            sn: sn,
            clientname: clientname,
            taskname: taskname,
            amount: amount,
            bookbind: bookbind,
            description: description,
            duedate: duedate
          }
        }).done(function (resp) {
          if (resp.status == "success") {
            alert('success')
            var order = vm.orders[index]
            order.clientname = clientname
            order.taskname = taskname
            order.amount = amount
            order.bookbind = bookbind
            order.description = description
            order.due_date = duedate
          }
        })
      },

      finishOrder(id, sn,index){
        var vm = this;
        $.ajax({
          type: 'post',
          url: rootUrl+'/order/finish',
          data: {
            id: id,
            sn: sn,
          }
        }).done(function (resp) {
          if (resp.status == "success") {
            alert('finish')
            var order = vm.orders[index]
            order.status = true
          }
        })
      },

      handleAddOrder(e){
        e.preventDefault();
        var vm = this

        this.addOrder(vm.clientname, vm.taskname, vm.amount, vm.duedate, vm.bookbind, vm.description)
      },

      handleSearchOrder(){
        var vm = this
        var startDate = $('#startDate').val()
        var endDate = $('#endDate').val()
        this.searchOrder(startDate, endDate)
      },

      handleEdit(order,index) {
        var vm = this
        vm.rowtemplate = order;
        vm.rowtemplate.index = index;
      },

      handleUpdateOrder(rowtemplate){
        this.updateOrder(rowtemplate.id, rowtemplate.SN,
          rowtemplate.clientname, rowtemplate.taskname,
          rowtemplate.amount, rowtemplate.bookbind,
          rowtemplate.description, rowtemplate.due_date,rowtemplate.index)
      },

      handleDeleteOrder(order, index){
        console.log(index)
        this.deleteOrder(order.id, order.SN, index)
      },

      handleFinishOrder(order,index){
        this.finishOrder(order.id, order.SN,index)
      }
    },
    components: {},
    created(){
    },
    mounted() {
      var vm = this;
      vm.todayOrder()
//      $('#example').DataTable({
//        "language": {
//          "processing": "处理中...",
//          "lengthMenu": "显示 _MENU_ 项结果",
//          "zeroRecords": "没有匹配结果",
//          "info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
//          "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
//          "infoFiltered": "(由 _MAX_ 项结果过滤)",
//          "infoPostFix": "",
//          "search": "搜索: ",
//          "searchPlaceholder": "搜索...",
//          "url": "",
//          "emptyTable": "表中数据为空",
//          "loadingRecords": "载入中...",
//          "infoThousands": ",",
//          "paginate": {
//            "first": "首页",
//            "previous": "上页",
//            "next": "下页",
//            "last": "末页"
//          },
//          "aria": {
//            paginate: {
//              first: '首页',
//              previous: '上页',
//              next: '下页',
//              last: '末页'
//            },
//            "sortAscending": ": 以升序排列此列",
//            "sortDescending": ": 以降序排列此列"
//          },
//          "decimal": "-",
//          "thousands": "."
//        }
//      })
//

      $('.datetime').datetimepicker({
        language: 'zh-CN',
        format: 'yyyy-mm-dd',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
      }).on('changeDate', function (ev) {
        var id = ev.delegateTarget.id
        if (id == 'newDueDate') {
          var time = ev.date;
          var newDate = new Date();
          newDate.setTime(time);
          vm.duedate = vm.formatDate(newDate)
        }
        if (id == 'updateDuedate') {
          var time = ev.date;
          var newDate = new Date();
          newDate.setTime(time);
          vm.rowtemplate.due_date = vm.formatDate(newDate)
        }
      });


//      $('#demo').html('<table cellpadding="0" cellspacing="0" border="0" class="display" id="example"></table>');
//      $('#example').dataTable({
//        "data": vm.orders,
//        "columns": [
//          {"title": "创建日期"},
//          {"title": "客户"},
//          {"title": "任务"},
//          {"title": "印刷量", "class": "center"},
//          {"title": "装订方式", "class": "center"},
//          {"title": "交付日期", "class": "center"},
//          {"title": "任务描述", "class": "center"}
//        ]
//      });

    }
  }
</script>
