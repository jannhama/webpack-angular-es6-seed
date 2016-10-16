import './nv-greetings.scss';


export default ngModule => {
    console.log('foo');
    require('./nv-greetings').default(ngModule);
};


