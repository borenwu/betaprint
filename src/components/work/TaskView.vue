<template>
  <div class="row">
    <div class="col s12 m12 l12">
      <div class="card">
        <div class="card-content">
          <h4>任务</h4>
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
          <div class="row todo-list">
            <ul class="collapsible col s12" data-collapsible="accordion">
              <li>
                <div class="collapsible-header">
                  <input type="checkbox" id="如皋日报"/>
                  <label for="如皋日报" class="task-name">如皋日报</label>
                </div>
                <div class="collapsible-body">
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </li>

              <li>
                <div class="collapsible-header">
                  <input type="checkbox" id="海安日报"/>
                  <label  class="task-name" for="海安日报">海安日报</label>
                </div>
                <div class="collapsible-body">
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .task-name{
    color: black;
  }
</style>

<script>

  export default{
    data(){
      return {
        msg: 'hello work'
      }
    },
    components: {},
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
