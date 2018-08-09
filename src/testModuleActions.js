import { getPhotos } from '@/Api';

export const actions = {
    GET_PHOTOS: ({commit}) => {
        //return await getPhotos()
        //return commit('UPDATE_PHOTOS', await getPhotos())
        return new Promise((resolve, reject) => {
            getPhotos()
            .then((response)=> {
                commit('UPDATE_PHOTOS', response.data || []);
                resolve(response);
            })
            .catch(() => {
                reject('It broke.');
            })    
        });
    }
} 