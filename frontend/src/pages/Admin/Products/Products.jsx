import React, { useEffect, useState } from 'react'
import { deleteProducts, getAllProducts } from '../../../api/productrequests'
import icon5 from '../../../images/icon-5.png'
import style from '../Products/products.module.css'
import Swal from "sweetalert2";
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllProducts().then((res) => {
            setProducts(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <>

            <section className={style.care}>
                <img src={icon5} alt='' />
                <h2>BAKERY CARE</h2>
                <h6>A Few Of Our Favourite Things</h6>
                <Link to='/admin/addproducts'><Button>Add Products</Button></Link>
                <div className='container'>
                    <div className={style.productrow}>
                        <div className={style.productcrud}>
                            {products &&
                                products.map((product) => {
                                    return (
                                        <div className={style.productcards}>
                                            <img src={product.imageURL} alt='' />
                                            <h3>{product.desc}</h3>
                                            <h5>{product.price}</h5>

                                            <Button
                                                onClick={() => {
                                                    Swal.fire({
                                                        title: "Are you sure?",
                                                        text: "You won't be able to revert this!",
                                                        icon: "warning",
                                                        showCancelButton: true,
                                                        confirmButtonColor: "#3085d6",
                                                        cancelButtonColor: "#d33",
                                                        confirmButtonText: "Yes, delete it!",
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            deleteProducts(product._id).then((res) => {
                                                                Swal.fire(
                                                                    ` Deleted!`,
                                                                    "Your product has been deleted.",
                                                                    "success"
                                                                );
                                                            });
                                                            setProducts(
                                                                products.filter((x) => x._id !== product._id)
                                                            );
                                                        }
                                                    });
                                                }}
                                                variant="outlined"
                                                color="warning"
                                            >
                                                Delete
                                            </Button>
                                            <Link to='/admin/editproducts'><Button style={{ padding: '4% 8%' }}>Edit</Button></Link>

                                        </div>
                                    )
                                }
                                )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products