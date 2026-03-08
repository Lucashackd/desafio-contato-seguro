import dayjs from "dayjs";

dayjs.locale("pt-br");

export function getFormattedDateTime(date: string | Date): string {
  return dayjs(date).format("DD/MM/YYYY HH:mm");
}

export function getFormattedDate(date: string | Date): string {
  return dayjs(date).format("DD/MM/YYYY");
}
