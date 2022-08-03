import { AuthInfoType } from "../components/pages/Authentication"
import userData from '../db/userData.json'

type UserDataType = {
  users: AuthInfoType[];
}
const dbData: UserDataType = userData

export enum AuthCheckStat {
  OK,
  IdNotFound,
  PassDoNotMatch
}

export const AuthCheck = (inputValue: AuthInfoType): AuthCheckStat => {
  const userIdx: number = dbData.users.findIndex(el => el.id === inputValue.id)
  if (userIdx === -1) {
    return AuthCheckStat.IdNotFound
  }
  if (!(dbData.users[userIdx].password === inputValue.password)) {
    return AuthCheckStat.PassDoNotMatch
  }
  return AuthCheckStat.OK
}

export const GetAuthInfo = (loginInfo: AuthInfoType): AuthInfoType => {
  const userIdx: number = dbData.users.findIndex(el => el.id === loginInfo.id)
  return dbData.users[userIdx]
}