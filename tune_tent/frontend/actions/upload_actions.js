import * as UploadAPIUtil from '../util/upload_api_util';
export const RECEIVE_UPLOAD = "RECEIVE_UPLOAD";


export const uploadAlbum = payload => dispatch => (
  UploadAPIUtil.uploadAlbum(payload).then(
    upload => dispatch(receiveUpload(upload))
  )
);

const receiveUpload = upload => ({
  type: RECEIVE_UPLOAD,
  upload
});
