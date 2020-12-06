import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

export default function ApiSuccess({textMessage="", apiStatus="", hideSelf} = props){
  
  useEffect(() =>{
    if(textMessage){
      
      setTimeout(() => {
        hideSelf({showAlertStatus: false})
      }, 2000)
    }
  })


  return (
    <div id="apiAlert" className="api-status-wrap api-status-container">
      <span className = {`${apiStatus === "success" ? "success-color" : "failure-color"} api-status-icon`}> 
        <FontAwesomeIcon icon = {apiStatus === "success" ? faCheckCircle : faTimesCircle}/> 
      </span>
      {textMessage}
    </div>
  )
}
