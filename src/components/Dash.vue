<template>
  <div class="wrapper">

    <!-- Main Header -->
    <header class="main-header">

      <!-- Logo -->
      <a href="index.html" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>A</b>LT</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg"><b>Admin</b>LTE</span>
      </a>

      <!-- Header Navbar -->
      <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <!-- Messages: style can be found in dropdown.less-->
            <li class="dropdown user user-menu">
              <!-- Menu Toggle Button -->
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <!-- The user image in the navbar-->
                <img :src='loginUser.img' class="user-image" alt="User Image">
                <!-- hidden-xs hides the username on small devices so only the image appears. -->
                <span class="hidden-xs">{{loginUser.name}}</span>
              </a>
              <ul class="dropdown-menu">
                <!-- The user image in the menu -->
                <li class="user-header">
                  <img :src='loginUser.img' class="img-circle" alt="User Image">

                  <p>
                    {{loginUser.role}}
                  </p>
                </li>
                <!-- Menu Body -->
                <!--<li class="user-body">-->
                  <!--<div class="row">-->
                    <!--<div class="col-xs-4 text-center">-->
                      <!--<a href="#">Followers</a>-->
                    <!--</div>-->
                    <!--<div class="col-xs-4 text-center">-->
                      <!--<a href="#">Sales</a>-->
                    <!--</div>-->
                    <!--<div class="col-xs-4 text-center">-->
                      <!--<a href="#">Friends</a>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--&lt;!&ndash; /.row &ndash;&gt;-->
                <!--</li>-->
                <!-- Menu Footer-->
                <li class="user-footer">
                  <div class="pull-left">
                    <a href="#" class="btn btn-default btn-flat">个人资料</a>
                  </div>
                  <div class="pull-right">
                    <a href="#" class="btn btn-default btn-flat">{{loginUser.buttonLabel}}</a>
                  </div>
                </li>
              </ul>
            </li>
            <!-- Control Sidebar Toggle Button -->
            <li>
              <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">

        <!-- Sidebar user panel (optional) -->
        <div class="user-panel">
          <div class="pull-left image">
            <img src="static/img/user2-160x160.jpg" class="img-circle" alt="User Image">
          </div>
          <div class="pull-left info">
            <p>Alexander Pierce</p>
            <!-- Status -->
            <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
          </div>
        </div>


        <!-- Sidebar Menu -->
        <ul class="sidebar-menu">
          <li class="header">工具</li>
          <!-- Optionally, you can add icons to the links -->
          <li class="active">
            <router-link to="/home">
              <i class="fa fa-dashboard"></i>
              <span>主页</span>
            </router-link>
          </li>

          <li>
            <router-link to="/order">
              <i class="fa fa-folder"></i>
              <span>订单</span>
            </router-link>
          </li>

          <li class="treeview">
            <a href="#"><i class="fa fa-tasks"></i> <span>工作</span>
              <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
            </a>
            <ul class="treeview-menu">
              <li>
                <router-link to="/task">任务</router-link>
              </li>
            </ul>
          </li>

          <li class="treeview">
            <a href="#"><i class="fa fa-link"></i> <span>仓库</span>
              <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
            </a>
            <ul class="treeview-menu">
              <li><a href="#">Link in level 2</a></li>
              <li><a href="#">Link in level 2</a></li>
            </ul>
          </li>

          <li class="treeview">
            <a href="#"><i class="fa fa-bar-chart"></i> <span>财务</span>
              <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
            </a>
            <ul class="treeview-menu">
              <li>
                <router-link to="/sale">销售报告</router-link>
              </li>
            </ul>
          </li>

          <!--demo test link-->
          <li>
            <router-link to="/demotest">
              <i class="fa fa-folder"></i>
              <span>demotest</span>
            </router-link>
          </li>
        </ul>
        <!-- /.sidebar-menu -->
      </section>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          {{$route.name.toUpperCase()}}
          <small>{{ $route.meta.description }}</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
          <li class="active">Here</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content">
        <!-- Your Page Content Here -->
        <router-view></router-view>
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <!-- Main Footer -->
    <footer class="main-footer">
      <!-- To the right -->
      <div class="pull-right hidden-xs">
        Anything you want
      </div>
      <!-- Default to the left -->
      <strong>Copyright &copy; 2016 <a href="#">Company</a>.</strong> All rights reserved.
    </footer>

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Create the tabs -->
      <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
        <li class="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
        <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
      </ul>
      <!-- Tab panes -->
      <div class="tab-content">
        <!-- Home tab content -->
        <div class="tab-pane active" id="control-sidebar-home-tab">
          <h3 class="control-sidebar-heading">Recent Activity</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript:;">
                <i class="menu-icon fa fa-birthday-cake bg-red"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">Langdon's Birthday</h4>

                  <p>Will be 23 on April 24th</p>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->

          <h3 class="control-sidebar-heading">Tasks Progress</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript:;">
                <h4 class="control-sidebar-subheading">
                  Custom Template Design
                  <span class="pull-right-container">
                  <span class="label label-danger pull-right">70%</span>
                </span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-danger" style="width: 70%"></div>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->

        </div>
        <!-- /.tab-pane -->
        <!-- Stats tab content -->
        <div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
        <!-- /.tab-pane -->
        <!-- Settings tab content -->
        <div class="tab-pane" id="control-sidebar-settings-tab">
          <form method="post">
            <h3 class="control-sidebar-heading">General Settings</h3>

            <div class="form-group">
              <label class="control-sidebar-subheading">
                Report panel usage
                <input type="checkbox" class="pull-right" checked>
              </label>

              <p>
                Some information about this general settings option
              </p>
            </div>
            <!-- /.form-group -->
          </form>
        </div>
        <!-- /.tab-pane -->
      </div>
    </aside>
    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data(){
      return {
        msg: 'hello app',
        loginUser: {
          img: '',
          name: '',
          role:'',
          buttonLabel: ''
        },
      }
    },

    methods: {
      checkLogin(){
        var vm = this
        var user = this.$store.state.user
        if (!user) {
          console.log('no user')
          vm.loginUser.img = 'static/img/nouser.png'
          vm.loginUser.name = '未登录'
          vm.loginUser.role='请登录'
          vm.loginUser.buttonLabel = '登陆'
        }
        else {
          console.log('user exist')
          vm.loginUser.img = this.$store.state.user.img
          vm.loginUser.name = this.$store.state.user.name
          vm.loginUser.role= this.$store.state.user.role
          vm.loginUser.buttonLabel = '登出'
        }
      },

      loginTest(){
        console.log('login start!')
        var store = this.$store
        var user = {
          username: 'tales',
          password: '123'
        }
        store.commit('SET_USER', user)
        console.log('set user done!')
        console.log(store.state.user)
      }
    },
    components: {},

    mounted(){
      this.checkLogin()
    }

  }
</script>

<style>

</style>
