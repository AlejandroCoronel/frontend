 import React from 'react';

 const HomePage = (props) => {
     return (
         <main className='holder'>
            <div className='homeimg'>
                <img src='images/home/img01.jpg' alt='avion'/>
            </div>
            <div className='columnas'>
                <div className='bienvenidos left'>
                    <h2>Biemvenidos</h2>
                    <p>lksdf lsdfk lñaskd fl sdfl sd lsdfk jsldfkjasfñ asl  aslf lasdkfj asldkf</p>
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