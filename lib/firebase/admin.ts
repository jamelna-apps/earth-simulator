import { initializeApp, getApps, cert, type App } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

const ADMIN_APP_NAME = "earth-simulator-admin";

let cachedApp: App | undefined;
let cachedDb: Firestore | undefined;

function getAdminApp(): App {
  if (cachedApp) return cachedApp;

  const existing = getApps().find((a) => a.name === ADMIN_APP_NAME);
  if (existing) {
    cachedApp = existing;
    return existing;
  }

  let serviceAccount;
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    serviceAccount = JSON.parse(
      Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT, "base64").toString()
    );
  } else if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
    serviceAccount = {
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    };
  } else {
    throw new Error("Firebase credentials not configured");
  }

  cachedApp = initializeApp(
    { credential: cert(serviceAccount) },
    ADMIN_APP_NAME
  );
  return cachedApp;
}

export function getAdminDb(): Firestore {
  if (!cachedDb) cachedDb = getFirestore(getAdminApp());
  return cachedDb;
}
