import './nv-navibar.scss';

export default (ngModule) => {
    console.log( 'foo' );
    require( './nv-navibar' ).default( ngModule );
};
