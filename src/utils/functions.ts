
export const showMoneySum = (price: number) => {
    return price.toFixed(0);
}
export const createUid = () => {
    return String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, '');
}
export const getFormatedData = (date: Date, format: string) => {
   format = (format || '').toLowerCase();
   if (format === 'yyyy-mm-dd') {
      return [
          date.getFullYear(),
          ('0' + (date.getMonth() + 1)).slice(-2),
          ('0' + date.getDate()).slice(-2)
      ].join('-');
   }
   if (format === 'dd-mm-yyyy') {
    return [
        ('0' + date.getDate()).slice(-2),
        ('0' + (date.getMonth() + 1)).slice(-2),
        date.getFullYear()
    ].join('-');
 }
}