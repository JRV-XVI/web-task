import { memo } from 'react'

const ChildA = memo((props) => {
    return (
        console.log("Soy el hijo A que recuerda cuando se cambia")
    )
})

export default ChildA