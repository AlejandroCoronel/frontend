 import React from 'react';
 import '../styles/components/pages/HomePage.css'

 const HomePage = (props) => {
     return (
         <main className='holder'>
            <div className='homeimg'>
                <img src='images/home/img01.jpg' alt='avion'/>
            </div>
            <div className='columnas'>
                <div className='bienvenidos left'>
                    <h2>Biemvenidos</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus saepe itaque voluptatem accusantium aperiam consectetur amet sequi culpa, minima id expedita nam sit dicta ducimus veniam reprehenderit, labore, magnam non!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus saepe itaque voluptatem accusantium aperiam consectetur amet sequi culpa, minima id expedita nam sit dicta ducimus veniam reprehenderit, labore, magnam non!</p>
                </div>
                <div className='testimonios right'>
                    <h2>Testimonio</h2>
                    <div className='testimonio'>
                        <span className='cita'>Simplemente excelente</span>
                        <span className='autor'>Juan Perez</span>
                    </div>
                </div>
            </div>
         </main>
     );
 }

 export default HomePage;