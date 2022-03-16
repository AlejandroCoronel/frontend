import React from 'react';

const ContactoPage = (props) => {
    return (
        <main className="holder">
        <div className="columna contacto">
            <h2>Contacto rápido</h2>
            <form action="" method="" className="formulario">
                <p>
                    <label>Nombre</label>
                    <input type="text" name='nombre'/>
                </p>
                <p>
                    <label>email</label>
                    <input type="email" name='email'/>
                </p>
                <p>
                    <label>Teléfono</label>
                    <input type="text" name='telefono'/>
                </p>
                <p>
                    <label>Comentario</label>
                    <textarea name="mensaje"></textarea>
                </p>
                <p className="centrar"><input type="submit" value="Enviar"/></p>
            </form>
        </div>
        <div className="columna datos">
            <h2>Otras vías de contacto</h2>
            <p>Tambíen se pueden comunicar con nosotros .....</p>
            <ul>
                <li>Teléfono: 4555555</li>
                <li>email: contacto@transportesx.com.ar</li>
                <li>FaceBook</li>
                <li>Skype</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
        </div>
    </main>
    );
}

export default ContactoPage;