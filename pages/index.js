
import Sign from "./sign";
import {useSelector} from "react-redux";
import CategorySubject from "./categorySubject";

export default function Home() {
    const {isAuth} = useSelector(state=>state.auth)
    const {goWithoutAuth} = useSelector(state=>state.auth)


  return (
    <div>
        {isAuth?<CategorySubject/>:<Sign/>}
    </div>
  )
}
