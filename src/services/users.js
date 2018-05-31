import profileMockup from '../data/profile.json';
import skillsMockup from '../data/skill.json';

let ProfileService = {
    getProfile() {
        return new Promise(function (resolve, reject) {
            resolve(profileMockup);
        });
    },

    getSkill() {
        return new Promise(function (resolve, reject) {
            resolve(skillsMockup);
        });
    },

    updateProfile() {

    },

    deleteProfile() {

    }

};

export default ProfileService;