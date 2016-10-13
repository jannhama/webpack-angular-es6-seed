/**
 * Created by Z800 on 13.10.2016.
 */

import $ from 'jquery';

class component {

    constructor() {
        this.renderTo='body';
        this.template='<div>Hello There</div>';

    }

    mount() {
        console.log(this.renderTo);
        console.log(this.template);

        $(this.template).appendTo(this.renderTo);

    }


}


export default component;

