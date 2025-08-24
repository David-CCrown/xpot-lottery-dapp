import { useContext } from "react"
import { AppContext } from "../lib/constants"

export const useApp = ()=> {
    return useContext(AppContext)
}