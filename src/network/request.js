import axios from 'axios'


export function request(config, success, failure){
    // return new Promise((resolve, reject) => {
    //     const instance = axios.create({
    //         baseURL: 'http://123.207.32.32:8000',
    //         timeout: 5000
    //     })
    
    //     instance(config).
    //     then(res => {
    //         resolve(res)
    //     }).catch(err => {
    //         failure(err)
    //     })
    // })
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    instance.interceptors.request.use(res => {
        console.log(res);
        return res     
    },err => {
        console.log(err);  
    });

    instance.interceptors.response.use(
        res => {
            console.log("rspon:"+res);
            return res.data
        },
        err => {
            console.log(err);
        }
    );
    return instance(config)
}