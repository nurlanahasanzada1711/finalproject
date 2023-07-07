import React from 'react'
import style from '../Service/servicepage.module.css'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

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

const ServicePage = () => {

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <>
            <main>
                <section className={style.about}>
                    <div className={style.aboutwrite}>
                        <h1>SERVICES</h1>
                        <span>Amazing Bakery Kit</span>
                        <p>Di Cantina Valpolicella Negrar è la storia di uomini e donne dediti alla Nullam dui
                            <br></br> dolor, sagittis ut ante eget Aliquam erat volutpat. Vivamus tincidunt justo in eros
                            <br></br> cursus, et viverra elit dignissim. Nulla facilisi</p>
                    </div>
                </section>

                <section className={style.besthistory}>
                    <h2><b>THE BEST OUR SOLUTIONS​</b>​</h2>
                    <h6>Amazing Bakery Studio</h6>
                </section>
                <section>
                    <div className='container'>
                        <div className='servicerow'>
                            <div className={style.serviceflex}>
                                <div className={style.left}>
                                    <h5>1.</h5>
                                    <h3>ABOUT SERVICES</h3>
                                    <p>Di Cantina Valpolicella Negrar è la storia di
                                        uomini e donne dediti alla Nullam dui dolor,
                                        sagittis ut ante eget, aliquam faucibus sem.
                                        Cras in semper ex. Mauris tincidunt purus blandit
                                        arcu ullamcorper finibus. Maecenas enim justo,
                                        facilisis condimentum justo nec, tempor semper
                                        tortor.</p>
                                    <p>Duis eget orci risus.nec dui sed nullaMauris et leo a
                                        dolor imperdiet imperdiet quis sit amet ante. Suspendisse
                                        dolor quam, volutpat sit amet sagittis</p>
                                </div>
                                <div className={style.right}>
                                    <h5>2.</h5>
                                    <h3>SOLUTIONS</h3>
                                    <p>Cras in semper ex. Mauris tincidunt purus
                                        blandit arcu ullamcorper finibus. Aliquam a
                                        iaculis est, eu vehicula elit. Vestibulum urna
                                        magna, varius in sollicitudin tincidunt,
                                        sollicitudin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='container'>
                        <div className='accardionrow'>
                            <div className={style.accardionflex}>
                                <div className={style.accardionservice}>
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                            <Typography style={{color:"#7E5A4E", fontWeight:"600"}}>01. BAKERY</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography style ={{color:'#A1A1A1'}}>
                                                We have all your favorite traditional bread, 7 days a week! You can choose from a rich variety of cookies, pastries and cakes.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                            <Typography style={{color:"#7E5A4E", fontWeight:"600"}}>02. CAKES</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography style ={{color:'#A1A1A1'}}>
                                                We specialize in custom cakes for all occasions. You can choose from a variety of designs to create the perfect cake for you.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                            <Typography style={{color:"#7E5A4E", fontWeight:"600"}}>03. FRESH JUICES</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography style ={{color:'#A1A1A1'}}>
                                                Choose from a variety of fruits and veggies to make your favorite juice. You can also enjoy a simple fresh squeezed orange juice.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                            <Typography style={{color:"#7E5A4E", fontWeight:"600"}}>04. CATERING</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography style ={{color:'#A1A1A1'}}>
                                                We do catering all from weddings to business functions. We offer our authentic food to be simply delivered, or we can serve it for you.
                                            </Typography>
                                        </AccordionDetails>

                                    </Accordion>
                                   
                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                            <Typography style={{color:"#7E5A4E", fontWeight:"600"}}>05. SMILE TRUCK</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography style ={{color:'#A1A1A1'}}>
                                                Our new awesome team will be hitting the streets with our best picked up goodies for you and much more.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                            <Typography style={{color:"#7E5A4E", fontWeight:"600"}}>06. WEDDINGS</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography style ={{color:'#A1A1A1'}}>
                                                From elegant wedding cakes to delicious gift baskets, we can help you create a perfect and unique wedding.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                <div className={style.accardionwrites}>
                                    <h2><b>THE BEST OUR SOLUTIONS​</b>​</h2>
                                    <h6>Amazing Bakery Studio</h6>
                                    <p>
                                        Di Cantina Valpolicella Negrar è
                                        la storia di uomini e donne dediti alla
                                        creazio Nullam dui dolor, sagittis ut ante
                                        eget, aliquam faucibus sem. Cras in semper
                                        ex. Mauris tincidunt purus blandit arcu
                                        ullamcorper finibus. Maecenas enim justo,
                                        facilisis condimentum justo nec, tempor
                                        semper tortor. Duis eget orci risus.
                                        Pellentesque nec dui sed nulla</p>
                                    <p>
                                        Praesent ac turpis turpis. Vestibulum finibus
                                        sapien ut tortor malesuada, quis ultricies dolor
                                        vehicula. Etiam tempor elit sit amet lobortis
                                        condimentum. Fusce cursus</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default ServicePage