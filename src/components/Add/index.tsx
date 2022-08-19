import './styles.css'
import { useContext } from 'react'
import { PictureContext } from '../../Context/Context'

export const Add = () => {
    const {setTitle, setDescription, createImage, LoadedPicture, setNewItem,title,description,pict } = useContext(PictureContext)

    return (
        <div className="main-add-div">
            <h2>Title</h2>
            <input type="text" name="Title" className="Title" onChange={(e) => setTitle(e.target.value)} value={title}/>
            <h3>Comment</h3>
            <input type="text" name="Description" className="Description" onChange={(e) => setDescription(e.target.value)} value={description}/>
            <input type="file" name="picture" className="picture" onChange={createImage} />
            <input type="button" value="Add picture" className="Add" onClick={setNewItem} />
            <p className="preview">Preview</p>
            <div className="preview-image">
                <h3>Title:</h3>
                {LoadedPicture.title}
                <h3>Description:</h3>
                {LoadedPicture.description}
                <h3>ID:</h3>
                {LoadedPicture.ID}
                <h3>Picture:</h3>
                {!!LoadedPicture.picture ? <img src={LoadedPicture.picture} alt="Waiting..." /> : "Waiting for a picture..."}
            </div>
        </div>
    )
}

/*
ABOUT THE ABOVE QUESTION MARKS:
The question mark dot (?.) syntax is called optional chaining in TypeScript.
This approach is commonly used when fetching data from a remote API or reading data from a file, where some of the properties might not have a value.
 
"reader.onloadend = function () {
    setPicture(reader?.result?.toString());
};"
 
 
RANDOM UUID:
To create random Unique IDs:
console.log(crypto.randomUUID())
 
*/


