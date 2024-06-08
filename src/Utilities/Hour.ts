export function TransformHourToNumber(time:string) {
  const array = time.split(":");
  const seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10);

  return seconds/3600;
}

export const HoursArray = [
  {
    hour: "20:00hs"  
  },
  {
    hour: "20:30hs"  
  },
  {
    hour: "21:00hs"  
  },
  {
    hour: "21:30hs"  
  },
  {
    hour: "22:00hs"  
  },
  {
    hour: "22:30hs"  
  },
  {
    hour: "23:00hs"  
  },
  {
    hour: "23:30hs"  
  },
  {
    hour: "00:00hs"  
  },
  {
    hour: "00:30hs"  
  },
  {
    hour: "01:00hs"  
  },
  {
    hour: "01:30hs"  
  },
  {
    hour: "02:00hs"  
  },
  {
    hour: "02:30hs"  
  },
  {
    hour: "03:00hs"  
  },
  {
    hour: "03:30hs"  
  },
  {
    hour: "04:00hs"  
  },
  {
    hour: "04:30hs"  
  },
  {
    hour: "05:00hs"  
  },
  {
    hour: "05:30hs"  
  },
  {
    hour: "06:00hs"  
  },
  {
    hour: "06:30hs"  
  },
  {
    hour: "07:00hs"  
  },
  {
    hour: "07:30hs"  
  },
  {
    hour: "08:00hs"  
  },
  {
    hour: "08:30hs"  
  },
  {
    hour: "09:00hs"  
  },
  {
    hour: "10:00hs"  
  },
  {
    hour: "10:30hs"  
  },
  {
    hour: "11:00hs"  
  },
  {
    hour: "11:00hs"  
  },
  {
    hour: "11:30hs"  
  },
  {
    hour: "12:00hs"  
  },
  {
    hour: "12:30hs"  
  },
  {
    hour: "13:00hs"  
  },
  {
    hour: "13:30hs"  
  },
  {
    hour: "14:00hs"  
  },
  {
    hour: "14:30hs"  
  },
  {
    hour: "15:00hs"  
  },
  {
    hour: "15:30hs"  
  },
  {
    hour: "16:00hs"  
  },
  {
    hour: "16:30hs"  
  },
  {
    hour: "17:00hs"  
  },
  {
    hour: "17:30hs"  
  },
  {
    hour: "18:00hs"  
  },
  {
    hour: "19:00hs"  
  },
  {
    hour: "19:30hs"  
  }
]