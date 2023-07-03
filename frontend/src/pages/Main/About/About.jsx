import React, { useEffect, useState } from 'react'
import style from '../About/about.module.css'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { getAllAbouts } from '../../../api/aboutrequests'
import { getAllNumbers } from '../../../api/numbersrequests'
import { getAllTeams } from '../../../api/teamrequests'




const About = () => {
  const [expanded, setExpanded] = React.useState('panel1');
  const [numbers, setNumbers] = useState([]);
  const [abouts, setAbouts] = useState([]);
  const [teams, setTeams] = useState([]);


  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    getAllAbouts().then((res) => {
      setAbouts(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    getAllNumbers().then((res) => {
      setNumbers(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    getAllTeams().then((res) => {
      setTeams(res.data);
      console.log(res.data);
    });
  }, []);

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

  return (
    <main>
      <section className={style.about}>
        <div className={style.aboutwrite}>
          <h1>ABOUT</h1>
          <span>Amazing Bakery Kit</span>
          <p>Di Cantina Valpolicella Negrar è la storia di uomini e donne dediti alla Nullam dui
            <br></br> dolor, sagittis ut ante eget Aliquam erat volutpat. Vivamus tincidunt justo in eros
            <br></br> cursus, et viverra elit dignissim. Nulla facilisi</p>
        </div>
      </section>

      {abouts &&
        abouts.map((about) => {
          return (
            <section className={style.besthistory}>
              <img src={about.imageURL} alt='' />
              <h2><b>THE BEST OF HISTORY</b>​</h2>
              <h6>Love Story From Blog</h6>
              <p>{about.desc}</p>
              <p>{about.author}</p>
              <p>{about.about}</p>
            </section>
          )
        }
        )}

      <section className='numbers'>
        <div className='container'>
          <div className={style.numbers}>
            {numbers &&
              numbers.map((number) => {
                return (
                  <div key={number._id} className={style.pastry}>
                    <h1>{number.count}</h1>
                    <p>{number.desc}</p>
                  </div>
                )
              }
              )}
          </div>
        </div>
      </section>

      <section className={style.teambackground}>
        <div className={style.teamwrites}>
          <h2><b>MEET OUR CONFECTIONERS</b>​</h2>
          <h6>The Best Team</h6>
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
                  </div>
                )
              }
              )}

          </div>
        </div>
      </section>

      <section className={style.accardions}>
        <div className={style.working}>
          <h2>WORKING PROCESS</h2>
          <h3>What We Do</h3>
        </div>
        <div className={style.accardion}>
          <h3>HOW WE DO YOUR WORK</h3>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>ORDER RECEPTION</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Cras in semper ex. Mauris tincidunt purus blandit arcu ullamcorper finibus. Aliquam a iaculis est, eu vehicula elit. Vestibulum urna magna, varius in sollicitudin tincidunt, sollicitudin Etiam posuere semper tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque lacus , id luctus dui risus nec enim.
                Nullam nulla eros, hendrerit vel egestas ac, bibendum tempus dolor. Proin a pulvinar ex. Duis volutpat ipsum nunc. Cras diam neque, rutrum nec quam ac, egestas porttitor lectus.

              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography>ORDER RECEPTION</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Cras in semper ex. Mauris tincidunt purus blandit arcu ullamcorper finibus. Aliquam a iaculis est, eu vehicula elit. Vestibulum urna magna, varius in sollicitudin tincidunt, sollicitudin Etiam posuere semper tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque lacus , id luctus dui risus nec enim.
                Nullam nulla eros, hendrerit vel egestas ac, bibendum tempus dolor. Proin a pulvinar ex. Duis volutpat ipsum nunc. Cras diam neque, rutrum nec quam ac, egestas porttitor lectus.

              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography>ORDER RECEPTION</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Cras in semper ex. Mauris tincidunt purus blandit arcu ullamcorper finibus. Aliquam a iaculis est, eu vehicula elit. Vestibulum urna magna, varius in sollicitudin tincidunt, sollicitudin Etiam posuere semper tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque lacus , id luctus dui risus nec enim.
                Nullam nulla eros, hendrerit vel egestas ac, bibendum tempus dolor. Proin a pulvinar ex. Duis volutpat ipsum nunc. Cras diam neque, rutrum nec quam ac, egestas porttitor lectus.

              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>ORDER RECEPTION</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Cras in semper ex. Mauris tincidunt purus blandit arcu ullamcorper finibus. Aliquam a iaculis est, eu vehicula elit. Vestibulum urna magna, varius in sollicitudin tincidunt, sollicitudin Etiam posuere semper tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque lacus , id luctus dui risus nec enim.
                Nullam nulla eros, hendrerit vel egestas ac, bibendum tempus dolor. Proin a pulvinar ex. Duis volutpat ipsum nunc. Cras diam neque, rutrum nec quam ac, egestas porttitor lectus.

              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>


    </main>
  )
}

export default About