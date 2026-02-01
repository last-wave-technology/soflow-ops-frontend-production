/**
 * Firebase Cloud Messaging service worker.
 * Required for FCM getToken() and background push.
 * Replace the config below with your Firebase project config from Firebase Console.
 */
importScripts('https://www.gstatic.com/firebasejs/11.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_PROJECT_ID.appspot.com',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title ?? 'Notification';
  const options = {
    body: payload.notification?.body ?? '',
    icon: '/favicon.svg',
    data: payload.data ?? {},
  };
  self.registration.showNotification(title, options);
});
