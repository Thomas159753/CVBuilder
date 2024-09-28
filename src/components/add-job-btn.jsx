import Btn from './styles/buttons.module.css'

function AddJobBtn ({jobs, setJobs}){

    function addJob(){
        setJobs([...jobs,{
            id: crypto.randomUUID(),
            title: "",
            company: "",
            description: "",
            start: "",
            end: ""
        }])
    }

    return(
        <>
        <button
        className={Btn.BtnStyle}
        type="button"
        onClick={addJob}
        >Add Another Entry
        </button>
        </>
    )
}

export default AddJobBtn