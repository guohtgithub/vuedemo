<!--  -->
<template>
  <el-row class='container'>
    <!--  头 -->
    <el-col :span='24' class='header'>
      <el-col :span='10' class='logo' :class="collapsed?'logo-collapsed-width':'logo-width'">
        {{collapsed?"":demoName}}
      </el-col>
      <el-col :span="10">
        <div class="tools" @click.prevent="collapse">
          <i class="fa fa-align-justify"></i>
        </div>
      </el-col>
      <el-col class="userinfo" :span='4'>
        <el-dropdown trigger='hover'>
          <span class="el-dropdown-link userinfo-inner">
            <img :src="this.demoUserPic" alt="">
            {{demoUsername}}
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
    <!-- 主体 -->
    <el-col :span='24' class="main">
      <!-- 左侧侧边栏 -->
      <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
        <!-- main menu -->
				<el-menu :default-active="$route.path" class="el-menu-vertical-demo" v-show="!collapsed">
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
					</template>
				</el-menu>

        <!-- <ul class="el-menu el-menu-vertical-demo" v-show='collapsed' :default-active="$route.path">
          <li class='el-submenu' v-for="(item,index) in $router.options.routes" :key="index" v-if="!item.hidden">
            <template v-if="!item.leaf">
              <div class="el-submenu__title" style="padding-left:20px;">
                <i :class="item.iconCls"></i>{{item.name}}
                i
              </div>
            </template>
          </li>
        </ul> -->
        <!-- main menu after -->
        <ul class="el-menu el-menu-vertical-demo collapsed" v-show='collapsed' ref="menuCollapsed">
          <li class="el-submenu item" v-for="(item,index) in $router.options.routes" v-if="!item.hidden" :key="index">
            <template v-if="!item.leaf">
              <div class="el-submenu__title" style="padding-left:20px">
                <i :class="item.iconCls"></i>
                <ul class="el-menu submenu" :class="'submenu-hok-'+index">
                  <li class="el-menu-item" v-for="child in item.children" :key='child.path' v-if="!child.hidden" style="padding-left:40px;" :class="$route.path==child.path?'is-active':''">
                    {{child.name}}
                  </li>
                </ul>
              </div>
            </template>
            <template v-else>
              <li class="el-submenu">
                <div class="el-submenu_title el-menu-item" style="height:56px;line-height56px;padding:0 20px;" :class="$route.path == item.children[0].path?'is-active':''">
                  <i :class="item.iconCls"></i>
                </div>
              </li>
            </template>
          </li>
        </ul>
      </aside>
      <!-- 右侧主体 -->
      <section class="content-container">
        <div class="grid-content bg-pruple-light">
          <el-col class="breadCrumb-container" :span="24">
            <strong class="title">{{$route.name}}</strong>
            <el-breadcrumb separator='/' class="breadcrumb-inner">
              <el-breadcrumb-item v-for="item in $route.matched" :key='item.path'>
                {{item.name}}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" class="content-wrapper">
            <transition name='fade' mode='out-in'>
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data () {
      return {
        demoName:'myVUEAdmin',
        collapsed:false,
        demoUsername:'',
        demoUserPic:'',
      };
    },
    methods: {
      logout(){
        let _this = this;
        this.$confirm("确认退出吗？",'提示',{

        }).then(() =>{
          sessionStorage.removeItem('user');
          _this.$router.push('/login');
        }).catch(()=>{

        });
      },
      collapse(){
        this.collapsed = !this.collapsed
      }
    },
    mounted(){
      let user = sessionStorage.getItem('user');
      if(user){
        user = JSON.parse(user);
        this.demoUsername = user.username || '';
        this.demoUserPic = user.avatar || '';
      }
    }
  }

</script>
<style scoped lang='scss'>
  .container{
    position: absolute;
    top: 0;
    left: 0;
    bottom:0;
    width:100%;
    .header{
      height:60px;
      line-height: 60px;
      background: #20a0ff;
      color:#fff;
      .userinfo{
        text-align: right;
        padding-right: 35px;
        float: right;
        img{
          width: 40px;
          height: 40px;
          border-radius: 20px;
          margin:10px 0 10px 10px;
          float: right;
        }
      }
      .logo{
        height: 60px;
        font-size: 22px;
        padding:0 20px;
        background-color: rgba(238, 241, 146, .3);
        border-right-width: 1px;
        border-right-style: solid;
        img{
          width: 40px;
          float: left;
          margin:10px 10px 18px;
        }
        .txt{
          color:#fff;
        }
      }
      .logo-width{
        width:230px;
      }
      .logo-collapsed-width{
        width: 60px;
      }
      .tools{
        padding:0 23px;
        width: 14px;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
      }
    }
    .main{
      display: flex;
      position: absolute;
      top:60px;
      bottom: 0;
      overflow: hidden;
      aside{
        flex: 0 0 230px;
        width: 230px;
        .el-munu{
          height: 100%;
        }
        .collapsed{
          width: 60px;
          .item{
            position: relative;
          }
          .submenu{
            position: absolute;
            top:0;
            left:60px;
            z-index: 99999;
            height: auto;
            display: none;
          }
        }
      }
      .menu-collapsed{
        flex:0 0 60px;
        width: 60px;
      }
      .menu-expanded{
        flex:0 0 230px;
        width: 230px;
      }
      .content-container{
        flex:1;
        overflow-y: scroll;
        padding:20px;
        .breadcrumb-container{
          .title{
            width: 200px;
            float: left;
            color: #475669;
          }
          .breadcrumb-inner{
            float: right
          }
          .content-wrapper{
            background: #fff;
            box-sizing: border-box;
          }
        }
      }
    }
  }
</style>