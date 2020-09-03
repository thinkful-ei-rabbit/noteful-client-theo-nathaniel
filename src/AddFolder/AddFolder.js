import React from 'react';

class AddFolder extends React.Component {
    handleFolderAdd(event){
        event.preventDefault();
        const newFolder = this.folderInput.current.value;
        console.log(newFolder);
        //fetch post newFolder and check if api auto generates Id, if not add own id
    }
    constructor(props){
        super(props);
        this.folderInput = React.createRef();
    }
    render(){
        return <div className='add-folder-container'>
            <form className='add-folder-form' onSubmit={e => this.handleFolderAdd(e)}>
                <h2 className='add-folder-title'>Folder Name</h2>
                <label htmlFor='add-folder-name'></label>
                <input type='text' id='add-folder-name' ref={this.folderInput} placeholder='Input folder name here.'></input>
                <label htmlFor='add-folder-submit'></label>
                <button type='submit' id='add-folder-submit'>Submit</button>
            </form>
        </div>
    }

}

export default AddFolder;