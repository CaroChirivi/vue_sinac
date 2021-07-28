import { httpClient } from '@/plugins/axios'

export default {
    getQuickAccessButtons () {
        return httpClient.get('/home/quickButtons')
    }
}