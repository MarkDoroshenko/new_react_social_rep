
let initialState = {
    friends: [
        { id: 1, name: "Kiril", avatar: "https://klike.net/uploads/posts/2022-08/1661144189_10.jpg" },
        { id: 2, name: 'Natali', avatar: "https://klike.net/uploads/posts/2019-03/1551511862_48.jpg" },
        {
            id: 3,
            name: "Kate",
            avatar: "https://content.freelancehunt.com/cdn-cgi/image/format=auto,width=800,dpr=1/snippet/34ada/e9b03/1167943/23FF6C39-7655-437B-A8A8-00C64163CC37.jpeg"
        },
    ],
};

const myFriendReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case '':
            return state;
        default:
            return state;
    }

}

export default myFriendReducer;