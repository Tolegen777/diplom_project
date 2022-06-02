
import Sign from "./sign";
import {useSelector} from "react-redux";

import {useRouter} from "next/router";

export default function Home() {
    const {isAuth} = useSelector(state=>state.auth)
    const {goWithoutAuth} = useSelector(state=>state.auth)
    const router = useRouter()
    if (isAuth||goWithoutAuth){
        router.push("categorySubject")
    }


  return (
    <div>
        <Sign/>
    </div>
  )
}
