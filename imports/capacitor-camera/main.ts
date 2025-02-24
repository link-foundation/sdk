export { PACKAGE_NAME } from './package-name';
export { createContainer } from './create-container';
export { getBase64FromWebp, convertBlobToBase64 } from './get-base64-from-webp';
export { takePhoto } from './take-photo';
export { pickGalleryPhotos } from './pick-photos';
export { uploadPhotos, type IUploadPhotosOptions } from './upload-photos';
export { uploadGallery, type IUploadGalleryOptions } from './upload-gallery';
export { downloadImages } from './download-images';
export { Camera } from './components/camera';
export { ImageCard } from './components/image-card';
export { useCamera, type IUseCameraOptions } from './hooks/use-camera';
export { useGallery, type IUseGalleryOptions } from './hooks/use-gallery';
export { useContainer } from './hooks/use-container';
export { type Photo, type ImageOptions, type GalleryPhoto, type GalleryImageOptions } from '@capacitor/camera';