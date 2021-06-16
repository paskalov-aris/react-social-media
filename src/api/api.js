import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '510ad70c-a706-4dc5-93ec-c2a3b4f2f6ac'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
};

export const profileAPI = {
    setUserProfile(userId) {
        return instance.get(`profile/${userId}`);
    }
};

export const authAPI = {
    checkIfAuthorized() {
        return instance.get(`auth/me`);
    }
};
