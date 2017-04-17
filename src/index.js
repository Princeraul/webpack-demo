import _ from 'lodash';
import moment from 'moment';
import './styles/style.css';

function component() {
    const element = document.createElement('section');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

console.log(moment().format());
document.body.appendChild(component());
