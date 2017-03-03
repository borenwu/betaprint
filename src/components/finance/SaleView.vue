<template>
  <div class="row">
    <div class="col s12 m12 l12">
      <div class="card">
        <div class="card-content">
          <h4>今日销售</h4>
          <div class="divider"/>
          <br/>

          <div class="row search-bar">
            <div class="row">
              <div class="input-field col s6">
                <label>起始日期</label>
                <input type="date" class="datepick">
              </div>

              <div class="input-field col s6">
                <label>终止日期</label>
                <input type="date" class="datepick">
              </div>

              <div class="row">
                <div class="input-field col s11">
                  <a class="waves-effect waves-light btn cyan right"><i class="material-icons left">search</i>检索</a>
                </div>
              </div>

            </div>
          </div>

          <div class="divider"/>
          <br/>
          <div class="row sale-table">
            <table>
              <thead>
              <tr>
                <th data-field="id">客户</th>
                <th data-field="id">任务名称</th>
                <th data-field="id">印刷量</th>
                <th data-field="name">单价</th>
                <th data-field="price">总价</th>
              </tr>
              </thead>

              <tbody>
              <tr>
                <td>{{client}}</td>
                <td>{{taskName}}</td>
                <td>{{number}}</td>
                <td>
                  <div class="input-field inline">
                    <input type="number" v-model="price" placeholder="单价">
                  </div>
                  元
                </td>
                <td>{{calTotal()}}元</td>
              </tr>
              <tr>
                <td>{{client}}</td>
                <td>{{taskName}}</td>
                <td>{{number}}</td>
                <td>
                  <div class="input-field inline">
                    <input type="number" v-model="price" placeholder="单价">
                  </div>
                  元
                </td>
                <td>{{calTotal()}}元</td>
              </tr>
              <tr>
                <td>{{client}}</td>
                <td>{{taskName}}</td>
                <td>{{number}}</td>
                <td>
                  <div class="input-field inline">
                    <input type="number" v-model="price" placeholder="单价">
                  </div>
                  元
                </td>
                <td>{{calTotal()}}元</td>
              </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>

<script>
  export default{
    data(){
      return {
        msg: 'hello sale',
        client:"如皋日报",
        taskName:"如皋日报",
        number: 5,
        totalPrice: 0.0,
        price: 0.0
      }
    },
    components: {},
    methods: {
      calTotal(){
        return this.price * this.number
      }
    },
    mounted(){
      $('.datepick').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year
        format: 'yyyy-mm-dd',
        weekdaysLetter: ['日', '一', '二', '三', '四', '五', '六'],
        today: '今天',
        clear: '清除',
        close: '关闭',
        monthsFull: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        weekdaysFull: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        weekdaysShort: ['日', '一', '二', '三', '四', '五', '六'],
      });
      $('.collapsible').collapsible();
    }
  }
</script>
