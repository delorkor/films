import { useRef, useState } from "react";
import { Textarea } from "../../components/Textarea/Textarea";
import style from "./addFilms.module.css";
import { Input } from "../../components/Input/Input";
import { addFilms } from "../../reqests/addFilms";
import { useForm } from "react-hook-form";
import { ButtonComp } from "../../components/ButtonComp/ButtonComp";
import { useNavigate } from "react-router-dom";
import pagesRoutes from "../../routes/pagesRoutes";
export const AddFilms = () => {
  const navigate = useNavigate();
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
    // console.log(e.target.files);
    setFilesFunction(e.target.files[0]);
  };
  const PosterChange = (e) => {
    // console.log(e.target.files);
    setPoserFunction(e.target.files[0]);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const hendlerUpload = async (data) => {
    const form = new FormData();

    form.append("films", setFiles);
    form.append("name", data["name"]);
    form.append("category_id", data["category_id"]);
    form.append("description", data["description"]);
    form.append("Year", data["Year"]);
    // console.log(data);
    // for (let key in data) {
    //   form.append(key, data[key]);
    // }

    form.append("name_img_film", setPoster);
    console.log(form.get("Year"));

    if (addFilms(form)) {
      navigate(pagesRoutes.MAIN);
    }
  };

  return (
    <div className={style.addFilms}>
      <div className={style.addFilmsWrapper}>
        <form
          onSubmit={handleSubmit(hendlerUpload)}
          encType="multipart/form-data"
        >
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
              // className={style.InpytDescrFileNone}
              placeholder="film"
              onChange={hendlerChange}
            ></Input>
            <Input
              type="file"
              ref={posterPicker}
              // className={style.InpytDescrFileNone}
              placeholder="poster"
              onChange={PosterChange}
            ></Input>

            {/* <ButtonComp className={style.InpytDescrFile} onClick={downloadFile}>
              film download
            </ButtonComp>
            <ButtonComp
              className={style.InpytDescrFile}
              onClick={downloadPoster}
            >
              poster download
            </ButtonComp> */}
            {/* </div> */}
          </div>

          <div className={style.blockDescriptionDate}>
            <div className={style.InputWrapper}>
              <div className={style.TextDescr}>Category</div>
              <select
                {...register("category_id")}
                name="category_id"
                className={style.InpytDescr}
              >
                <option value="2">movies</option>
                <option value="3">serials</option>
                <option value="4">cartoons</option>
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
            <ButtonComp className={style.ButtonAdd} onClick={() => {}}>
              Cancel
            </ButtonComp>
            <ButtonComp className={style.ButtonAdd} type="submit">
              Save
            </ButtonComp>
          </div>
        </form>
      </div>
    </div>
  );
};
