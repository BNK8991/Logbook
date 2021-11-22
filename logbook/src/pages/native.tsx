import {IonButton, IonContent, IonHeader, IonItem, IonPage, IonTitle,IonToolbar,} from "@ionic/react";
import ReactAudioPlayer from 'react-audio-player';
import React from "react";

//The original codes are from here: https://github.com/DoQuocBinh/TCH1902-Ionic/blob/master/nativefunctions/src/pages/Home.tsx 

const Home: React.FC = () => {
    var musicPlayer: ReactAudioPlayer | null  
      
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Native functions page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonItem>
            <IonButton onClick={() => musicPlayer?.audioEl.current?.play()}>Play bell's sound</IonButton>
            <IonButton onClick={() => musicPlayer?.audioEl.current?.pause()}>Pause bell's sound</IonButton>
            <ReactAudioPlayer
              ref={(element) => { musicPlayer = element; }}
              src="./assets/music.mp3"
            // controls
            />
          </IonItem>
          <IonItem>
          <IonButton onClick={() => navigator.vibrate(2500)}>Vibrate</IonButton>
        </IonItem>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Home;