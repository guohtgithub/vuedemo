const moduleB = {
    namespaced:true,
    state:{
        name:'moduleB',
    },
    mutaitions:{
        myMutation:function(state,newValue){
            state.name += newValue
        }
    },
    actions:{
        myAction:function(context,newValue){
            context.commit('myMutation',newValue)
        }
    }
}