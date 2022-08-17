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
    const { setPicturesArray, PicturesArray } = useContext(PictureContext)
    return (
        <div className="pictures-div">
                {
                    !!PicturesArray ? PicturesArray.map((item: LoadedPicture) =>
                        <div className="pictures-sub-div">
                            <h3>ID</h3>
                            <p>{item.ID}</p>
                            <h3>title</h3>
                            <p>{item.title}</p>
                            <h3>Description</h3>
                            <p>{item.description}</p>
                        </div>) : ''
                }
        </div>
    )
}

