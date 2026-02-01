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

// Handle background push. We always show here so we control the icon.
// When testing from Firebase Console: use "Custom data" only (add title/body in data),
// not the "Notification" block, so the browser doesn't auto-show and you get a single
// notification with our app icon.
messaging.onBackgroundMessage((payload) => {
  const data = payload.data ?? {};
  const title =
    payload.notification?.title ?? data.title ?? data.notification?.title ?? 'Notification';
  const body =
    payload.notification?.body ?? data.body ?? data.notification?.body ?? '';
  const options = {
    body,
    icon: '/icon-transparent-cropped.png',
    badge: '/icon-transparent-cropped.png',
    data: { ...data, url: data.url || '/' },
    tag: data.type || data.messageId || 'soflow-fcm',
    renotify: false,
  };
  self.registration.showNotification(title, options);
});
