import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase';
import 'firebase/auth'
import { configFirebase } from '../../constantes'

const firebaseApp = firebase.initializeApp(configFirebase);

const Inicio = (props) => {
    const { user, signOut, signInWithGoogle } = props

    return <div>
        {
            user ? <p>Hola, {user.displayName}</p> : <p>Por favor logueate</p>

        }
        {
            user ? <button onClick={signOut} >Cerrar sesion</button> :
                <div>
                    <button onClick={signInWithGoogle}>Iniciar Sesion con Google</button>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button onClick={() => {
                        props.history.push('/form')
                    }}>Ir a ver formulario</button>
                </div>
        }
    </div>
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Inicio);