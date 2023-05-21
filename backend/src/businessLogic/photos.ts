import { PhotoAccess } from '../dataLayer/photoAccess'
import { createLogger } from '../utils/logger'
import { AttachmentUtils } from '../helpers/attachmentUtils'

const logger = createLogger('PhotoAccess')
const attachmentUtils = new AttachmentUtils()
const photoAccess = new PhotoAccess()

export const getTodosForUser = async (userId: string) => {
  return photoAccess.getTodos(userId)
}

export const addPhoto = async (userId: string, photoKey: string) => {
  logger.info(`adding a photo with key: ${photoKey}`)
  const photoUrl = attachmentUtils.getAttachmentUrl(photoKey)
  return photoAccess.savePhoto({ userId, photoKey, photoUrl })
}

export const deleteTodo = async (userId: string, photoKey: string) => {
  return photoAccess.deleteTodo(userId, photoKey)
}
