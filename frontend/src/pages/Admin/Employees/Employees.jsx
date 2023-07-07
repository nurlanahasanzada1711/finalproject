import React, { useEffect, useState } from 'react'
import { deleteTeams, getAllTeams } from '../../../api/teamrequests'
import style from '../Employees/employees.module.css'
import { Button } from '@mui/material';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';


const Employees = () => {

    const [teams, setTeams] = useState([]);


    useEffect(() => {
        getAllTeams().then((res) => {
            setTeams(res.data);
            console.log(res.data);
        });
    }, []);
    return (
        <>
            <section className={style.teambackground}>
                <div className={style.teamwrites}>
                    <h2><b>MEET OUR CONFECTIONERS</b>​</h2>
                    <h6>The Best Team</h6>
                <Link to='/admin/addemployees'><Button>Add Employees</Button></Link>

                </div>
                <div className='container'>
                    <div className={style.teamflex}>

                        {teams &&
                            teams.map((team) => {
                                return (
                                    <div className={style.team}>
                                        <img src={team.imageURL} alt='' />
                                        <h4>{team.chef}</h4>
                                        <p>{team.desc}</p>
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
                                                        deleteTeams(team._id).then((res) => {
                                                            Swal.fire(
                                                                `Product deleted!`,
                                                                "Your employee has been deleted.",
                                                                "success"
                                                            );
                                                        });
                                                        setTeams(
                                                            teams.filter((x) => x._id !== team._id)
                                                        );
                                                    }
                                                });
                                            }}
                                            variant="outlined"
                                            color="warning"
                                        >
                                            Delete
                                        </Button>
                                        <Link to={`/admin/employees/edit/${team._id}`}><Button style={{ padding: '3% 8%' }}>Edit</Button></Link>
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

export default Employees