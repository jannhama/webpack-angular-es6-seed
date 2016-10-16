export default ngModule => {
    console.log('foo');
    require('./nv-hello').default(ngModule);
};
