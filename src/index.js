/* eslint-disable import/no-extraneous-dependencies */
import './index.css';
import 'mini.css/dist/mini-default.min.css';
import './test.coffee';

console.log('app started');

function handleButtonColorPickerClick(event) {
  const button = event.currentTarget;
  button.style.backgroundColor = event.target.dataset.color;
}

const colorPicker = document.querySelector('.color-picker');
const colorPickerNew = document.querySelector('.color-picker-new');

colorPicker.addEventListener('click', handleButtonColorPickerClick);
colorPickerNew.addEventListener('click', handleButtonColorPickerClick);