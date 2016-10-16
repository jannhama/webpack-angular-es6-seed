require('../../styles/bootstrap.min.css');

export default ngModule => {
    require('./nv-hello').default(ngModule);
    require('./nv-greetings').default(ngModule);
};

