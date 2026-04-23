import Grogu_Profile_Pic from "/public/Grogu_Profile_Pic.webp";
import '../styles/haugen.css'

export default function Haugen() {
    return(
        <article className="haugen-card">
            <img src={Grogu_Profile_Pic} alt="Bilde av Grogu" />

            <h2>Eskil P. Haugen</h2>

            <a href="mailto:eskilph@hiof.no">eskilph@hiof.no</a>
            <p>Informasjonssystemer</p>
        </article>
    )
}