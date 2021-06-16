import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowing: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }

        case SET_USERS:
            return {...state, users: [...action.users]}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                isFollowing: action.isFetching
                    ? [...state.isFollowing, action.userId]
                    : [...state.isFollowing.filter(id => id != action.userId)]
            }

        default:
            return state;
    }
}

export const followSuccess = userId => ({type: FOLLOW, userId});
export const unfollowSuccess = userId => ({type: UNFOLLOW, userId});
export const setUsers = users => ({type: SET_USERS, users});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = totalUsersCount => ({type: SET_USERS_TOTAL_COUNT, totalUsersCount});
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowing = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING, isFetching, userId});

// Users Thunks
export const getUsers = (currentPage, pageSize) => {
    return dispatch => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    };
}
export const follow = (userId) => {
    return dispatch => {
        dispatch(toggleIsFollowing(true, userId));
        dispatch(toggleIsFetching(true));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleIsFollowing(false, userId));
                dispatch(toggleIsFetching(false));
            })
    };
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId));
        dispatch(toggleIsFetching(true));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleIsFollowing(false, userId));
                dispatch(toggleIsFetching(false));
            })
    };
}

export default usersReducer;
