import { useRef, useState } from "react";
import { Textarea } from "../../components/Textarea/Textarea";
import style from "./addFilms.module.css";
import { Input } from "../../components/Input/Input";

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

  const hendlerUpload = async () => {
    const form = new FormData();
    console.log(form);
    form.append("films", setFiles);
    // console.log(form.get("films"))
    // console.log(form)
    const res = await fetch("https://diplom.loc/api/add/Films", {
      method: "POST",
      body: form,
    });

    const data = await res.json();
  };

  return (
    <div className={style.addFilms}>
      <div className={style.addFilmsWrapper}>
        <form action="">
          <div className={style.blockDescription}>
            <div className={style.InputWrapper}>
              <div className={style.TextDescr}>Name</div>
              <Input
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

            <button className={style.InpytDescrFile} onClick={downloadFile}>
              film download
            </button>
            <button className={style.InpytDescrFile} onClick={downloadPoster}>
              poster download
            </button>
            {/* </div> */}
          </div>

          <div className={style.blockDescriptionDate}>
            <div className={style.InputWrapper}>
              <div className={style.TextDescr}>Ganre</div>
              <select name="category" className={style.InpytDescr}>
                <option value="comedy">comedy</option>
                <option value="horrors">horrors</option>
              </select>
            </div>

            <div className={style.InputWrapper}>
              <div className={style.TextDescr}>Date</div>
              <Input
                type="date"
                className={style.InpytDescr}
                placeholder="name"
              ></Input>
            </div>
          </div>
          <div className={style.blockTextarea}>
            <Textarea className={style.Textarea}></Textarea>
          </div>
          <div className={style.blockButton}>
            <button className={style.ButtonAdd} onClick={hendlerUpload}>
              Cancel
            </button>
            <button className={style.ButtonAdd} onClick={hendlerUpload}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
