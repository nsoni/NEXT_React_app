import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileUpload} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/UploadImage.module.css';
import ApiSuccess from "../components/common/ApiSuccess";

export default function uploadImage(){

  const [image_list, setImageList] = useState([])
  const [apiStatus, setApiStatus] = useState({
    showAlertStatus: false,
    apiMessage: "",
    apiUploadStatus: null,
  })
  
  const getImage = (e) => {
    let img = e.target
    if(img && img.files && img.files[0]) {
      let new_array = image_list.slice(0);
      document.querySelector("#progress-bar").classList.remove("unvisible");
      document.querySelector("#progress-bar").classList.add("progress");
      setTimeout(() => { 
        document.querySelector("#progress-bar").classList.add("unvisible");
        document.querySelector("#progress-bar").classList.remove("progress");
        new_array.push(img.files)
        setImageList(new_array)
        setApiStatus(preState => ({
          ...preState,
          showAlertStatus: true,
          apiMessage: "Image Uploaded successfully!",
          apiUploadStatus: "success"
        }))
      }, 1000)
     
    } else{
      return
    }
  }

  return (
    <div className="column product-upload-container">
      {apiStatus.showAlertStatus
        ?(
          <ApiSuccess
            hideSelf = {setApiStatus}
            showStatus = {apiStatus.showAlertStatus}
            textMessage = {apiStatus.apiMessage} 
            apiStatus = {apiStatus.apiUploadStatus}
          />
        ): null
      }
      <div className="heading-font text-center margin-top-50 primary-color">Diamond Sample </div>
      <div className={`dead-center ${styles["upload-image-container"]} margin-top-50`}>
        <label htmlFor="image-uploader" className="btn btn-primary relative">
          <div>          
            <span > 
              <FontAwesomeIcon icon = {faFileUpload}/> 
            </span> 
            <span> Upload product picture</span>
          </div>
          <input 
            type="file"
            id="image-uploader"
            className="hidden"
            name="image-uploader"
            accept=".png, .jpg, .jpeg;"
            onChange = {getImage} 
          />
          <span id="progress-bar" className={styles["button-progress-bar"]}></span>
        </label>
      </div>

      <div className={`${styles["image-listing-container"]} margin-top-50`}>
        {image_list && image_list.length > 0
          ?(
            image_list.map((e, index) => <p key = {index}>{index+1}. <img src={URL.createObjectURL(e[0])}/> {e[0].name}</p>)
          ): null
        }
      </div>
    </div>
  )
}
