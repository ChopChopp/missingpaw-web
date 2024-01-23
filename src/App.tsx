import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import logo from './missingPawLogo.png';
import './App.css';
import './i18n';

const LANGUAGES = [
    {label: "English", code: "en"},
    {label: "German", code: "de"}
];

function App() {
    const {i18n, t} = useTranslation();

    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    };

    return (
        <div className={"App"}>
            <div className={"select"}>
                <select defaultValue={i18n.language} onChange={onChangeLang}>
                    {LANGUAGES.map(({code, label}) => (
                        <option key={code} value={code}>
                            {label}
                        </option>
                    ))}
                </select>
            </div>

            <div className={"imgContainer"}>
                <img src={logo} className="App-logo" alt="MissingPaw-logo"/>
                <h2 className="text">{t("title")}</h2>
            </div>
            <div className="paragraph">
                <p>{t("subtitle")}</p>

                <p><strong>{t("scope_and_subject_title")}</strong><br/>
                    {t("scope_and_subject")}</p>

                <p><strong>{t("description_of_app_functions_title")}</strong><br/>
                    {t("description_of_app_functions")}</p>

                <p><strong>{t("anonymity_and_release_of_missing_posters_title")}</strong><br/>
                    {t("anonymity_and_release_of_missing_posters")}</p>

                <p><strong>{t("public_reports_and_sightings_title")}</strong><br/>
                    {t("public_reports_and_sightings")}</p>

                <p><strong>{t("free_use_and_sales_ban_title")}</strong><br/>
                    {t("free_use_and_sales_ban")}</p>

                <p><strong>{t("data_protection_and_use_of_data_title")}</strong><br/>
                    {t("data_protection_and_use_of_data")}</p>

                <p><strong>{t("disclaimer_title")}</strong><br/>
                    {t("disclaimer")}</p>

                <p><strong>{t("changes_to_the_terms_and_conditions_title")}</strong><br/>
                    {t("changes_to_the_terms_and_conditions")}</p>

                <p><strong>{t("changes_to_personal_data_title")}</strong><br/>
                    {t("changes_to_personal_data")}</p>

                <p><strong>{t("final_provisions_title")}</strong><br/>
                    {t("final_provisions")}</p>
            </div>

        </div>
    );
}

export default App;
