export default{
    namespaced:true,
    state:{
        title:'LV-Admin',
        titleAlias:'LV',
        fold:false,
        skins:[
            {name:'Blue', color:'#3c8dbc', classname:'lv-skin-blue'},
            {name:'Green', color:'#00a65a', classname:'lv-skin-green'}
        ],
        currentSkin:{name:'Blue', color:'#3c8dbc', classname:'lv-skin-blue'}
    },
    mutations:{
        setFold(currentState, fold){
            currentState.fold = fold;
        },
        setCurrentSkin(currentState, skin){
            currentState.currentSkin = skin;
        }
    }
}