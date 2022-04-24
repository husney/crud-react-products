import React from "react";

const ProductsTableRow = props => {

    const { product } = props;

    return(
        <tr data-id={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <div className="d-flex justify-content-evenly">
                    <button className="btn btn-sm btn-success" type="button" onClick={ e => {                        
                        props.setDataToEdit(product);
                    }}>
                        Actualizar
                    </button>
                    <button className="btn btn-sm btn-danger" type="button" onClick={e => {                        
                        props.deleteData(product.id);
                    }}>
                        Eliminar
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default ProductsTableRow;