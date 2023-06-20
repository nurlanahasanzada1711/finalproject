import React from 'react'
import style from '../About/about.module.css'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const About = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
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