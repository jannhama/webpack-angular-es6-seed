'use strict';

class MsgService {
    /* @ngInject */
    constructor() {
        console.log(JSON.stringify('service', null, 2));
        this.homeText = '<<MsgService>>';
    }

    getText() {
        console.log(JSON.stringify(this.homeText, null, 2));
        return this.homeText;
    }

}


export default (ngModule) => {
    ngModule.service('MsgService', MsgService);
};
