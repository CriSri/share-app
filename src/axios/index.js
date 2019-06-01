import JSONP from 'jsonp'
export default class Axios {
    static jsonp(options){
        new Promise((resolve,reject)=>{
            JSONP(options.url,{
                param:'callback'
            },function(err,response){
                //todo
            })
        })
    }
}