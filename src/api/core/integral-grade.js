// @ 符号在vue.config.js 中配置， 表示 'src' 路径的别名
import request from '@/utils/request'

//导出默认模块
export default {

    // 定义模块方法
    // 成员方法: 获取积分等级列表
    list() {

        // 调用axios的初始化模块，发送远程Ajax请求
        return request({
            baseURL: 'http://localhost:8110',
            url: '/admin/core/integralGrade/list',
            method: 'get'
        })
    },
    removeById(id) {
        return request({
            baseURL: 'http://localhost:8110',
            url: `/admin/core/integralGrade/remove/${id}`,
            method: 'delete'
        })
    },
    save(integralGrade) {
        return request({
            baseURL: 'http://localhost:8110',
            url: '/admin/core/integralGrade/save',
            method: 'post',
            data: integralGrade
        })
    },
    getById(id) {
        return request({
            baseURL: 'http://localhost:8110',
            url: `/admin/core/integralGrade/get/${id}`,
            method: 'get'
        })
    },
    updateById(integralGrade) {
        return request({
            baseURL: 'http://localhost:8110',
            url: '/admin/core/integralGrade/update',
            method: 'put',
            data: integralGrade
        })
    },

}
