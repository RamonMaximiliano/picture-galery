import './styles.css'

export const Add = () => {
    return (
        
            <div className="main-add-div">
                <h2>Title</h2>
                <input type="text" name="Title" className="Title"/>
                <h3>Comment</h3>
                <input type="text" name="Description" className="Description"/>
                <input type="file" name="picture" className="picture"/>
                <input type="button" value="Add picture" className="Add"/>
            
            </div>
     )
}




