import React, { useState } from "react";
import s2 from "../../s1-main/App.module.css";
import s from "./HW13.module.css";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import axios from "axios";
import success200 from "./images/200.svg";
import error400 from "./images/400.svg";
import error500 from "./images/500.svg";
import errorUnknown from "./images/error.svg";

/*
 * 1 - дописать функцию send
 * 2 - дизэйблить кнопки пока идёт запрос
 * 3 - сделать стили в соответствии с дизайном
 * */

const HW13 = () => {
  const [code, setCode] = useState("");
  const [text, setText] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const send = (x?: boolean | null) => {
    // явно возвращаем функцию

    const url =
      x === null
        ? "https://xxxxxx.ccc"
        : "https://samurai.it-incubator.io/api/3.0/homework/test";

    setCode("");
    setImage("");
    setText("");
    setInfo("...loading");
    setIsLoading(true);

    axios
      .post(url, { success: x })
      .then((res) => {
        if (res.status === 200) {
          setCode("200");
          setImage(success200);
          setText(res.data?.errorText || "...всё ок)");
          setInfo(
            res.data?.info ||
              "код 200 - обычно означает что скорее всего всё ок)",
          );
        }
      })
      .catch((e) => {
        let errorCode = "Error!";
        let errorImage = errorUnknown;
        let errorText = "Network Error";
        let errorInfo = "Error";

        if (e.response) {
          switch (e.response.status) {
            case 400:
              errorCode = "400";
              errorImage = error400;
              errorText = e.response.data.errorText;
              errorInfo = e.response.data.info;
              break;
            case 500:
              errorCode = "500";
              errorImage = error500;
              errorText = e.response.data.errorText;
              errorInfo = e.response.data.info;
              break;
            default:
              errorText = e.response.statusText;
              errorInfo = "Error";
              break;
          }
        } else {
          errorCode = "Error!";
          errorImage = errorUnknown;
          errorText = "Network Error";
          errorInfo = "Error";
        }

        setCode(errorCode);
        setImage(errorImage);
        setText(errorText);
        setInfo(errorInfo);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div id={"hw13"}>
      <div className={s2.hwTitle}>Homework #13</div>

      <div className={s2.hw}>
        <div className={s.buttonsContainer}>
          <SuperButton
            id={"hw13-send-true"}
            onClick={() => {
              send(true);
            }}
            xType={"secondary"}
            disabled={isLoading}
          >
            Send true
          </SuperButton>
          <SuperButton
            id={"hw13-send-false"}
            onClick={() => {
              send(false);
            }}
            xType={"secondary"}
            disabled={isLoading}
          >
            Send false
          </SuperButton>
          <SuperButton
            id={"hw13-send-undefined"}
            onClick={() => {
              send(undefined);
            }}
            xType={"secondary"}
            disabled={isLoading}
          >
            Send undefined
          </SuperButton>
          <SuperButton
            id={"hw13-send-null"}
            onClick={() => {
              send(null);
            }} // имитация запроса на не корректный адрес
            xType={"secondary"}
            disabled={isLoading}
          >
            Send null
          </SuperButton>
        </div>

        <div className={s.responseContainer}>
          <div className={s.imageContainer}>
            {image && <img src={image} className={s.image} alt="status" />}
          </div>

          <div className={s.textContainer}>
            <div id={"hw13-code"} className={s.code}>
              {code}
            </div>
            <div id={"hw13-text"} className={s.text}>
              {text}
            </div>
            <div id={"hw13-info"} className={s.info}>
              {info}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HW13;
