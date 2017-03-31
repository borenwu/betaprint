<template>
  <section class="content">
    <div class="row">
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
            <button class="btn btn-info btn-flat" @click="handleSaleOrder">Save</button>
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
                      <th>完成情况
                      </th>
                      <th>单价
                      </th>
                      <th>总价
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
                      <td>{{getStatus(order)}}</td>
                      <!--<td>{{order.price}}</td>-->
                      <!--<td>{{order.sale}}</td>-->
                      <td>
                        <div class="input-field inline">
                          <input type="number" v-model="order.price" placeholder="单价">
                        </div>
                        元
                      </td>
                      </td>
                      <td>{{calTotal(order)}}元</td>
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
    </div>
  </section>
</template>

<style scoped>
  .input-group input {
    height: auto;
  }
</style>

<script>
  var appconfig = require('../../../static/config/config.json')
  var rootUrl = appconfig.rootUrl

  export default{
    data(){
      return {
        msg: 'hello sale',
//        client: "如皋日报",
//        taskName: "如皋日报",
//        number: 5,
//        totalPrice: 0.0,
        orders: [],
      }
    },
    computed: {},
    components: {},
    watch:{

    },
    methods: {
      getStatus(order){
        if (order.status == true) {
          return "已完成"
        }
        else {
          return "未完成"
        }
      },

      calTotal(order){
        var vm = this;
        order.sale = order.price * order.amount
        return order.sale
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

      saleOrder(){
        console.log("sale order start!")
        var vm = this
        var orderList = JSON.stringify(vm.orders)
        $.ajax({
          type: 'post',
          url: rootUrl+'/order/sale',
          data: {
            saleOrders: orderList
          }
        }).done(function (resp) {
          if (resp.status == "success") {
            console.log("success")
          }
        })
      },


      handleSearchOrder(){
        var vm = this
        var startDate = $('#startDate').val()
        var endDate = $('#endDate').val()
        this.searchOrder(startDate, endDate)
      },

      handleSaleOrder(){
          this.saleOrder();
      }
    },
    mounted(){
      var vm = this
      vm.todayOrder()

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
    }
  }
</script>
