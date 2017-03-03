<template>
  <div>
    <!--<h1 class="text-center">订单</h1>-->
    <section class="content">
      <div class="row">
        <div class="col-md-6">
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
                <input class="form-control"  placeholder=0 type="number" v-model="amount">
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
              <br />

              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-calendar"></i> 交付日期</span>
                <input type="text" style="width: 100%" id="duedate" />
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
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>

<script>
  import $ from 'jquery'
  import datepicker from '../datepicker/datepicker.vue'
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
      }
    },
    methods: {
      handleSubmit(e){
        e.preventDefault();
        var duedate = $('#duedate').val()

        this.addOrder(this.clientname,this.taskname,this.amount,duedate,this.bookbind,this.description)
//        console.log("clientname: "+this.clientname)
//        console.log("taskname: "+this.taskname)
//        console.log("amount: "+this.amount)
//        console.log("duedate: "+$('#datetimepicker').val())
//        console.log("bookbind: "+this.bookbind)
//        console.log("description: "+this.description)
      },

      addOrder(clientname, taskname, amount, duedate, bookbind, description){
        $.ajax({
          type: 'post',
          url: 'http://192.168.1.131:5000/order/add',
          data: {
            clientname: clientname,
            taskname: taskname,
            amount:amount,
            duedate:duedate,
            bookbind:bookbind,
            description:description
          }
        }).done(function (resp) {
          if (resp.status == "success") {
            console.log('success')
          }
        })
      },

      todayOrder(){

      },
    },
    components: {
        datepicker,
    },
    mounted() {
        var vm = this
      $('#duedate').datetimepicker({
        language:  'zh-CN',
        format: 'yyyy-mm-dd',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
      })

    }
  }
</script>
