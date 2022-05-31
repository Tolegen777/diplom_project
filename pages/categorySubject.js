import React, {useEffect} from 'react';
import style from "./../styles/CategorySubject.module.css";
import {useRouter} from "next/router";
import {useGetCoursesQuery} from "../redux/rtk-api/cources/cources";
import {useDispatch, useSelector} from "react-redux";
import {setCourseId} from "../redux/store/reducers/course/course.slice";
import {useFormik} from "formik";

const elems = [1, 2, 3, 4, 5, 6]


const CategorySubject = () => {



    const {data: courses, isLoading, error} = useGetCoursesQuery()
    // const courseId = useSelector(state=>state.course.courseId)
    //
    // useEffect()

    const dispatch = useDispatch()
    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            title: '',
            id: null
        },

        onSubmit: values => {
            if (values.course) {

                dispatch(setCourseId(Number(values.course)))
                router.push('/subject')
            } else {

                dispatch(setCourseId(courses.result[0].id))
                router.push('/subject')
            }

        },
    });

    const goWithoutAuth = useSelector(state=>state.auth.goWithoutAuth)
    const isAuth = useSelector(state=>state.auth.isAuth)
    if (!isAuth){
        if (!goWithoutAuth){
            router.push("sign")
        }
    }


    return (
        <><div className={style.main}>
                <div style={{textAlign: "center"}}>
                    <div className={style.secondText}>
                        <span>Welcome to BeGreat! Let{"'"}s get started!</span>
                    </div>
                    <div className={style.block}>
                        {elems.map(e => <div key={e} className={style.circle}></div>)}
                    </div>
                </div>

                <form onSubmit={formik.handleSubmit}>
                    <div className={style.choose}>

                        <div style={{marginBottom: "10px"}}>Choose a subject:</div>

                        <div className={style.select}>
                            <select name="course" style={{cursor: "pointer"}}
                                    value={formik.values.course ? formik.values.course : ''} onChange={formik.handleChange}>
                                {courses && courses?.result.map(oneCourse => <option key={oneCourse.id} value={oneCourse.id}
                                                                                     style={{fontSize: "50px"}}
                                                                                     onChange={formik.handleChange}>{oneCourse.name}</option>)}
                            </select>
                        </div>
                    </div>
                    <div>
                        <button type={"submit"} className={style.btn}>Continue</button>
                    </div>
                </form>

            </div>
        </>

    );
};

export default CategorySubject;