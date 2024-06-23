import { Context } from 'hono';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import config from '../config/firebase.config';

// Initialize a firebase application
initializeApp(config.firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage();

// Handler function for image upload
const uploadImage = async (c: Context) => {
  try {
    const data = await c.req.formData();
    const file = data.get('file') as File;

    if (!file) {
      throw new Error('File not found');
    }

    const dateTime = giveCurrentDateTime();
    const storageRef = ref(storage, `files/${file.name + ' ' + dateTime}`);

    // Create file metadata including the content type
    const metadata = {
      contentType: file.type,
    };

    // Convert the file to a buffer
    const buffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(buffer);

    // Upload the file to bucket storage
    const snapshot = await uploadBytesResumable(storageRef, uint8Array, metadata);

    // Grab the public URL
    const downloadURL = await getDownloadURL(snapshot.ref);

    console.log('File successfully uploaded.');
    return c.json({
      success: true,
      payload: {
        name: file.name,
        type: file.type,
        downloadURL: downloadURL,
      },
      message: 'File uploaded to firebase storage',
    });
  } catch (error: any) {
    console.error(error);
    return c.json(
      {
        success: false,
        payload: [],
        message: error.message,
      },
      400
    );
  }
};

const giveCurrentDateTime = () => {
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  const dateTime = `${date} ${time}`;
  return dateTime;
};

export default uploadImage;
