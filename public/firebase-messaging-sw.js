import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";
import { onBackgroundMessage } from "firebase/messaging/sw";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCImoQ7ARRJ16nxGr1OaHuFhmWerJckg-E",
  authDomain: "cl-sektionen-test.firebaseapp.com",
  projectId: "cl-sektionen-test",
  storageBucket: "cl-sektionen-test.appspot.com",
  messagingSenderId: "1017530078266",
  appId: "1:1017530078266:web:2c2fd85c6f515b356f9103",
  measurementId: "G-7Q1MHPQ2EM",
});

const messaging = getMessaging(firebaseApp);

console.log("SW loaded");

onBackgroundMessage(messaging, (payload) => {
  // Om notisen kommer som en data-notis se
  // https://firebase.google.com/docs/cloud-messaging/concept-options#notifications_and_data_messages
  if (payload.data.title) {
    console.log("New background notification with data!", payload.data);
    self.registration.showNotification(payload.data.title, {
      body: payload.data.body,
      icon: "/media/grafik/favicon/android-chrome-512x512.png",
      image: payload.data.image,
      link: payload.data.link,
      click_action: payload.data.link,
    });
  } else {
    // Notis typ
    console.log("New background notification with notification!", payload.notification);
    // Gör inget - Den visas automatiskt ändå  av någon anledning
  }
});
