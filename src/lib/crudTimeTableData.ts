import { DetailType } from "../components/parts/TimeTable/DetailModal";
import { CellDataType } from "../components/parts/TimeTable/Cell";
import { timeTableDataType } from "../components/parts/TimeTable/TimeTable";

import initTimeTableData from "./initTimeTable.json"


export type dbDataType = {
  datas: ({id: string} & timeTableDataType)[]
}
let dbData: dbDataType

export const readTimeTableDB = async (): Promise<boolean> => {
  const res = await fetch("./db/timeTable.json")
  dbData = await res.json()
  return dbData 
    ? true
    : false
}

export const createTimeTableData = (userId: string) => {
  const newData: ({id: string} & timeTableDataType) = initTimeTableData
  dbData.datas.push(newData)
  fetch('./php/timeTable', {
    method: 'post', 
    headers: { 
      'Content-Type': 'application/json',
      'mode': 'cors'
    },
    body: JSON.stringify(dbData)
  })
}

export const readTimeTableData = (userId: string): timeTableDataType => {
  const dataIdx: number = dbData.datas.findIndex(el => el.id === userId);
  const data: timeTableDataType = dbData.datas[dataIdx];
  return data
}

export const updateTimeTableData = (userId: string, periodId: number, detail: DetailType) => {
  const afterData: CellDataType = {
    id: periodId,
    subject: detail.subject,
    detail: detail
  }
  const targetDataIdx: number = dbData.datas.findIndex(el => el.id === userId)
  const rowNum: number = Math.floor(periodId / 10)
  const targetRow: CellDataType[] = [...dbData.datas[targetDataIdx][rowNum as keyof timeTableDataType]]
  const targetCellIdx: number = targetRow.findIndex(el => el.id === periodId)
  dbData.datas[targetDataIdx][rowNum as keyof timeTableDataType][targetCellIdx] = afterData
  fetch('./php/timeTable', {
    method: 'post', 
    headers: { 
      'Content-Type': 'application/json',
      'mode': 'cors'
    },
    body: JSON.stringify(dbData)
  })
}