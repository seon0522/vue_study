//백엔드에서 받아온 http정보를 여기서 api로 변환하기

import axios from "axios";

//겉틀 생성함.
const instance = axios.create({});

// interceptors // 뜻: 요격기  // 요격한다: 공격해 오는 대상을 기다리고 있다가 도중에서 맞받아침

//axios.create.interceptors.request.use  : axios통신의 틀을 생성하고 기다리고 있다가 요청이 들어가기 전에 실행 : 약간 거르는 곳?  //이런 뜻인듯
instance.interceptors.request.use(
    //요청 성공 직전 호출
    (config) => {
        const token = localStorage.getItem('accessToken')
        if (token)
            config.headers.Authorization = token
        else
            console.log('No token')
        return config;
    },
    //요청 에러 직전 호출
    (error) => {
        return Promise.reject(error);
    }
);

//axios.create.interceptors.response.use  : axios통신의 틀을 생성하고 기다리고 있다가 응답이 전에 실행 : 약간 거르는 곳?  //이런 뜻인듯
instance.interceptors.response.use(
    //응답 성공 직전에 호출
    (response)=>{
        return response;
    },
    //응답 실패 직전에 호출
    (error)=>{
        return Promise.reject(error)
    }
);

export default instance; //변수 내보내기


