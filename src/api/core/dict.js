import request from '@/utils/request'
export default {
    listByParentId(parentId) {
        return request({
            baseURL: 'http://localhost:8110',
            url: `/admin/core/dict/listByParentId/${parentId}`,
            method: 'get'
        })
    }
}
