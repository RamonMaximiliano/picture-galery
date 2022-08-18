import { PictureContext } from '../../Context/Context'
import { useContext } from 'react'
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
    return (
        <div className="pictures-div">
            {
                !!PicturesArray ? PicturesArray.map((item: LoadedPicture) =>
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
                    </div>) : ''
            }
        </div>
    )
}

