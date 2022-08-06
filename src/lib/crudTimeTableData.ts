import { DetailType } from "../components/parts/TimeTable/DetailModal";
import { CellDataType } from "../components/parts/TimeTable/Cell";
import { timeTableDataType } from "../components/parts/TimeTable/TimeTable";

import timeTableData from "../../db/timeTable.json"
import initTimeTableData from "../../db/initTimeTable.json"


export type dbDataType = {
  datas: ({id: string} & timeTableDataType)[]
}
let dbData: dbDataType = timeTableData

export const createTimeTableData = (userId: string) => {
  const newData: ({id: string} & timeTableDataType) = initTimeTableData
  dbData.datas.push(newData)
  fetch('/timeTable', {
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
  console.log(JSON.stringify(dbData))
  fetch('/timeTable', {
    method: 'post', 
    headers: { 
      'Content-Type': 'application/json',
      'mode': 'cors'
    },
    body: JSON.stringify(dbData)
  })
}