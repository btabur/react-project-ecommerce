import {createContext, useState} from 'react';


//!context yapısının temelini oluşturma
export const BasketContext =createContext();

//! Sağlayıcı ve onun tuttuğu verileri tanımlama
export function BasketProvidor({children}) {
    const [basket,setBasket] = useState([]);

    const addToBasket =(product)=> {

     const found = basket.find((item) => item.id === product.id);
     if(found) {
        //aynı elemandan daha önce baskete eklendi ise
        //mount değeri bir artırılır
        const updated = {...found,amount:found.amount + 1}

        //dizi güncellenir
        const newBasket = basket.map((item) => item.id===updated.id ? updated:item)

        setBasket(newBasket)
     }else {
        setBasket(basket.concat({...product,amount:1})) 
        
     }
     // setBasket([...basket,product])
    //şeklinde yeni bir üründe ekleyebiliriz. concat yeni bir dizi oluşturduğu için kullandık. 
    //push metodunda ise sona bir eleman ekler ama state lerde satate i doğrudan değiştirmememiz lazım
    

    };

    const removeFromBasket = (deleteId) => {

        const found = basket.find(item => item.id===deleteId)

        if(found.amount>1) {

            const updated = {...found,amount:found.amount - 1}

            //dizi güncellenir
            const newBasket = basket.map((item) => item.id===updated.id ? updated:item)
    
            setBasket(newBasket)

        }else {
            const filtered = basket.filter(item=> item.id !=deleteId)
            setBasket(filtered)
        }

    }



    return (
        //tuttuğumuz verileri uygulamaya aktarmaya yarar
        <BasketContext.Provider 
        value={{basket,addToBasket,removeFromBasket}}>
            {/* children şu an app.jsx */}
            {children}
        </BasketContext.Provider>
    )
}