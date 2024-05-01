/* global bootstrap: false */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TaskForm from './TaskForm'; // Importa el componente TaskForm


(function () {
  'use strict'
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()
