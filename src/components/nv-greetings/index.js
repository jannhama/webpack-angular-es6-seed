import './nv-greetings.scss';


export default ngModule => {
    console.log('foo-greetings');
    require('./nv-greetings').default(ngModule);
};


