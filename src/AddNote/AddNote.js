import React from 'react'
import ApiContext from '../ApiContext'
import config from '../config'

class AddNote extends React.Component{
    static defaultProps = {AddNote: () => {}}
    static contextType = ApiContext

    validateNote=()=>{
        let newNoteName= this.noteInput.current.value.trim()
        if(newNoteName.length === 0){
            throw new Error("Gotta name the note!");
            }
    }

    handleNoteAdd=(event)=>{
        event.preventDefault()
        // const newDate= newDate().toISOString()

        


        const newNote= {
               name: this.noteInput.current.value,
            //    modified: newDate,
               content: this.messageInput.current.value,
               folderId: this.optionSelect.current.value ,
            }

        console.log(newNote)

        try {
            this.validateNote();
            fetch(`${config.API_ENDPOINT}/notes`, {

                method:'POST',
                body: JSON.stringify(newNote),
                headers:{'content-type': 'application/json'},
                
                })
            .then(res=> {
                if(!res.ok){
                    return res.json().then(error=> {
                        throw error
                    })
            }
            return res.json()
         } )
    
            .then(data => {
                this.noteInput.current.value= ''
        
                this.messageInput.current.value= ''
    
                this.context.addNote(data);
    
            })
    
            .catch(error => {console.error('nice try!', {error})})

        } catch (e) {
            return alert(e);
        }
        

        


    }
    constructor(props){
        super(props);
        this.noteInput=React.createRef()
        this.messageInput=React.createRef()
        this.optionSelect=React.createRef()
    }

    render(){
        const newNoteFolder = this.context.folders.map(el => {
            return(
                <option value= {el.id}> {el.name}</option>
        )
    })
        
        return(
        <div className='add-note-container'>
            <form className='add-note-form' onSubmit={e => this.handleNoteAdd(e)}>
                <h2 className='add-note-title' style={{color: 'wheat'}}>Note Name</h2>
                <label htmlFor='folder-dropdown-select'></label>
                <select ref={this.optionSelect}>
                    {newNoteFolder}
                </select>  
                <label htmlFor='add-note-name'></label>
                <input type='text' id='add-note-name' ref={this.noteInput}  placeholder='Input note name here!'></input>
                <label htmlFor='add-note-submit' ></label>
               
                <br/>
                <input type = 'message' id="add-note-message" ref={this.messageInput} style={{height: '100px', width: '350px'}} placeholder ='Input note description here!'></input>
                <br/>
                <button type='submit' id='add-note-submit'>Submit</button>
            </form>
        </div>
        )
    }
}

export default AddNote