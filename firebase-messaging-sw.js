/**
 * Firebase Cloud Messaging service worker.
 * Required for FCM getToken() and background push.
 * Replace the config below with your Firebase project config from Firebase Console.
 */
importScripts('https://www.gstatic.com/firebasejs/11.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCXoN9XjKe3q0u1HD5qdVOHKLJX5ZoRZF4",
  authDomain: "soflow-rubios-operations.firebaseapp.com",
  projectId: "soflow-rubios-operations",
  storageBucket: "soflow-rubios-operations.firebasestorage.app",
  messagingSenderId: "327684072993",
  appId: "1:327684072993:web:d65ce9713219af0dace560",
  measurementId: "G-GPP0DD5YHV"
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
