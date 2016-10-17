'use strict';

/* @ngInject */
class MsgService {

    constructor() {
        this.homeText = 'Welcome to Home MsgService!';
    }

    getText() {
        return this.homeText;
    }

}


export default (ngModule) => {

    ngModule.service('MsgService', MsgService);

};