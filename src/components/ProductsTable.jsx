import React from "react";
import ProductsTableRow from "./ProductsTableRow";

const ProducutsTable = props => {

    const { db } = props;
        
    return (        
        <div className="row d-flex justify-content-center mt-5">
            <div className="col-md-5 table-responsive">
                <table className="table table-sm table-dark table-bordered table-hover ">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {db.length > 0 ? 
                            db.map(product => {
                                return(
                                    <ProductsTableRow
                                        key={product.id}
                                        product={product}
                                        setDataToEdit={props.setDataToEdit}
                                        deleteData={props.deleteData}
                                    />
                                )
                            })
                        :
                            <tr>
                                <td colSpan="3" className="text-center">
                                    No hay información.
                                </td>
                            </tr>
                        }
                    </tbody> 
                </table>
            </div>
        </div>
    );
}

export default ProducutsTable;