import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import style from '../AddServices/services.module.css'
import icon from '../../../images/icon.png'
import { getAllServices, deleteServices } from '../../../api/servicesrequests'
import Swal from "sweetalert2";
import { Button } from '@mui/material'


const AddServices = () => {

  const [services, setServices] = useState([]);
  useEffect(() => {
    getAllServices().then((res) => {
      setServices(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <section className={style.sect2}>
        <img src={icon} alt='' />
        <h2>FRESH SERVICES</h2>
        <h6>The Best Of Our Services</h6>
      </section>

      <section>
        <div className='container'>
          <div className={style.freshservices}>
            {services &&
              services.map((service) => {
                return (
                  <div key={service._id} className={style.cakecrud}>
                    <img src={service.imageURL} alt='' />
                    <h2>{service.desc}</h2>
                    <p>{service.about}</p>
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
                            deleteServices(service._id).then((res) => {
                              Swal.fire(
                                `${res.name} Deleted!`,
                                "Your service has been deleted.",
                                "success"
                              );
                            });
                            setServices(
                              services.filter((x) => x._id !== service._id)
                            );
                          }
                        });
                      }}
                      variant="outlined"
                      color="warning"
                    >
                      Delete
                    </Button>
                    <button>Edit</button>
                  </div>
                )
              }
              )}
          </div>
        </div>
      </section>
    </>
  )
}

export default AddServices