import React from "react";
import { changeLanguage } from "../api/apiCalls";

import { withTranslation } from "react-i18next";

const LanguageSelector = (props) => {
  const onChangeLanguage = (language) => {
    const { i18n } = props;
    i18n.changeLanguage(language);
    changeLanguage(language);
  };
  return (
    <div className="container">
      <img
        onClick={() => onChangeLanguage("tr")}
        style={{ height: 20, width: 25, margin: 3, cursor: "pointer" }}
        src="https://countryflagsapi.com/png/tr"
        alt="Türkce"
      ></img>
      <img
        onClick={() => onChangeLanguage("en")}
        style={{ height: 20, width: 25, margin: 3, cursor: "pointer" }}
        src="https://countryflagsapi.com/png/usa"
        alt="English"
      ></img>
    </div>
  );
};
export default withTranslation()(LanguageSelector);
