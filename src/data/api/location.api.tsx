import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/example/hooks"
import { getProductApi } from "../../redux/reducer/productReducer"

const dispatch = useAppDispatch()
const {arrProduct} = useAppSelector((state) => state.productReducer)
useEffect(() =>{
    dispatch(getProductApi())
},[])
export const arrLocationApi = arrProduct