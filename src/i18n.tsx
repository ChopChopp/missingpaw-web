import i18n from "i18next";
import {initReactI18next} from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            de: {
                translation: {
                    title: 'Allgemeine Geschäftsbedingungen',
                    subtitle: 'Allgemeine Geschäftsbedingungen (AGB) für die Nutzung der "Missing Paw" Applikation',
                    scope_and_subject_title: '1 Geltungsbereich und Vertragsgegenstand',
                    scope_and_subject: 'Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") regeln die Nutzung der "Missing Paw" Applikation (nachfolgend "App") durch die Nutzer. Die App wird von Umut Öztürk und Simao Duarte (Freiherrenstrasse 4, 8820, Wädenswil, Schweiz) bereitgestellt.',
                    description_of_app_functions_title: '2 Beschreibung der App-Funktionen',
                    description_of_app_functions: 'Die "Missing Paw" App dient den Nutzern als digitales Vermisstenplakat für vermisste Tiere. Die Nutzer haben die Möglichkeit, ein Profil für ein vermisstes Tier zu erstellen, das Name, Alter, Bild des Tieres sowie Informationen zur Umgebung, in der das Tier verloren ging, enthält.',
                    anonymity_and_release_of_missing_posters_title: '3 Anonymität und Freigabe von Vermisstenplakaten',
                    anonymity_and_release_of_missing_posters: 'Jedes Vermisstenplakat ist zunächst anonym. Die Freigabe und die damit zugrunde liegende Bereitstellung der vorgelegten Daten für andere Nutzer erfolgt erst dann, wenn der Nutzer das Tier offiziell als vermisst angibt.',
                    public_reports_and_sightings_title: '4 Öffentliche Anzeigen und Sichtungen',
                    public_reports_and_sightings: 'Wenn das Vermisstenplakat zur Freigabe öffentlich geschalten wird, können andere Nutzer auf der Hauptseite der App alle Vermisstenanzeigen einsehen. Nutzer haben die Möglichkeit zu melden, dass sie ein vermisstes Tier gesichtet haben. Dabei können sie eine kleine Notiz schreiben, um zusätzliche Informationen bereitzustellen. Die genannte Notiz ist nur für den Eigentümer des Vermisstenplakat ersichtlich.',
                    free_use_and_sales_ban_title: '5 Kostenfreie Nutzung und Verkaufsverbot',
                    free_use_and_sales_ban: 'Die App bietet einen vollumfänglich unentgeltlichen Service im Rahmen ihrer Tätigkeit an.',
                    data_protection_and_use_of_data_title: '6 Datenschutz und Datenverwendung',
                    data_protection_and_use_of_data: 'Die in der App eingegebenen Daten werden auf einer Datenbank von Firebase gespeichert. Diese Daten werden ausschließlich im Kontext der Applikation für die Profilerstellung und die Kommunikation innerhalb der App genutzt. Die Personendaten auf der Datenbank werden von Google unter ihren eigenen Bestimmungen gehandhabt (AGB Firebase). Es werden geeignete technische und organisatorische Massnahmen vorgenommen, um die Daten sicher zu lagern und verwalten.',
                    disclaimer_title: '7 Haftungsausschluss',
                    disclaimer: 'Die Nutzung der App erfolgt auf eigenes Risiko. Die Betreiberin haftet nur für absichtlich und grobfahrlässig verursachte Schäden, bei Personenschäden auch im Falle leichter Fahrlässigkeit. Eine weitergehende Haftung auch für indirekte Schäden, entgangener Gewinn, Datenverlust und Folgeschäden ist - soweit gesetzlich zulässig - ausgeschlossen.',
                    changes_to_the_terms_and_conditions_title: '8 Änderungen der AGB',
                    changes_to_the_terms_and_conditions: 'Der Anbieter behält sich das Recht vor, diese AGB jederzeit zu ändern. Die Nutzer werden über Änderungen rechtzeitig informiert.',
                    changes_to_personal_data_title: '9 Änderung der Personendaten',
                    changes_to_personal_data: 'Der Nutzer behält sich das Recht vor, die eigenen Angaben nach Art. 32 DSG und Art. 12-23 DSGVO anzupassen.',
                    final_provisions_title: '10 Schlussbestimmungen',
                    final_provisions: 'Es gilt schweizerisches Recht. Gerichtsstand ist Zürich, Schweiz. Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt.',
                    support: 'Für Unterstützung bitte kontaktieren Sie uns unter folgender Mail Adresse info.missingpaw@gmail.com',
                }
            },
            en: {
                translation: {
                    title: 'General terms and conditions',
                    subtitle: 'General Terms and Conditions (GTC) for the use of the "Missing Paw" application',
                    scope_and_subject_title: '1 Scope of application and subject matter of the contract',
                    scope_and_subject: 'These General Terms and Conditions (hereinafter "GTC") govern the use of the "Missing Paw" application (hereinafter "App") by users. The App is provided by Umut Öztürk and Simao Duarte (Freiherrenstrasse 4, 8820, Wädenswil, Switzerland).',
                    description_of_app_functions_title: '2 Description of the app functions',
                    description_of_app_functions: 'The "Missing Paw" app serves users as a digital missing poster for missing animals. Users have the possibility to create a profile for a missing animal, which contains name, age, picture of the animal as well as information about the environment in which the animal was lost.',
                    anonymity_and_release_of_missing_posters_title: '3 Anonymity and release of missing posters',
                    anonymity_and_release_of_missing_posters: 'Each missing animal poster is initially anonymous. The release and the underlying provision of the submitted data for other users only takes place when the user officially reports the animal as missing.',
                    public_reports_and_sightings_title: '4 Public reports and sightings',
                    public_reports_and_sightings: 'If the missing animal poster is made public for release, other users can view all missing animal reports on the main page of the app. Users have the option to report that they have spotted a missing animal. They can write a small note to provide additional information. This note is only visible to the owner of the missing animal poster.',
                    free_use_and_sales_ban_title: '5 Free use and prohibition of sale',
                    free_use_and_sales_ban: 'The app offers a completely free service as part of its activities.',
                    data_protection_and_use_of_data_title: '6 Data protection and use of data',
                    data_protection_and_use_of_data: 'The data entered in the app is stored in a Firebase database. This data is used exclusively in the context of the application for profiling and communication within the app. The personal data in the database is handled by Google under its own provisions (Firebase GTC). Appropriate technical and organizational measures are taken to store and manage the data securely.',
                    disclaimer_title: '7 Disclaimer',
                    disclaimer: 'Use of the app is at your own risk. The operator is only liable for damage caused intentionally or by gross negligence, in the case of personal injury also in the event of slight negligence. Any further liability, including for indirect damage, loss of profit, loss of data and consequential damage, is excluded to the extent permitted by law.',
                    changes_to_the_terms_and_conditions_title: '8 Changes to the terms and conditions',
                    changes_to_the_terms_and_conditions: 'The provider reserves the right to change these terms and conditions at any time. Users will be informed of any changes in a timely manner.',
                    changes_to_personal_data_title: '9 Changes to personal data',
                    changes_to_personal_data: 'The User reserves the right to change his/her personal data in accordance with Art. 32 DSG and Art. 12-23 DSGVO.',
                    final_provisions_title: '10 Final provisions',
                    final_provisions: 'Swiss law applies. The place of jurisdiction is Zurich, Switzerland. Should any provision of these terms and conditions be or become invalid, this shall not affect the validity of the remaining provisions.',
                    support: 'For support, please contact us at info.missingpaw@gmail.com',
                }
            },
        }
    });

export default i18n;