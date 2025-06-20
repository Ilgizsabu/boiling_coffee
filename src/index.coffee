handleButtonColorPickerClick = (event) ->
  button = event.currentTarget
  button.style.backgroundColor = event.target.dataset.color
  return

'use strict'
require './index.css'
require 'mini.css/dist/mini-default.min.css'
require './test.coffee'

### eslint-disable import/no-extraneous-dependencies ###

console.log 'app started'
colorPicker = document.querySelector('.color-picker')
colorPickerNew = document.querySelector('.color-picker-new')
colorPicker.addEventListener 'click', handleButtonColorPickerClick
colorPickerNew.addEventListener 'click', handleButtonColorPickerClick
