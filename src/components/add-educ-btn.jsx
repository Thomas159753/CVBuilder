import Btn from './styles/buttons.module.css'

function AddEducBtn ({educations, setEducation}){

    function addEduc (){
        setEducation([...educations,{
            id: crypto.randomUUID(),
            title: "",
            university: "",
            start: "",
            end: ""
        }])
    }

    return(
        <>
        <button
        className={Btn.BtnStyle}
        type="button"
        onClick={addEduc}
        >Add Another Entry   
        </button>
        </>
    )
}

export default AddEducBtn