import profileMockup from '../data/profile.json';

let ProfileService = {
    getProfile() {
        return new Promise(function (resolve, reject) {
            resolve(profileMockup);
        });
    },

    updateProfile() {

    },

    deleteProfile() {

    }

};

export default ProfileService;