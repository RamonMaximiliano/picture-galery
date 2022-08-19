import { PictureContext } from '../../Context/Context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

type LoadedPicture = {
    title?: string,
    description?: string,
    picture?: string,
    ID?: string,
}

export const Galery = () => {
    const { PicturesArray } = useContext(PictureContext)
    console.log(PicturesArray)

    /*     - The params ID, its what is being passed on the Route Link tag on the App.tsx:
        <Route path="/Single/:id" element={<Single />} /> 
        But we can call the id whatever we want.
        
        - Then here in the full array, I am using the link tag to provide the item ID as the variable to go to the ID param in the Route
       */

    return (
        <div className="pictures-div">
            {
                !!PicturesArray ? PicturesArray.map((item: LoadedPicture) =>
                    <Link to={`/Single/${item.ID}`} className="test">
                        <div className="pictures-sub-div">
                            <div>
                                <h3>ID</h3>
                                <p>{item.ID}</p>
                                <h3>Title</h3>
                                <p>{item.title}</p>
                                <h3>Description</h3>
                                <p>{item.description}</p>
                            </div>
                            <img src={item.picture} alt="Waiting..." className="image-div" />
                        </div>
                    </Link>) : ''
            }
        </div>
    )
}

