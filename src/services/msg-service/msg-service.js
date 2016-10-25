class MsgService {
    /* @ngInject */
    constructor() {
        this.homeText = '<<MsgService>>';
    }

    getText() {
        return this.homeText;
    }
}

export default (ngModule) => {
    ngModule.service('MsgService', MsgService);
};
