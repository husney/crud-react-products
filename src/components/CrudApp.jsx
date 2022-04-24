import React, {useState} from "react";
import ProductsForm from "./ProductsForm";
import ProducutsTable from "./ProductsTable";

const CrudApp = props => {

    const store = 'products-storage';

    const [ db, setDb] = useState(
        localStorage.getItem(store)?.length > 0 ?
            JSON.parse(localStorage.getItem(store)) :
            []
    );

    const [ dataToEdit,  setDataToEdit] = useState(null);

    const createData = data => {
        //Se agrega la información al local storage.
        if(localStorage.getItem(store)){
            let dataStore = JSON.parse(localStorage.getItem(store));
            dataStore.push(data);            
            setDb(dataStore);
            localStorage.setItem(store, JSON.stringify(dataStore));

        }else{
            localStorage.setItem(store, JSON.stringify([{...data}]));
        }
    }

    const updateData = (data) => {        
        let newData = JSON.parse(localStorage.getItem(store)).map(producto => {
            if(producto.id === data.id){
                producto = data;
            }
            return producto;
        });
        
        setDb(newData);
        localStorage.setItem(store, JSON.stringify(newData));

    }

    const deletedData = (id) => {
        let newData = JSON.parse(localStorage.getItem(store)).filter(x => x.id !== id);
        setDb(newData);
        localStorage.setItem(store, JSON.stringify(newData));
    }

    return(
        <>
           <ProductsForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
            />
           <ProducutsTable 
                db={db}
                setDataToEdit={setDataToEdit}
                deleteData={deletedData}
           />
        </>
    );
};

export default CrudApp;