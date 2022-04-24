import React, { useState, useEffect, useRef } from 'react'

const productTemplate = {
    id: null,
    name: null,
    price: null
}

const ProductsForm = props => {    

    const refForm = useRef();
    const refName = useRef();
    const refPrice = useRef();

    const [formInfo, setFormInfo] = useState(productTemplate); 
    

    useEffect(() => { 
        if(props.dataToEdit !== null){
            setFormInfo(props.dataToEdit);            
            refName.current.value = props.dataToEdit.name;
            refPrice.current.value = props.dataToEdit.price;
        }

    }, [props.dataToEdit]);



    //Evento al guardar
    const handleSubmit = async e => {
        e.preventDefault();
          
        if(formInfo.name == null || formInfo.price == null)        
            return
        
        if(formInfo.id !== "")
            props.updateData(formInfo);
        
        if(formInfo.id == null)
            props.createData({...formInfo, id : crypto.randomUUID()});

        handleReset();
    }

    //Evento al cambiar input.
    const handleChange = e => {
        
        const { name, value } = e.target;

        setFormInfo(info => {            
            return {
                ...info,
                [name]: value
            }
        });
    }

    const handleReset = e => {
        refForm.current.reset();
        setFormInfo(productTemplate);
        props.setDataToEdit(null);
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} ref={refForm} >
                <div className="row d-flex justify-content-center">
                    <div className='col-md-5'>
                        <div className="form-group">
                            <label htmlFor="name">Nombre: </label>
                            <input type="text" className='form-control' id='name'       
                                name='name' 
                                placeholder='Nombre...' 
                                onChange={handleChange} 
                                ref={refName} 
                            />
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="price">Precio: </label>
                            <input type="text" className='form-control' id='price' 
                                name='price' 
                                placeholder='Precio...' 
                                onChange={handleChange} 
                                ref={refPrice}
                            />
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-md-5 d-flex justify-content-end">
                        <button type='reset' className='btn btn-secondary m-1 btn-sm btn-block '  onClick={handleReset}>Reiniciar</button>
                        <button type='submit' className='btn btn-sm btn-block btn-primary m-1'>Guardar</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default ProductsForm;