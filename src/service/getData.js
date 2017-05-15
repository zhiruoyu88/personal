import * as mockData from './mockData'
const setpromise = data => {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}
// 本地环境用假数据
if(process.env.NODE_ENV=='development'){
    var getUser = () => setpromise(mockData.userInfo);
    var getArticle = () => setpromise(mockData.article);
}else { //生产环境用真数据
    var getUser = (params) =>fetch('http://localhost/personal/api/user.php',params)
}

export {getUser,getArticle}