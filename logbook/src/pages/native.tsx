import {IonButton, IonContent, IonHeader, IonItem, IonPage, IonTitle,IonToolbar,} from "@ionic/react";
import ReactAudioPlayer from 'react-audio-player';
import React from "react";

const Home: React.FC = () => {
    var musicPlayer: ReactAudioPlayer | null  
      
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Native functions</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonItem>
            <IonButton onClick={() => musicPlayer?.audioEl.current?.play()}>Play music</IonButton>
            <IonButton onClick={() => musicPlayer?.audioEl.current?.pause()}>Pause music</IonButton>
            <ReactAudioPlayer
              ref={(element) => { musicPlayer = element; }}
              src="./assets/music.mp3"
            // controls
            />
          </IonItem>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Home;