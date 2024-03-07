import Dashboard from "../../components/dashboard"
import SignupComponent from "./signup"
import React from "react"

const Signup = () => {
    return (
        <div data-aos="fade-down" data-aos-duration="500">
            <Dashboard params={<SignupComponent />} />
        </div>
    )
}

export default Signup