<template>
  <section class="content">
    <div class="row center-block" id="demo">
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

        <tr role="row" v-for="order in orders">
          <td class="sorting_1">{{order.order_date | getDate}}</td>
          <td class="sorting_1" >{{order.clientname}}</td>
          <td class="sorting_1" >{{order.taskname}}</td>
          <td class="sorting_1" >{{order.amount}}</td>
          <td class="sorting_1" >{{order.bookbind}}</td>
          <td class="sorting_1" >{{order.due_date | getDate}}</td>
          <td class="sorting_1" >{{order.description}}</td>
          <td class="sorting_1">
            <div class="row">
              <div class="col-sm-6">
                <button class="btn btn-primary" data-toggle="modal" data-target="#myModal" v-on:click="handleEdit(order)">update</button>
              </div>
              <div class="col-sm-6">
                <button v-on:click="handleDeleteOrder(order)">delete</button>
              </div>
            </div>
          </td>
        </tr>

        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
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
                          <input class="form-control"  type="text" v-model="rowtemplate.taskname">
                        </div>
                        <br/>

                        <div class="input-group">
                          <span class="input-group-addon"><i class="fa fa-sort-numeric-asc"></i> 印刷量</span>
                          <input class="form-control"  type="number" v-model="rowtemplate.amount">
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
                          <input type="text" style="width: 100%" id="duedate"/>
                        </div>
                        <br>

                        <div class="form-group">
                          <label>任务描述</label>
                          <textarea class="form-control" rows="3" placeholder="请输入 ..." v-model="rowtemplate.description"></textarea>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <!--<tr role="row">-->
          <!--<td> {{rowtemplate.order_date}}</td>-->
          <!--<td><input type="text" class="form-control" v-model="rowtemplate.clientname"/></td>-->
          <!--<td><input type="text" class="form-control" v-model="rowtemplate.taskname"/></td>-->
          <!--<td><input type="text" class="form-control" v-model="rowtemplate.amount"/></td>-->
          <!--<td><input type="text" class="form-control" v-model="rowtemplate.bookbind"/></td>-->
          <!--<td><input type="text" class="form-control" v-model="rowtemplate.due_date"/></td>-->
          <!--<td><input type="text" class="form-control" v-model="rowtemplate.description"/></td>-->
          <!--<td>-->
            <!--<div class="row">-->
              <!--<div class="col-sm-12">-->
                <!--<button>Save</button>-->
              <!--</div>-->
            <!--</div>-->
          <!--</td>-->
        <!--</tr>-->

        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'Tables',
    data(){
      return {
        orders: [],
        rowtemplate: {
          id: 0,
          SN: '',
          clientname: '',
          taskname: '',
          amount: 0,
          bookbind: '',
          description: '',
          due_date: '',
          status: false
        }
      }
    },
    filters:{
        getDate:function (value) {
          if(!value) return''
          value = value.toString()
          return value.split(" ")[0]
        }
    },

    methods: {
      editable: function (e, field, order) {
        var that = this;
        that.$editable(e, function (value) {
          // 这里做ajax请求
          //如果数据没有被修改这个回调方法不会执行
          console.log("order field: " + order.field)
          console.log("field: " + field)
          console.log("value: " + value)
        });
      },

      handleEdit: function (order) {
        this.rowtemplate = order;
      },

      todayOrder(){
        var vm = this
//        console.log('mounted')
        $.ajax({
          type: 'get',
          url: 'http://192.168.1.131:5000/order/look'
        }).done(function (resp) {
//          console.log(resp.results.length)
          if (resp.results.length > 0) {
            vm.orders = resp.results
          }
          else {
            vm.orders = []
          }

        })
      },

      deleteOrder(id, sn){
        var vm = this;
        $.ajax({
          type: 'post',
          url: 'http://192.168.1.131:5000/order/delete',
          data: {
            id: id,
            sn: sn,
          }
        }).done(function (resp) {
          if (resp.status == "success") {
            vm.todayOrder()
          }
        })
      },

      updateOrder(id, sn, clientname, taskname, amount, bookbind, description, duedate){
        var vm = this;
        $.ajax({
          type: 'post',
          url: 'http://192.168.1.131:5000/order/update',
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
            vm.todayOrder()
          }
        })
      },

      handleUpdateOrder(order){
        this.updateOrder(order.id, order.SN, order.clientname, order.taskname, order.amount, order.bookbind, order.description, order.due_date)
      },

      handleDeleteOrder(order){
        this.deleteOrder(order.id, order.SN)
      }
    },
    conponents: {},
    mounted(){
      this.todayOrder();
      $('#duedate').datetimepicker({
        language: 'zh-CN',
        format: 'yyyy-mm-dd',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
      })
//      var dataSet = this.getDataSet()
//      $('#demo').html('<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-hover table-bordered" id="example"></table>');
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
//          "thousands": ".",
//        },
//        "data": dataSet,
//        "columns": [
//          {"title": "创建日期"},
//          {"title": "客户"},
//          {"title": "任务"},
//          {"title": "印刷量", "class": "center"},
//          {"title": "装订方式", "class": "center"},
//          {"title": "交付日期", "class": "center"},
//          {"title": "任务描述", "class": "center"}
//        ],
//      })
////
//      $('#example').editableTableWidget();
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
