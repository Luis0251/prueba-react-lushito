import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";


export function useCatFact () {
    const [fact, setFact] = useState('')
    
    // evento un boton al yo darle al boton se refresque la cita
    const refreshFact = () =>{
        getRandomFact().then(newFact => setFact(newFact))
    }

    // recuperar la cita al montar el componente

    useEffect(() => {
        refreshFact()
    }, [])

    return {fact, refreshFact}
}