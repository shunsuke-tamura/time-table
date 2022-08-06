import { AuthInfoType } from "../components/pages/Authentication"

type UserDataType = {
  users: AuthInfoType[];
}
let dbData: UserDataType

export const readUserDataDB = async (): Promise<boolean> => {
  const res = await fetch("./db/userData.json")
  dbData = await res.json()
  return dbData 
    ? true
    : false
}

export enum AuthCheckStat {
  OK,
  IdNotFound,
  PassDoNotMatch,
  AlreadyRegisteredUser,
  FailedToRegister
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

export const SaveNewUser = async (userInfo: AuthInfoType): Promise<AuthCheckStat> => {
  const userIdx: number = dbData.users.findIndex(el => el.id === userInfo.id)
  if (userIdx !== -1) { return AuthCheckStat.AlreadyRegisteredUser }

  const newDBData: UserDataType = {
    users: [...dbData.users, userInfo]
  }
  const res = await fetch('./php/userData', {
    method: 'post', 
    headers: { 
      'Content-Type': 'application/json',
      'mode': 'cors'
    },
    body: JSON.stringify(newDBData)
  })
  return res.status === 200
    ? AuthCheckStat.OK
    : AuthCheckStat.FailedToRegister
}