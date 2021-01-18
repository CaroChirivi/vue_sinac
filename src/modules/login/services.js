import { httpClient } from '@/plugins/axios'

export default{
    signIn ({ user, password }) {
        return httpClient.post('/signin', { user, password })
    },
    csrfProtection () {
        return httpClient.get('/csrf-cookie')
    }
}