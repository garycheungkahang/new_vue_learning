/*
 * @Author: your name
 * @Date: 2022-02-28 16:44:53
 * @LastEditTime: 2022-03-01 10:24:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /live-chat/src/firebase/config.js
 */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyATlniUosHo7YFFLYoHR8Ieu6C3uroD82k",
    authDomain: "live-chat-bd614.firebaseapp.com",
    projectId: "live-chat-bd614",
    storageBucket: "live-chat-bd614.appspot.com",
    messagingSenderId: "682014755089",
    appId: "1:682014755089:web:88b99712e03e66c21624b0",
    measurementId: "G-2VC94BLLMT"
  };

  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectAuth,projectFirestore,timestamp}