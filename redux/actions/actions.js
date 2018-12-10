/** */
import axios from 'axios'

const url = process.env.REACT_APP_NODE_ENV === 'production' ? "https://anna-medium-clone-api.herokuapp.com/api/" : `http://localhost:${process.env.REACT_APP_API_PORT}/api/`
export function loadItems () {
    return (dispatch) => {
        return axios.get(`${url}items`)
        .then((res) => {
            let items = res.data
            dispatch({type:'LOAD_ITEMS', items})
            return items
        })
    }
}
export function getUser (id) {
    return axios.get(`${url}user/${id}`).then((res)=>{
        return res.data
    }).catch(err=>console.error(err))
}
export function getUserProfile (id) {
    return (dispatch) => {
        return axios.get(`${url}user/profile/${id}`).then((res)=>{
            let profile = res.data
            dispatch({type: 'SET_PROFILE', profile})
        }).catch(err=>console.error(err))
    }
}
export function getItem (item_id) {
    return (dispatch) => {
        return axios.get(`${url}item/${item_id}`)
        .then((res) => {
            let item = res.data
            dispatch({type: 'VIEW_ITEM', item})
        }).catch((err) => console.error(err))
    }
}
export function signInUser (user_data) {
    return (dispatch) => {
        return axios.post(`${url}user`,user_data).then((res)=>{
            let user = res.data
            localStorage.setItem('Auth', JSON.stringify(user))
            dispatch({type: 'SET_USER', user})
        }).catch((err)=>console.error(err))
    }
}

//TODO: are these needed?
export function toggleClose() {
    return (dispatch) => {
        dispatch({type: 'TOGGLE_MODAL', modalMode: false})
    }
}
export function toggleOpen() {
    return (dispatch) => {
        dispatch({type: 'TOGGLE_MODAL', modalMode: true})
    }
}
