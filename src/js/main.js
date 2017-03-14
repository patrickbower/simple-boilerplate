// libs
import $ from "jquery";

// mods
import one from './hello';
import two from './world';

// tests
one();
two();

$('document').ready(function(){
  $('h1').css('background', 'blue');
})
