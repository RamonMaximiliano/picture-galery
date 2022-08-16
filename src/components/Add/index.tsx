import './styles.css'
import {useState} from 'react'

type LoadedPicture = {
    title?:string,
    description?:string,
    picture?:string,
    ID?: string,
}

export const Add = () => {
    const [pict, setPicture] = useState<string>()
    const [title, setTitle] = useState<string>()
    const [description, setDescription] = useState<string>()
    let LoadedPicture:LoadedPicture = {}


function createImage(event:any){
    const image = event.target;
    const file = image.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = function () {
        setPicture(reader?.result?.toString());
    };
}

console.log(pict)
console.log(crypto.randomUUID())

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


function setNewItem(){
    LoadedPicture = {
        title:title,
        description:description,
        picture:pict,
        ID: crypto.randomUUID(),
    }
    

console.log(LoadedPicture)

}

    return (
        
            <div className="main-add-div">
                <h2>Title</h2>
                <input type="text" name="Title" className="Title" onChange={(e) => setTitle(e.target.value)}/>
                <h3>Comment</h3>
                <input type="text" name="Description" className="Description" onChange={(e) => setDescription(e.target.value)}/>
                <input type="file" name="picture" className="picture" onChange={createImage}/>
                <input type="button" value="Add picture" className="Add" onClick={setNewItem}/>
                <p>Preview</p>
                <div>
{/*                     If pict state has something then it will show, otherwise: "Waiting for a picture"
 */}                    {!!pict ? <img src={LoadedPicture.picture} alt="Preview" />: "Waiting for a picture..."}
                </div>
            
            </div>
     )
}






