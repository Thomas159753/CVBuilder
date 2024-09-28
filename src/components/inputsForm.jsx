import ContactInput from "./contactInput.jsx"; 
import JobInput from "./jobInput.jsx"
import EducationInput from "./educationInput.jsx"
import AddJobBtn from "./add-job-btn.jsx";
import AddEducBtn from "./add-educ-btn.jsx";
import './styles/form.css'

function InputForm ({
    contact,
    setContact,
    jobs,
    setJobs,
    educations,
    setEducation
}){
    return(
        <>
        <form>
            <fieldset>
                <legend>Contact Info</legend>
                    <ContactInput
                        contact={contact}
                        setContact={setContact}
                    ></ContactInput>
            </fieldset>
            <fieldset>
                <legend>Work Experience</legend>
                <JobInput
                    jobs={jobs}
                    setJobs={setJobs}
                ></JobInput>
                <AddJobBtn
                    jobs={jobs}
                    setJobs={setJobs}
                ></AddJobBtn>
            </fieldset>
            <fieldset>
                <legend>Education</legend>
                <EducationInput
                    educations={educations}
                    setEducation={setEducation}
                ></EducationInput>
                <AddEducBtn
                    educations={educations}
                    setEducation={setEducation}
                ></AddEducBtn>
            </fieldset>
        </form>
        </>
    )   
}

export default InputForm