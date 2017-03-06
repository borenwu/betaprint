<template>
  <div>
    <!--<h1 class="text-center">订单</h1>-->
    <section class="content">
      <div class="row">
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
                <input type="text" style="width: 100%" id="duedate"/>
              </div>
              <br>

              <div class="form-group">
                <label>任务描述</label>
                <textarea class="form-control" rows="3" placeholder="请输入 ..." v-model="description"></textarea>
              </div>

              <button class="btn btn-block btn-social btn-facebook" v-on:click="handleSubmit">
                <i class="fa fa-send-o"></i>提交订单
              </button>
            </div>
          </div>
        </div>

        <!--order table-->
        <div class="col-md-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Data Table With Full Features</h3>
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

                      <tr role="row" v-for="order in orders">
                        <td class="sorting_1">{{order.order_date}}</td>
                        <td class="sorting_1">{{order.clientname}}</td>
                        <td class="sorting_1">{{order.taskname}}</td>
                        <td class="sorting_1">{{order.amount}}</td>
                        <td class="sorting_1">{{order.bookbind}}</td>
                        <td class="sorting_1">{{order.due_date}}</td>
                        <td class="sorting_1">{{order.description}}</td>
                        <td class="sorting_1">
                          <div class="row">
                            <div class="col-sm-6">
                              <button>update</button>
                            </div>
                            <div class="col-sm-6">
                              <button>delete</button>
                            </div>
                          </div>
                        </td>
                      </tr>

                      </tbody>
                      <!--<tfoot>-->
                      <!--<tr>-->
                      <!--<th colspan="1" rowspan="1">Rendering engine</th>-->
                      <!--<th colspan="1" rowspan="1">Browser</th>-->
                      <!--<th colspan="1" rowspan="1">Platform(s)</th>-->
                      <!--<th colspan="1" rowspan="1">Engine version</th>-->
                      <!--<th colspan="1" rowspan="1">CSS grade</th>-->
                      <!--</tr>-->
                      <!--</tfoot>-->
                    </table>
                  </div>
                </div>
              </div>
              <!-- /.box-body -->
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
  export default{
    data(){
      return {
        msg: 'hello order',
        clientname: "",
        taskname: "",
        amount: null,
//        duedate: "",
        bookbind: "",
        description: "",
        orders: [],
      }
    },
    methods: {
      todayOrder(){
        var vm = this
        console.log('mounted')
        $.ajax({
          type: 'get',
          url: 'http://192.168.1.131:5000/order/look'
        }).done(function (resp) {
          console.log(resp.results.length)
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
          url: 'http://192.168.1.131:5000/order/add',
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

      handleSubmit(e){
        e.preventDefault();
        var duedate = $('#duedate').val()

        this.addOrder(this.clientname, this.taskname, this.amount, duedate, this.bookbind, this.description)
//        console.log("clientname: "+this.clientname)
//        console.log("taskname: "+this.taskname)
//        console.log("amount: "+this.amount)
//        console.log("duedate: "+$('#datetimepicker').val())
//        console.log("bookbind: "+this.bookbind)
//        console.log("description: "+this.description)
      },

    },
    components: {},
    created(){
      this.todayOrder();
    },
    mounted() {

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
      $('#example').editableTableWidget();

      var vm = this
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
