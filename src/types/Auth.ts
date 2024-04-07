export interface AuthInterface {
    email : string
    nickname: string
    loginType : 'verifit' | "kakao" | "naver" | "google",
    relayPhoto : number | undefined,
    rank : number | undefined,
    todayPoint: number | undefined,
    totalPoint : number | undefined,
    seasonPoint : number | undefined,
    alert : {
        certification : boolean
        auction : boolean
        event:boolean
        notice:boolean
    }
}
