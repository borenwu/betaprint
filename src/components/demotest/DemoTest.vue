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
          <td class="sorting_1"  @dblclick="editable($event,'name',user)">{{order.order_date}}</td>
          <td class="sorting_1" @dblclick="editable($event,'name',user)">{{order.clientname}}</td>
          <td class="sorting_1" @dblclick="editable($event,'name',user)">{{order.taskname}}</td>
          <td class="sorting_1" @dblclick="editable($event,'name',user)">{{order.amount}}</td>
          <td class="sorting_1" @dblclick="editable($event,'name',user)">{{order.bookbind}}</td>
          <td class="sorting_1" @dblclick="editable($event,'name',user)">{{order.due_date}}</td>
          <td class="sorting_1" @dblclick="editable($event,'name',user)">{{order.description}}</td>
          <td class="sorting_1" >
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
  </section>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'Tables',
    data(){
      return {
        orders: []
      }
    },
    methods: {
      editable:function(e,field,user){
        var that=this;
        that.$editable(e,function(value){
          // 这里做ajax请求
          //如果数据没有被修改这个回调方法不会执行
        });
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
    },
    conponents: {},
    mounted(){
      this.todayOrder();
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
