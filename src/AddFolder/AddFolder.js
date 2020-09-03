import React from 'react';
import ApiContext from '../ApiContext'
import config from '../config'

class AddFolder extends React.Component {
    static defaultProps ={ 
        addFolder: () => {} 
    }
    static contextType = ApiContext;

    validateFolder=(folder)=>{
        let newFolder= this.folderInput.current.value.trim()
        if(newFolder.length === 0){
            return alert("Gotta name the folder!")
            
        }
    }


    handleFolderAdd(event){
        event.preventDefault();
        const newFolder = {name: this.folderInput.current.value};
        console.log("newFolder",newFolder);

        //fetch post newFolder and check if api auto generates Id, if not add own id

        fetch(`${config.API_ENDPOINT}/folders`,
        {

        method:'POST',
        body: JSON.stringify(newFolder),
        headers:{'content-type': 'application/json'},
        
        })
        .then(res=>{
            if(!res.ok)
                return res.json().then(e => Promise.reject(e));
        
        return res.json()
        })
        .then(data => {
            this.folderInput.current.value=''
            // this.props.AddFolder(newFolder)
        
        })

        .catch(error=>{
            console.error("nice try!",{error})
        })
 
    }
    constructor(props){
        super(props);
        this.folderInput = React.createRef();
    }
    render(){
        return <div className='add-folder-container'>
            <form className='add-folder-form' onSubmit={e => this.handleFolderAdd(e)}>
                <h2 className='add-folder-title' style={{color: 'wheat'}}>Folder Name</h2>
                <label htmlFor='add-folder-name'></label>
                <input type='text' id='add-folder-name' ref={this.folderInput} placeholder='Input folder name here.'></input>
                <label htmlFor='add-folder-submit'></label>
                <button type='submit' id='add-folder-submit'>Submit</button>
            </form>
        </div>
    }

}

export default AddFolder;