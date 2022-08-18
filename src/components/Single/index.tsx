import {useParams} from 'react-router-dom'

export const Single = () => {
    const params = useParams()

    return (
        
            <div>
                <p>{JSON.stringify(params)}</p>
                <p>{JSON.stringify(params.title)}</p>
                    
            </div>
            
     )
}
