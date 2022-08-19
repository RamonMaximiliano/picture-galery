import { useParams } from "react-router-dom"
import { PictureContext } from "../../Context/Context"
import { useContext } from "react"
import './styles.css'

type LoadedPicture = {
    title?: string,
    description?: string,
    picture?: string,
    ID?: string,
}

export const Single = () => {
    const params = useParams()
    const { PicturesArray } = useContext(PictureContext)

    /*     
    - The params ID, its what is being passed on the Route Link tag on the App.tsx:
        <Route path="/Single/:id" element={<Single />} /> 
        But we can call the id whatever we want.
      
        - Then, I am getting that info in the single component to filter the array being received from the context, and to filter to the specific item which was clicked   
       The filter is being received in a const, therefore the const has access to all properties from the item being filtered in the filter function   
        
        */

    console.log(params.id)

    const renderItem = PicturesArray.filter((item: LoadedPicture) => {
        return item.ID == params.id
    })
    console.log(renderItem)

    return (

        <div className="fullPicture">
            <div className="fullPicture-sub-div">
                <div>
                    <h3 className="sub-div-title">Id:</h3>
                </div>
                <div>
                    <p>{renderItem[0].ID}</p>
                </div>
            </div>
            <div className="fullPicture-sub-div">
                <div>
                    <h3 className="sub-div-title">Title:</h3>
                </div>
                <div>
                    <p>{renderItem[0].title}</p>
                </div>
            </div>
            <div className="fullPicture-sub-div">
                <div>
                    <h3 className="sub-div-title">Description:</h3>
                </div>
                <div>
                    <p>{renderItem[0].description}</p>
                </div>
            </div>
            <img src={renderItem[0].picture} alt="There was an error with your picture..." />

        </div>

    )
}
