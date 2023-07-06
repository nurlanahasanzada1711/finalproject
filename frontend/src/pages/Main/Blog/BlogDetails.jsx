import React from 'react'
import fruitcake from '../../../images/fruit-cake.jpg'
import style from '../Blog/blogdetails.module.css'
import muffin from '../../../images/banana-muffin.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import bakingbread from '../../../images/baking-bread.png'
const BlogDetails = () => {
    return (
        <>
            <section className={style.blog}>
                <div className={style.blogwrite}>
                    <h1>BLOG</h1>
                    <p>Amazing Bakery Kit</p>
                    <p>Di Cantina Valpolicella Negrar è la storia di uomini e donne dediti
                        <br></br> alla Nullam dui dolor, sagittis ut ante eget Aliquam eratvolutpat.
                        <br></br>Vivamus tincidunt justo in eros cursus, et viverra elit dignissim.
                        <br></br>Nulla facilisi</p>
                </div>
            </section>

            <section className={style.firstdetail}>
                <h1>Morbi fermentum risus non eros tempus congue</h1>
                <img src={fruitcake} alt='' />
                <h5>CRAS IN SEMPER EX. MAURIS TINCIDUNT PURUS BLANDIT
                    ARCU ULLAMCORPER FINIBUS. ALIQUAM A IACULIS EST,
                    EU VEHICULA ELIT. VESTIBULUM URNA MAGNA, VARIUS IN
                    NEC TEMPOR NUNC BLANDIT NEC. INTEGER CONDIMENTUM
                    ACDUI AC</h5>
                <p>Morbi mollis vestibulum sollicitudin.
                    Nunc in eros a justo facilisis rutrum.
                    Aenean id ullamcorper libero. Vestibulum
                    imperdiet nibh vel magna lacinia ultrices.
                    Sed id interdum urna. Nam ac elit a ante
                    commodo tristique. Duis lacus urna,
                    condimentum a vehicula a, hendrerit ac nisi
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam vulputate, tortor nec commodo ultricies, lectus
                    nisl facilisis enim, vitae viverra urna nulla sed turpis.
                    Nullam lacinia faucibus risus, a euismod lorem tincidunt id.
                    Donec maximus placerat tempor. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Suspendisse faucibus sed dolor eget posuere. Proin tincidunt
                    fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum
                    orci sit amet ullamcorper.</p>
                <p>Donec gravida malesuada lacus, eget tristique Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam vulputate, tortor nec commodo ultricies, lectus
                    nisl facilisis enim, vitae viverra urna nulla sed turpis.
                    Nullam lacinia faucibus risus, a euismod lorem tincidunt
                    id. Donec maximus placerat tempor. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos. Suspendisse faucibus sed dolor
                    eget posuere. Proin tincidunt</p>
                <div className='container'>
                    <div className='picrow'>
                        <div className={style.picflex}>
                            <div className={style.pic}>
                                <img src={muffin} alt='' />
                            </div>
                            <div className={style.info}>
                                <p>Morbi mollis vestibulum sollicitudin.
                                    Nunc in eros a justo facilisis rutrum. Aenean id
                                    ullamcorper libero. Vestibulum imperdiet nibh vel
                                    magna lacinia ultrices. Sed id interdum urna. Nam ac
                                    elit a ante commodo tristique. Duis lacus urna,
                                    condimentum a vehicula a, hendrerit ac nisi Lorem
                                    ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aliquam vulputate, tortor nec commodo ultricies,
                                    lectus nisl facilisis enim, vitae viverra urna nulla
                                    Dsed turpis. Nullam lacinia faucibus risus, a euismod
                                    lorem tincidunt id. Donec</p>
                                <p>Maximus placerat tempor. Class aptent taciti sociosqu
                                    ad litora torquent per conubia nostra, per inceptos
                                    himenaeos. Suspendisse faucibus sed dolor eget posuere.
                                    Proin tincidunt fermentum arcu. Nam ac elementum nibh.
                                    ipsum dolor sit amet, consectetur tincidunt id.</p>


                            </div>
                        </div>
                    </div>
                </div>
                <p>Aliquam vulputate, tortor nec commodo ultricies, lectus
                    nisl facilisis enim, vitae viverra urna nulla sed turpis.
                    Nullam lacinia faucibus risus, a euismod lorem tincidunt id.
                    Donec maximus placerat tempor. Class aptent taciti sociosqu ad
                    litora torquent per conubia nostra, per inceptos himenaeos.Aliquam
                    vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim,
                    vitae viverra urna nulla sed turpis.
                    Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit
                    amet</p>

                <h3>Share:</h3>

                <ul >
                    <li>
                        <FacebookIcon />
                    </li>
                    <li>
                        <TwitterIcon />
                    </li>
                    <li>
                        <YouTubeIcon />
                    </li>
                    <li>
                        <GoogleIcon />
                    </li>
                </ul>
            </section>

            <section>
                <div className='container'>
                    <div className={style.adminrow}>
                        <div className={style.adminflex}>
                            <div className={style.adminpic}>
                                <img src={bakingbread} alt='' />
                            </div>
                            <div className={style.post}>
                                <h4>POSTED BY ADMIN</h4>
                                <p>consectetur, adipisci velit, sed quia non
                                    numquam eius modi tempora incidunt ut labore et
                                    dolore magnam aliquam quaerat voluptatem.
                                    Aenean commodo ligula eget dolor aenean massa.
                                    Cum sociis natoque penatibus et magnis dis
                                    parturient montes, nascetur ridiculus mus.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetails  