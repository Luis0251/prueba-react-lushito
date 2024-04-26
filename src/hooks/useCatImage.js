import { useEffect, useState } from "react";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com/"

export function useCatImage({ fact }){
    const [imageUrl, setImageUrl] = useState('')

    // recuperar la imagen cada vez que tenemos una cita nueva
    useEffect(() => {
        if (!fact) return
        const factWords = fact.split(' ', 3).join(' ')
        fetch(`https://cataas.com/cat/says/${factWords}?size=50color=black&json=true`)
        .then(response => response.json())
        .then(data => {
            const {_id} = data
            const url = `/cat/${_id}/says/${factWords}`
            setImageUrl(url)
        })
    }, [fact])

    return {imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
}