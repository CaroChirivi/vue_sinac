import { httpClient } from '@/plugins/axios'

export default{
    logout () {
        return httpClient.get('/logout')
    }
}