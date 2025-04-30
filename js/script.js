// Copyright (c) 2020 Mr. Coxall All rights reserved
// 
// Created by: Benjamin Abebe
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  const lengthA = parseFloat(document.getElementById("length-a").value)
  const lengthB = parseFloat(document.getElementById("length-b").value)
  const lengthC = parseFloat(document.getElementById("length-c").value)
  
  // process
  const angleA = Math.acos((lengthB**2 + lengthC**2 - lengthA**2) / (2 * lengthB * lengthC)) * (180/Math.PI)
  const angleB = Math.acos((lengthC**2 + lengthA**2 - lengthB**2) / (2 * lengthC * lengthA)) * (180/Math.PI)
  const angleC = Math.acos((lengthA**2 + lengthB**2 - lengthC**2) / (2 * lengthA * lengthB)) * (180/Math.PI)

  // sum of all angles
  const sumOfAngle = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2))

  if (sumOfAngle == 180){
    if (lengthA == lengthB && lengthB == lengthC){
      document.getElementById("answer").innerHTML = "<p>Your triangle type is equalateral triangle.</p>"
    } else if (lengthA == lengthB || lengthB == lengthC || lengthC == lengthA){
      document.getElementById("answer").innerHTML = "<p>Your triangle type is isoselece triangle.</p>"
    } else {
      document.getElementById("answer").innerHTML = "<p>Your triangle type is Scalene triangle.</p>"
    }
  } else {
    // you should never get here!
    document.getElementById("answer").innerHTML = "<p>sum of your angles doesn't add up to 180 so its not a triangle, please try again with the right measurement. </p>"
  }
}
