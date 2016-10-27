class GreetingController {
    /* @ngInject */
    constructor(MsgService) {
        this.MsgService = MsgService;
        this.greeting = this.MsgService.getText();
    }

    getText() {
        return this.MsgService.getText();
    }
}

export default (ngModule) => {
    ngModule.directive('nvGreetings', () => {
        return {
            restric: 'E',
            scope: {},
            template: require('.//nv-greetings.html'),
            controllerAs: 'ctrl',
            controller: GreetingController
        }
    });
};
