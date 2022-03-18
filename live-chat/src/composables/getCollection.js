/*
 * @Author: your name
 * @Date: 2022-03-01 15:53:54
 * @LastEditTime: 2022-03-02 10:32:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /live-chat/src/composables/getCollection.js
 */
import {ref, watchEffect} from 'vue'
import { projectFirestore } from '@/firebase/config'

const getCollection = (collection)=>{
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt')

    const unsub = collectionRef.onSnapshot((snap)=>{
        let results = []
        snap.docs.forEach(doc =>{
            doc.data().createdAt && results.push({...doc.data(),id: doc.id})
        })
        documents.value = results
        error.value = null
    },(err)=>{
        console.log(err.message)
        documents.value = null
        error.value = 'could not fetch data'
    })

    watchEffect((onInvalidate)=>{
        onInvalidate(()=>unsub())
    })
    return {documents,error}
}

export default getCollection