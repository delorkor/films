import { useRef, useState } from "react";
import { Textarea } from "../../components/Textarea/Textarea";
import style from "./addFilms.module.css";
import { Input } from "../../components/Input/Input";
import { addFilms } from "../../reqests/addFilms";
import { useForm } from "react-hook-form";
import { ButtonComp } from "../../components/ButtonComp/ButtonComp";
export const AddFilms = () => {
  const [setFiles, setFilesFunction] = useState(null);
  const [setPoster, setPoserFunction] = useState(null);
  const filePicker = useRef(null);
  const posterPicker = useRef(null);
  const downloadFile = () => {
    filePicker.current.click();
  };

  const downloadPoster = () => {
    posterPicker.current.click();
  };
  const hendlerChange = (e) => {
    console.log(e.target.files);
    setFilesFunction(e.target.files[0]);
  };
  const PosterChange = (e) => {
    console.log(e.target.files);
    setPoserFunction(e.target.files[0]);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const hendlerUpload = async (data) => {
    // console.log(data);
    const form = new FormData();
    // console.log(form);
    form.append("films", setFiles);
    
    console.log(form);
    // form.append("name_img_film", setPoster);
    // console.log(form);
    // const res = await fetch("https://diplom.loc/api/add/Films", {
    //   method: "POST",
    //   body: form,
    // });

    // const data = await res.json();
    // console.log(form);
    // addFilms(form);
  };

  return (
    <div className={style.addFilms}>
      <div className={style.addFilmsWrapper}>
        <form onSubmit={handleSubmit(hendlerUpload)}>
          <div className={style.blockDescription}>
            <div className={style.InputWrapper}>
              <div className={style.TextDescr}>Name</div>
              <Input
                {...register("name")}
                type="text"
                className={style.InpytDescr}
                placeholder="name"
              ></Input>
            </div>
            {/* <div className={style.InputWrapper}> */}
            <Input
              type="file"
              ref={filePicker}
              className={style.InpytDescrFileNone}
              placeholder="film"
              onChange={hendlerChange}
            ></Input>
            <Input
              type="file"
              ref={posterPicker}
              className={style.InpytDescrFileNone}
              placeholder="poster"
              onChange={PosterChange}
            ></Input>

            <ButtonComp className={style.InpytDescrFile} onClick={downloadFile}>
              film download
            </ButtonComp>
            <ButtonComp
              className={style.InpytDescrFile}
              onClick={downloadPoster}
            >
              poster download
            </ButtonComp>
            {/* </div> */}
          </div>

          <div className={style.blockDescriptionDate}>
            <div className={style.InputWrapper}>
              <div className={style.TextDescr}>Ganre</div>
              <select
                {...register("category_id")}
                name="category"
                className={style.InpytDescr}
              >
                <option value="comedy">comedy</option>
                <option value="horrors">horrors</option>
              </select>
            </div>

            <div className={style.InputWrapper}>
              <div className={style.TextDescr}>Date</div>
              <Input
                {...register("Year")}
                type="date"
                className={style.InpytDescr}
                placeholder="date"
              ></Input>
            </div>
          </div>
          <div className={style.blockTextarea}>
            <Textarea
              type="text"
              {...register("description")}
              className={style.Textarea}
            ></Textarea>
          </div>
          <div className={style.blockButton}>
            <ButtonComp className={style.ButtonAdd} onClick={hendlerUpload}>
              Cancel
            </ButtonComp>
            <ButtonComp className={style.ButtonAdd} onClick={hendlerUpload}>
              Save
            </ButtonComp>
          </div>
        </form>
      </div>
    </div>
  );
};
