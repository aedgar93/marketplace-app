const initialState = {
    articles: [],
    article: {}
}
export default (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_ITEMS' :
            return {
                ...state,
                articles: action.articles
            }
        case 'VIEW_ITEM':
            return {
                ...state,
                article: action.article
            }
        default:
            return state
    }
}
