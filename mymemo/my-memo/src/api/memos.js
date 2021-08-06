//
import sendRequet from './sendRequest'

export default{
    getMemos(){
        //header에 필요한 요청에 대해 함수 추가
        return sendRequet({
            url:'/api/memos',
            method:'get'
        })
    },
    getMemo(memoId){
            return sendRequet({
                url:'/api/memos/' + memoId,
                method:'get'
            })
    }
}