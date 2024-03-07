import Dashboard from "../../components/dashboard"
import Email from "./email"


const AsIndividual = () => {
    return (
        <div data-aos="fade-down" data-aos-duration="500">
            <Dashboard params={<Email />} />
        </div>
    )
}

export default AsIndividual