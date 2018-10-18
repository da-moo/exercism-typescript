class Gigasecond {
  private _date: Date;

  constructor(date: Date) {
    this._date = date;
  }

  date(): Date {
    const currentMillis = this._date.getUTCMilliseconds();
    const gigasecondInMillis = currentMillis + 10e11;
    const gigasecondDate = new Date(this._date);
    gigasecondDate.setUTCMilliseconds(gigasecondInMillis);
    return gigasecondDate;
  }
}

export default Gigasecond;
