/*
存储localStorage方法
 */
export const setStore = (name,value)=>{
    if(!name) return;
    if(typeof value!='string'){
        value=JSON.stringify(value);
    }
    window.localStorage.setItem(name,value);
}
/*
获取localStorage方法
 */
export const getStore = name => {
    if(!name) return;
    return window.localStorage.getItem(name);
}