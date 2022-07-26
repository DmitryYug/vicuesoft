import axios from "axios";


const apiInstance = axios.create({
    baseURL: 'https://api.punkapi.com/v2/'
})


export const AppApi = {
    getBeerCardsApi(pageNumber: number) {
        return apiInstance.get(`/beers/?page=${pageNumber}&per_page=20`).then(res => res.data)
    },
    getCurrentCardApi(id: string) {
        return apiInstance.get(`/beers/${id}`).then(res => res.data)
    },
    getBeersByName(name: string) {
        return apiInstance.get(`/beers?beer_name=${name}`).then(res => res.data)
    }
}