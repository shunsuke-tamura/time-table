import { DetailType } from "../components/parts/TimeTable/DetailModal";
import { dbDataType } from "../components/pages/Top";
import { CellDataType } from "../components/parts/TimeTable/Cell";
import { timeTableDataType } from "../components/parts/TimeTable/TimeTable";

import timeTableData from "../db/timeTable.json"

let dbData: dbDataType = timeTableData

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