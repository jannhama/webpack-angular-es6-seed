import 'babel-polyfill';
import cats from './cats';
import component from './component';
import $ from 'jquery';

$('<h1>Cats</h1>').appendTo('body');
const ul = $('<ul></ul>').appendTo('body');
for (const cat of cats) {
    $('<li></li>').text(cat).appendTo(ul);
}

const compy = new component();
compy.mount();

