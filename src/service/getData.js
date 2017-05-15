import * as mockData from './mockData'
const setpromise = data => {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

var getUser = () => setpromise(mockData.userInfo);
var getArticle = () => setpromise(mockData.article);
export {getUser,getArticle}