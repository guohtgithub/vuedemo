import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './module/moduleA.js'
import moduleB from './module/moduleB.js'
Vue.use(Vuex)

const state = {
  iphone:{
    name: 'Apple/苹果 iPhone 6S',
    desc: '3D Touch、1200万像素照片、4k视频，强大功能于一身。',
    price: '5288 - 6888',
    isSelected: true,
    style: {
      '银色': 'https://img12.360buyimg.com/n1/s450x450_jfs/t1/3730/7/3438/394579/5b996f2eE1727c59e/373cf10d42a53b72.jpg',
      '深空灰色': 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/3/15/4536/138660/5b997bf8Ed72ebce7/819dcf182d743897.jpg',
      '金色': '//img11.360buyimg.com/n1/s450x450_jfs/t1/5496/27/3434/342453/5b996f2eEd112e64d/4298abfd4f435c1f.jpg',
    },
    activeStyleUrl: 'https://img12.360buyimg.com/n1/s450x450_jfs/t1/3730/7/3438/394579/5b996f2eE1727c59e/373cf10d42a53b72.jpg',
    storage: {
      '16GB': 5288,
      '64GB': 6088,
      '128GB': 6888
    }
  },  
  cart:[],
  name:'主管',
  num:'100',
  dataDemo:[{
    name:'A',
    num:30
  },{
    name:'B',
    num:33
  },{
    name:'C',
    num:36
  },{
    name:'D',
    num:38
  }]
}

const getters = {
  getName:function(state){    
    return state.name + '安排事务'
  },
  getNum:function(state){
    let type = [];
    for(let temp of state.dataDemo){
      if(temp.num<35){
        type.push(temp)
      }
    }
    return type;
  }
}

const mutations = {
  changeStyle(state, styleName, styleUrl) {
    state.iphone.activeStyle = styleName
    state.iphone.activeStyleUrl = styleUrl
  },
  changePrice(state, storage, price) {
    state.iphone.activeStorage = storage
    state.iphone.price = price
    state.iphone.isSelected = false
  },
  addItem(state) {
    const activeStyle = state.iphone.activeStyle === undefined ? '银色' : state.iphone.activeStyle
    const type = activeStyle + '，' +  state.iphone.activeStorage
    const cartInfo = {
      type: type,
      count: 1,
      price: state.iphone.price
    }
    state.cart.push(cartInfo)
  },
  removeItem(state, cartInfo) {
    state.cart.$remove(cartInfo)
  },
  setName(state,newName){
    state.name = newName
  },
  setNum(state,num){
    state.name += num;
  }
}

const actions = {
  setName(context,newName){
    context.commit('setName',newName)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules:{
    moduleA,
    moduleB
  }
})


export default store;