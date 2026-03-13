import { put, del, list } from '@vercel/blob';

const DATA_PREFIX = 'data/';
const IMAGES_PREFIX = 'images/';

// Helper to get data from blob storage
export async function getData(filename: string): Promise<any> {
  try {
    const { blobs } = await list({ prefix: DATA_PREFIX + filename });

    if (blobs.length === 0) {
      return null;
    }

    const response = await fetch(blobs[0].url);
    return await response.json();
  } catch (error) {
    console.error('Error reading from blob:', error);
    return null;
  }
}

// Helper to save data to blob storage
export async function saveData(filename: string, data: any): Promise<boolean> {
  try {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });

    // Delete old file first
    const { blobs } = await list({ prefix: DATA_PREFIX + filename });
    for (const oldBlob of blobs) {
      await del(oldBlob.url);
    }

    // Upload new file
    await put(DATA_PREFIX + filename, blob, {
      access: 'public',
      addRandomSuffix: false,
    });

    return true;
  } catch (error) {
    console.error('Error saving to blob:', error);
    return false;
  }
}

// Helper to upload image
export async function uploadImage(
  file: File | Blob,
  folder: string,
  filename: string
): Promise<string | null> {
  try {
    const path = `${IMAGES_PREFIX}${folder}/${filename}`;

    const { url } = await put(path, file, {
      access: 'public',
      addRandomSuffix: false,
    });

    return url;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
}

// Helper to delete image
export async function deleteImage(url: string): Promise<boolean> {
  try {
    await del(url);
    return true;
  } catch (error) {
    console.error('Error deleting image:', error);
    return false;
  }
}

// Helper to list images in a folder
export async function listImages(folder: string): Promise<string[]> {
  try {
    const { blobs } = await list({ prefix: `${IMAGES_PREFIX}${folder}/` });
    return blobs.map(blob => blob.url);
  } catch (error) {
    console.error('Error listing images:', error);
    return [];
  }
}
