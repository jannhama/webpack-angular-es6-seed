import './about.scss';

export default (ngModule) => {
    console.log( 'about' );
    require( './about' ).default( ngModule );
};
