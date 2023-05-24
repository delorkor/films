import { Input } from "../../components/Input/Input"
import {useForm} from "react-hook-form"
import { Link } from "../../components/Link/Link"
import style from "./ModalSignIn.module.css"
import { ButtonComp } from "../../components/ButtonComp/ButtonComp"
export const ModalSignIn=({modalActivSignIn,modalActivSignUpFunction,modalActivSignUp})=>{
    const { register, handleSubmit, formState: { errors } } = useForm();

const onSubmitSihnIn=(data)=>{
    // e.preventDefault()
console.log(data)

}
const OpenSignUp=(e)=>{
    // e.preventDefault()
    modalActivSignUpFunction(!modalActivSignUp)

}

    return <div className={(modalActivSignIn) ? style.Modal:style.ModalNone}>

 {(!modalActivSignUp)? 
    <div className={style.window}>
    <form onSubmit={handleSubmit(onSubmitSihnIn)}>
<div className={style.HeadingModal}>Sign In</div>
<div className={style.textEmail}>
    <span className={style.txtLable}>Email</span>
<Input type="text" className={style.ImputForm} {...register("Email")} placeholder="Your email" onChange={()=>{}}></Input>
</div>
<div className={style.textPasword}> <span className={style.txtLable}>Password</span>
<Input type="pasword" className={style.ImputForm} {...register("Password")} placeholder="Your password" onChange={()=>{}}></Input>
<span className={style.txtLablePas}  >Forgot password?</span>
</div>
<ButtonComp className={style.buttinAuth}>Sign in</ButtonComp>
<div className={style.headerModal}>Don’t have an account? <Link className={style.headerModalLink} onClick={OpenSignUp}>Sign Up</Link></div>
</form>
</div>

    :<div className={style.window}>
        {/* <form onSubmit={handleSubmit(onSubmitSihnIn)}>
    <div className={style.HeadingModal}>Sign In</div>
    <div className={style.textEmail}>
        <span className={style.txtLable}>Email</span>
    <Input type="text" className={style.ImputForm} {...register("Email")} placeholder="Your email" onChange={()=>{}}></Input>
    </div>
    <div className={style.textPasword}> <span className={style.txtLable}>Password</span>
    <Input type="pasword" className={style.ImputForm} {...register("Password")} placeholder="Your password" onChange={()=>{}}></Input>
    <span className={style.txtLablePas}  >Forgot password?</span>
    </div>
    <ButtonComp className={style.buttinAuth}>Sign in</ButtonComp>
    <div className={style.headerModal}>Don’t have an account? <Link className={style.headerModalLink} onClick={OpenSignUp}>Sign Up</Link></div>
    </form> */}
    </div>
}


    </div>
}