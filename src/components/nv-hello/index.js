import './nv-hello.scss';

export default (ngModule) => {
    console.log( 'foo' );
    require( './nv-hello' ).default( ngModule );
};
