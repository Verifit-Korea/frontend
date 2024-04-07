export interface AuthInterface {
    email : string
    nickname: string
    loginType : 'verifit' | "kakao" | "naver" | "google"
    rank : number | undefined,
    todayPoint: number | undefined,
    totalPoint : number | undefined,
    monthPoint : number | undefined,
    alert : {
        certification : boolean
        auction : boolean
        event:boolean
        notice:boolean
    }
}
