export interface ChartData {
  labels: string[];
  datasets: [
    {
      data: number[];
    },
  ];
}

export const dataWeek: ChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{data: [20, 45, 28, 80, 99, 43, 50]}],
};

export const dataMonth: ChartData = {
  labels: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
  ],
  datasets: [
    {
      data: [
        276, 235, 227, 219, 121, 67, 270, 115, 154, 227, 178, 230, 215, 89, 103,
        202, 242, 222, 232, 294, 161, 206, 260, 141, 58, 187, 70, 129, 222, 273,
        132,
      ],
    },
  ],
};

export const dataYear: ChartData = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  datasets: [
    {data: [300, 600, 400, 650, 390, 750, 840, 430, 550, 1200, 650, 900]},
  ],
};
