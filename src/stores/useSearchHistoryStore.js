import { defineStore} from 'pinia'

export const useSearchHistoryStore = defineStore('searchHistoru', {
    state: ()=> {
        return {
            users: []
        }
    },
    actions: {
        pushToHistory(username){
            this.users.unshift(username)
        }
    }
})