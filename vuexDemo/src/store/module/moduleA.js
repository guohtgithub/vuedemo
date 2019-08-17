const moduleA = {
    namespaced:true,
    state:{
        name:'moduleA',
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