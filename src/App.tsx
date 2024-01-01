import React from 'react';
import './App.css';
import logo from './missingPawLogo.png';

function App() {
    return (
        <div className={"App"}>
            <div className={"imgContainer"}>
                <img src={logo} className="App-logo" alt="MissingPaw-logo"/>
                <h2 className="text">AGB</h2>
            </div>
            <div className="paragraph">
                <p>Allgemeine Geschäftsbedingungen (AGB) für die Nutzung der "Missing Paw" Applikation</p>

                <p><strong>1. Geltungsbereich und Vertragsgegenstand</strong><br/>
                    Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") regeln die Nutzung der "Missing Paw"
                    Applikation (nachfolgend "App") durch die Nutzer. Die App wird von Umut Öztürk und Simao Duarte
                    (Freiherrenstrasse 4, 8820, Wädenswil, Schweiz) bereitgestellt.</p>

                <p><strong>2. Beschreibung der App-Funktionen</strong><br/>
                    Die "Missing Paw" App dient den Nutzern als digitales Vermisstenplakat für vermisste Tiere. Die
                    Nutzer haben die Möglichkeit, ein Profil für ein vermisstes Tier zu erstellen, das Name, Alter, Bild
                    des Tieres sowie Informationen zur Umgebung, in der das Tier verloren ging, enthält.</p>

                <p><strong>3. Anonymität und Freigabe von Vermisstenplakaten</strong><br/>
                    Jedes Vermisstenplakat ist zunächst anonym. Die Freigabe und die damit zugrunde liegende
                    Bereitstellung der vorgelegten Daten für andere Nutzer erfolgt erst dann, wenn der Nutzer das Tier
                    offiziell als vermisst angibt.</p>

                <p><strong>4. Öffentliche Anzeigen und Sichtungen</strong><br/>
                    Wenn das Vermisstenplakat zur Freigabe öffentlich geschalten wird, können andere Nutzer auf der
                    Hauptseite der App alle Vermisstenanzeigen einsehen. Nutzer haben die Möglichkeit zu melden, dass
                    sie ein vermisstes Tier gesichtet haben. Dabei können sie eine kleine Notiz schreiben, um
                    zusätzliche Informationen bereitzustellen. Die genannte Notiz ist nur für den Eigentümer des
                    Vermisstenplakat ersichtlich.</p>

                <p><strong>5. Kostenfreie Nutzung und Verkaufsverbot</strong><br/>
                    Die App bietet einen vollumfänglich unentgeltlichen Service im Rahmen ihrer Tätigkeit an.</p>

                <p><strong>6. Datenschutz und Datenverwendung</strong><br/>
                    Die in der App eingegebenen Daten werden auf einer Datenbank von Firebase gespeichert. Diese Daten
                    werden ausschließlich im Kontext der Applikation für die Profilerstellung und die Kommunikation
                    innerhalb der App genutzt. Die Personendaten auf der Datenbank werden von Google unter ihren eigenen
                    Bestimmungen gehandhabt (AGB Firebase). Es werden geeignete technische und organisatorische
                    Massnahmen vorgenommen, um die Daten sicher zu lagern und verwalten.</p>

                <p><strong>7. Haftungsausschluss</strong><br/>
                    Die Nutzung der App erfolgt auf eigenes Risiko. Die Betreiberin haftet nur für absichtlich und
                    grobfahrlässig verursachte Schäden, bei Personenschäden auch im Falle leichter Fahrlässigkeit. Eine
                    weitergehende Haftung auch für indirekte Schäden, entgangener Gewinn, Datenverlust und Folgeschäden
                    ist - soweit gesetzlich zulässig - ausgeschlossen.</p>

                <p><strong>8. Änderungen der AGB</strong><br/>
                    Der Anbieter behält sich das Recht vor, diese AGB jederzeit zu ändern. Die Nutzer werden über
                    Änderungen rechtzeitig informiert.</p>

                <p><strong>9. Änderung der Personendaten</strong><br/>
                    Der Nutzer behält sich das Recht vor, die eigenen Angaben nach Art. 32 DSG und Art. 12-23 DSGVO
                    anzupassen.</p>

                <p><strong>10. Schlussbestimmungen</strong><br/>
                    Es gilt schweizerisches Recht. Gerichtsstand ist Zürich, Schweiz. Sollten einzelne Bestimmungen
                    dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon
                    unberührt.</p>
            </div>

        </div>
    );
}

export default App;
