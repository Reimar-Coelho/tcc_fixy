import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddNote() {

    const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/notes`;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const navigate = useNavigate();

    const addNote = async(e) => {
        e.preventDefault();

        try{
            const response = await fetch(baseUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title, description
                }),
            })

            if(response.ok) {
                setSubmitted(true)
                setTimeout(() => {setSubmitted(false); navigate("/notes")}, 2000);
            }
            else {
                console.log("Failed to submit data.")
            }

        } catch(error){
            console.log(error); 
        }
    }

  return (
    <div className="text-white">
        <Link to="/notes" className='back-button'>👈back</Link>
        <form onSubmit={addNote}>
            <div className="single-note">
                <div>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' className='title text-black'/>
                </div>
                <div>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' rows='4' cols='50' className='description text-black'></textarea>
                </div>
            </div>
            <input type="submit" value={submitted ? "Saving note..." : "💾 Add note"} disabled={submitted}/>
            <p className='text-center'>
                {submitted && <div className='succes-message'>Note has been added!</div>}
            </p>
        </form>
    </div>
  )
}
