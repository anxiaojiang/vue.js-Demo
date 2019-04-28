export default{
    namespaced:true,
    state:{
        currentMenu:'',
        hoverMenu:''
    },
    mutations:{
        setCurrentMenu(currentState, menu){
            currentState.currentMenu = menu;
        },
        setHoverMenu(currentState, menu){
            currentState.hoverMenu = menu;
        },
    }
}