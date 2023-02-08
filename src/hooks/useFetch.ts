import { useEffect, useState } from "react"
import supabase from '../config/supabaseClient'

export interface itemData {
  id: number,
  itemName: string,
  category: string,
  price: number,
  gender: string,
  size: number | string,
  inStock: boolean
}

export const useFetch = () =>  {
  const [items, setItems] = useState<itemData[]>()
  const [error, setError] = useState<any>()

  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase
        .from("shopitems")
        .select()
      
      if(data){      
        setItems(data)  
        setError(null)
      }
      if(error){
        setError(error)
        console.log(error);  
      }
    }
      fetchItems() 
  }, [])
  
  return { items }
}