import { useContext } from "react"
import { TokenContext } from "../components/TokenContext"

const useTokenContext = () => {
    const context = useContext(TokenContext)

    if (context === undefined) {
        throw new Error('useTokenContext was used outside of its Provider')
    }

    return context
}

export default useTokenContext